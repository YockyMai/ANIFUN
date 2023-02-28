import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const SiteLogo = () => {
  return (
    <Link to={"/"}>
      <img className={"site-logo"} alt={"Логотип сайта"} src={"/vite.svg"} />
    </Link>
  );
};

export default SiteLogo;
