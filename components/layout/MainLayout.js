import Header from "./Header";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

function MainLayout({ children }) {
  return (
    <div>
      <TopHeader />
      <Header />
      <div className="hidden lg:block">
        <Navigation />
      </div>
      <main>{children}</main>
    </div>
  );
}

export default MainLayout;
