export const TheodoGroupCompanies = [
  "theodo",
  "bam",
  "padok",
  "hokla",
  "sicara",
  "sipios",
  "theodo-uk",
  "theodo-us",
  "nimbleways",
  "aleios",
  "solona",
] as const;

export function sanitizeCompanyNameForDisplay(
  company: (typeof TheodoGroupCompanies)[number]
): string {
  return company.toLowerCase().replace(/-/g, " ");
}

export const Users = {
  "1": {
    name: "John Doe",
    id: 1,
  },
  "2": {
    name: "Jane Doe",
    id: 2,
  },
} as const;
