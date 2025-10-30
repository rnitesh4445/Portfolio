import React from "react";
export default function Footer() {
  return (
    <footer className="text-center py-6 text-gray-400 bg-gray-950 border-t border-gray-800">
      © {new Date().getFullYear()} Nitesh Kumar. Built with ❤️ using React &
      Tailwind CSS.
    </footer>
  );
}
