import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBarPage from "./navbar";
import FooterPage from "./footer";
import ScrollToTop from "./scrolltoptop";

export default function Root() {
  const {pathname} = useLocation();
  return (
    <>
    <ScrollToTop/>
      {pathname === "/Login" || pathname === "/Register" ? (
        ""
      ) : (
        <NavBarPage />
      )}

      <div>
        <Outlet />
      </div>

      {pathname === "/Login" || pathname === "/Register" ? (
        ""
      ) : (
        <FooterPage />
      )}
    </>
  );
}
