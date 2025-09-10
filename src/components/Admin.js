import { useEffect } from "react";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

// helper function to store the redirect path
function storeRedirectUrl(url) {
  localStorage.setItem("redirectAfterLogin", url);
}

export default function Admin() {
  const { user } = useUser();
  const navigate = useNavigate();

  // List of allowed admin emails
  const adminEmails = ["sahilkumar1012@gmail.com"];

  // Always call hooks at top-level
  // useEffect(() => {
  //   if (!user) {
  //     storeRedirectUrl(window.location.pathname);
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  if (!user) return null; // nothing while redirecting

  if (!adminEmails.includes(user.email)) {
    return <p>Access Denied. Admins only.</p>;
  }

  return (
    <div>
      <h1>Admin Panel</h1>
      <UserList />
    </div>
  );
}
