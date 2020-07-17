import React from "react";
import NavbarItem from "./NavbarItem";

export default function LoggedOut() {
  return (
    <div
      style={{
        dislay: "flex !important",
        justifyContent: "flex-end !important",
        alignItems: "flex-end !important",
      }}
    >
      <NavbarItem
        path="/login"
        linkText="Login"
        style={{ justifyContent: "flex-end," }}
      />
    </div>
  );
}
