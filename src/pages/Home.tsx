import {
  TheodoGroupCompanies,
  Users,
  sanitizeCompanyNameForDisplay,
} from "../constants";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <h2>Home</h2>
      <div>
        <h3>Explore Theodo Group Companies:</h3>
        <ul>
          {TheodoGroupCompanies.map((company) => (
            <li className="capitalize" key={company}>
              <Link className="capitalize" to={`/about/${company}`}>
                {sanitizeCompanyNameForDisplay(company)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3> Explore users</h3>
        <ul>
          {Object.values(Users).map((user) => (
            <li key={user.id}>
              <Link to={`/user/${user.id}`}>{user.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
