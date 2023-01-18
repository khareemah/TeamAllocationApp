import React from "react";

const Footer = () => {
  const date = new Date();
  return <footer>Team member allocation app - {date.getFullYear()}</footer>;
};

export default Footer;
