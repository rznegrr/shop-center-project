import Header from "./Header";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

function MainLayout({children}) {
  return (
    <div>
      <TopHeader />
      <Header />
      <Navigation/>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
