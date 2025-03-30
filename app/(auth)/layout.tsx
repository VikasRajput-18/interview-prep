import { isAuthenticated } from "@/lib/actions/auth.actions";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticaed = await isAuthenticated();
  if (isUserAuthenticaed) redirect("/");
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default AuthLayout;
