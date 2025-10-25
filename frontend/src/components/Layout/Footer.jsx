import React from "react";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", marginTop: "40px", padding: "20px" }}>
      <hr />
      <p>© {new Date().getFullYear()} Bug Tracker & Vulnerability Scanner</p>
    </footer>
  );
}
