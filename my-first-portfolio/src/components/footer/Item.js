import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <h5 className="mb-1 font-semibold">{title}</h5>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-400 duration-300
          text-sm cursor-pointer leading-6 hover:"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;