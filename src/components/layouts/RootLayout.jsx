import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
