import Footer from "./footer";
import Header from "./header";
import AppContextProvider from "../providers/app-context";

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
