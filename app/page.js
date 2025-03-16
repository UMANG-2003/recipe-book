"use client";
import React from "react";
import AfterLogin from "./components/AfterLogin";
import BeforeLogin from "./components/BeforeLogin";
import { useSession } from "next-auth/react";

function Home() {
  const { data: session } = useSession();
  
  
  if (session) {
    return (
      <>
        <AfterLogin />
      </>
    );
  }

  return (
    <>
  
      <BeforeLogin />
    </>
  );
}

export default Home;
