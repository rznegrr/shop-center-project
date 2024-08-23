import CopyRight from "./CopyRight";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

function MainLayout({ children }) {
  return (
    <div>
      <div>
        <TopHeader />
        <Header />
        <div className="hidden lg:block">
          <Navigation />
        </div>
      </div>
      <main>{children}</main>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default MainLayout;
