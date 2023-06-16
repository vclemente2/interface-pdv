/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function LinkButton({ to, children }) {
  return <Link to={to}>{children}</Link>;
}
