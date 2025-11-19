import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className=" relative border-t border-gray-200 bg-cover bg-center bg-no-repeat text-primary-text"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/r23mb4qt/Frame-2147227186-1.png')",
      }}
    >
      <div className="absolute inset-0"></div>

      <div className="container relative z-10 max-w-[1720px] mx-auto px-5 xl:px-0 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-primary-text leading-relaxed">
            We’re dedicated to creating elegant, durable, and customizable door
            designs that enhance your home’s beauty and security—crafted with
            precision to match your unique style.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-primary-text mb-4">Quick Links</h4>
          <ul className="space-y-2 text-primary-text">
            <li>
              <a href="#" className="hover:text-primary-text">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-text">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-text">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-text">
                Become a Partner
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-text mb-4">
            Help & Support
          </h4>
          <ul className="space-y-2 text-primary-text">
            <li>
              <a href="#" className="hover:text-primary-text">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary-text">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-primary-text mb-4">Contact</h4>
          <ul className="space-y-3 text-primary-text">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary-text mt-[2px]" />
              <span>Derma, Dhaka, Bangladesh (B2B)</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-text" />
              <span>(111) 111-1234</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-text" />
              <span>support@thewisecrm.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-[#CDCDCD] py-5 text-center text-sm text-primary-text">
        © 2025 CMC. All rights reserved.
      </div>
    </footer>
  );
}
