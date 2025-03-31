"use client";
import { logout } from "@/lib/actions/auth.actions";
import React from "react";

const Logout = () => {
  return (
    <button onClick={logout} className="btn-primary">
      Logout
    </button>
  );
};

export default Logout;
