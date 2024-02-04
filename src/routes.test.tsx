import { render, waitFor } from "@testing-library/react";

// in jest, we can rely on the mock prefix only for hoisted variables,
// vitest is more declarative, and we use doMock which avoid mock hosting (but we need to write imports after mocking code)
const mockRoutesComponents: Array<{
  importPath: string;
  importName?: string;
  componentName: string;
}> = [
  {
    importPath: "./pages/Page404",
    importName: "Page404",
    componentName: "Page404",
  },
  {
    importPath: "./pages/Home",
    importName: "Home",
    componentName: "Home",
  },
  {
    importPath: "./pages/About",
    importName: "About",
    componentName: "About",
  },
  {
    importPath: "./pages/User",
    importName: "User",
    componentName: "User",
  },
];

for (const mockElement of mockRoutesComponents) {
  vi.doMock(mockElement.importPath, () => ({
    __esModule: true,
    [mockElement.importName ?? "default"]: () => (
      <div>{mockElement.componentName}</div>
    ),
  }));
}

import { routes } from "./routes";
import { TheodoGroupCompanies } from "./constants";

const COMPANIES_LIST = TheodoGroupCompanies.map((company) => ({
  company,
  error: false,
}));

const COMPANIES_LIST_WITH_ERROR = [
  ...COMPANIES_LIST,
  { company: "invalidCompany", error: true },
];

const NUMBER_LIST = ["0", "1", "16", "101"].map((number) => ({
  number,
  error: false,
}));
const NUMBER_LIST_WITH_ERROR = [
  ...NUMBER_LIST,
  { number: "NotANumber", error: true },
];

import { MemoryRouter, Route, Switch } from "react-router-dom";
describe("routing tests", () => {
  it.each([
    { url: "/", expectedComponentName: "Home" },
    { url: "/404", expectedComponentName: "Page404" },
    ...COMPANIES_LIST_WITH_ERROR.map(({ company, error }) => ({
      url: `/about/${company}`,
      expectedComponentName: error ? "Page404" : "About",
    })),
    ...NUMBER_LIST_WITH_ERROR.map(({ number, error }) => ({
      url: `/user/${number}`,
      expectedComponentName: error ? "Page404" : "User",
    })),
  ])(
    "should navigate to the expected component: $expectedComponentName for the given url: $url",
    async ({ url, expectedComponentName }) => {
      const { getByText } = render(
        <MemoryRouter initialEntries={[url]}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact strict>
                <route.Component />
              </Route>
            ))}
          </Switch>
        </MemoryRouter>
      );

      await waitFor(() =>
        expect(getByText(expectedComponentName)).toBeTruthy()
      );
    }
  );
});
