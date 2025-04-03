import logo from '../../public/logo.webp'; 
import footer from "../../public/footer.webp";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center text-gray-700 py-20 px-6 md:px-20"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Logo Row */}
        <div className="flex justify-start mb-6">
          <img src={logo} alt="Supreme Group" className="w-32" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 sm:grid-cols-2 gap-6 text-center md:text-left">
          <div className="text-left" >
            <h3 className="font-bold mb-2">APPLICATIONS</h3>
            <ul className="space-y-1">
              <li>Apparel</li>
              <li>Automotive</li>
              <li>Filtration</li>
              <li>Customised Nonwoven</li>
            </ul>
          </div>

          <div className="text-left" >
            <h3 className="font-bold mb-2">COMPANY</h3>
            <ul className="space-y-1">
              <li>Who We Are</li>
              <li>Global Competency</li>
              <li>Innovation</li>
              <li>ESG Impact</li>
            </ul>
          </div>

          <div className="text-left" >
            <h3 className="font-bold mb-2">MORE</h3>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="text-left" >
            <h3 className="font-bold mb-2">FOLLOW US</h3>
            <ul className="space-y-1">
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-15 text-sm lg:flex lg:items-center lg:justify-between">
          <p>©2025. All Rights Reserved.</p>
          <p className="hidden lg:block">Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
