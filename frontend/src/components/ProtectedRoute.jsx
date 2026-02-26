import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const loginTime = localStorage.getItem("adminLoginTime");

  if (!loginTime) {
    return <Navigate to="/admin/login" />;
  }

  const oneHour = 60 * 60 * 1000;
  const now = Date.now();

  if (now - loginTime > oneHour) {
    localStorage.removeItem("adminLoginTime");
    return <Navigate to="/admin/login" />;
  }

  return children;
}