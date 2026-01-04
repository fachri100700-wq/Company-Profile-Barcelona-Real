import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarPage from "./navbar";
import FooterPage from "./footer";

export default function Root() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/Login" || location.pathname === "/Register" ? (
        ""
      ) : (
        <NavBarPage />
      )}

      <div>
        <Outlet />
      </div>

      {location.pathname === "/Login" || location.pathname === "/Register" ? (
        ""
      ) : (
        <FooterPage />
      )}
    </>
  );
}
