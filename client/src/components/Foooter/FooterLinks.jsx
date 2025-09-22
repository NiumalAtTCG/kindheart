import React from "react";

const FooterLinks = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.name} className="cursor-pointer transition-all duration-300 hover:translate-x-[2px]">
          <a href={`/${link.name.toLowerCase()}`}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;