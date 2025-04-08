// comment added
// src/components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white p-4 text-center">
        {/* footer line */}
        <p>© {new Date().getFullYear()} Todo App. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;