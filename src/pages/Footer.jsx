// src/components/Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Todo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;