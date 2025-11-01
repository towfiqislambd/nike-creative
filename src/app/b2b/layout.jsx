import Footer from "../../Shared/Footer";
import B2BNavbar from "../b2b/_conponents/Shared/B2BNavbar";
export default function MainLayout({ children }) {
  return (
    <>
      <B2BNavbar />
      {children}
      <Footer />
    </>
  );
}
