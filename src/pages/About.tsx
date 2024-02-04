import { Link, useParams } from "react-router-dom";
import {
  TheodoGroupCompanies,
  sanitizeCompanyNameForDisplay,
} from "../constants";

export function About() {
  const { company } = useParams<{
    company: (typeof TheodoGroupCompanies)[number];
  }>();
  return (
    <div>
      <h2 className="capitalize">
        About {sanitizeCompanyNameForDisplay(company)}
      </h2>
      <Link to="/">go back Home</Link>
    </div>
  );
}
