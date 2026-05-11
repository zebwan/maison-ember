import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import IntroScreen from "../IntroScreen/IntroScreen";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

import "./Layout.css";

function Layout() {
  return (
    <>
      <ScrollToTop />
      <IntroScreen />

      <div className="site-shell">
        <Navbar />

        <main className="site-main">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default Layout;