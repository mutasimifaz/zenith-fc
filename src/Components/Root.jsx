import { Outlet } from "react-router-dom";
import Header from "./../Shared/Header";
import Footer from "./../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
