import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../pages/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar></Navbar>
      <main className="flex-grow container mx-auto p-4">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
