import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header/Header";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
