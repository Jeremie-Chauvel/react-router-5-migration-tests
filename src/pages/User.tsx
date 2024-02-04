import { Link, useParams } from "react-router-dom";
import { Users } from "../constants";

export function User() {
  const { userId } = useParams<{
    userId: keyof typeof Users;
  }>();
  return (
    <div>
      <h2 className="capitalize">User {Users[userId].name}</h2>
      <Link to="/">go back Home</Link>
    </div>
  );
}
