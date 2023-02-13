import React from "react";
import { RiAddCircleFill, RiEyeFill, RiUser3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import "./Dashbord.css";

const DashboardBar = () => {
  const location = useLocation();
  return (
    <section>
      <div>
        <LinkButton
          Icon={RiAddCircleFill}
          text="Create Product"
          url={"createproduct"}
          active={location.pathname === "/admin/createproduct"}
        />
      </div>
      <div>
        <LinkButton
          Icon={RiEyeFill}
          text="Products"
          url={"products"}
          active={location.pathname === "/admin/products"}
        />
      </div>
      <div>
        <LinkButton
          Icon={RiUser3Fill}
          text="Users"
          url={"users"}
          active={location.pathname === "/admin/users"}
        />
      </div>
    </section>
  );
};

export default DashboardBar;

function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <button className={active ? "blue" : "black"}>
        <Icon />
        {text}
      </button>
    </Link>
  );
}
