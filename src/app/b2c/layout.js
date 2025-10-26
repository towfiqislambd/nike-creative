import Footer from "../../Shared/Footer";
import B2CNavbar from "../../Shared/B2CNavbar";

export default function B2CLayout({ children }) {
  return (
    <>
      <B2CNavbar />
      {children}
      <Footer />
    </>
  );
}
