import Topbar from "../components/Topbar";
import Topbar2 from "../components/Topbar2";
import GSAPmain from "../components/GSAPmain";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Chat from "../components/Chat";

const MainLayout = () => {
  return (
    <>
      <GSAPmain />
      <Topbar />
      <Topbar2 />
      <Chat />

      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
