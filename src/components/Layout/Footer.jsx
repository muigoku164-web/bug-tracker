import React from "react";

const Footer = () => (
  <footer className="bg-white shadow-sm mt-12">
    <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
      &copy; {new Date().getFullYear()} Bug Tracker &ndash; Made for learning and personal use.
    </div>
  </footer>
);

export default Footer;
