import Logout from "@/components/Logout";
import { isAuthenticated } from "@/lib/actions/auth.actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticaed = await isAuthenticated();
  if (!isUserAuthenticaed) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link
          href={"/"}
          className="
      flex items-center gap-2"
        >
          <Image src={"/logo.svg"} alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">Prep AI</h2>
        </Link>

        <Logout />
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
