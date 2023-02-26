import Footer from "./Footer";
import Header from "./Header";

type mainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<mainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
