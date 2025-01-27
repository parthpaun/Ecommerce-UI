import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import AppContextProvider from "./components/providers/app-context";

const Layout = ({ children }) => {
  return (
    <AppContextProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </AppContextProvider>
  );
};

export default Layout;
