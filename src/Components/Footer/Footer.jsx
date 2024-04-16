

const Footer = () => {
  return (
    <footer  className="footer p-10 bg-black text-base-content">
     <div className="text-white">
      <h1 className="text-2xl font-semibold mb-3 ">Homecrafts</h1>
      <p>Collins Street West, Victoria 8007, Australia.</p>
      <p>+1 246-345-0695</p>
      <p>info@example.com</p>
     </div>
     <div className="text-white">
     <h1 className="text-2xl font-semibold mb-3 ">Navigations</h1>
     <p>About Us</p>
     <p>FAQs</p>
     <p>Contact</p>
     <p>Blog</p>
     </div>
     <div className="text-white">
     <h1 className="text-2xl font-semibold mb-3 ">The Highlights</h1>
     <p>Apartment</p>
     <p>My Houses</p>
     <p>Condos</p>
     <p>Villas</p>
     </div>
     <div className="text-white">
     <h1 className="text-2xl font-semibold mb-3 ">Agent & Agency</h1>
     <p>Agency List</p>
     <p>Agency Details</p>
     <p>Agents List</p>
     <p>Agents details</p>
     </div>
     <div className="text-white">
     <h1 className="text-2xl font-semibold mb-3 ">Download Apps</h1>
     <div className="flex items-center gap-3 border-2 p-3">
      <img className="h-10" src="https://i.ibb.co/Jrw2r0Y/732208.png" alt="" />
      <p><span className="text-2xl" >Google Play </span> <br />
        Get it Now</p>
     </div>
     <div className="flex items-center gap-5 border-2 p-3 px-4">
      <img className="h-10" src="https://i.ibb.co/47w8k7L/alexander-shatov-mr4-JG4-SYOF8-unsplash.jpg" alt="" />
      <p><span className="text-2xl" >App store </span> <br />
        Get it Now</p>
     </div>
     </div>
    </footer>
  );
};

export default Footer;