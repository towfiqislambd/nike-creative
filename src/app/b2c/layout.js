import Navbar from "../../Shared/Navbar";
import Footer from "../../Shared/Footer";

export default function B2CLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
