"use client";

import { ReactNode, useState } from "react";
import { Header, Navbar } from ".";
import { ModalsContainer } from "../elements";
import { Toaster } from "sonner";

type ContainerProps = {
  children: ReactNode;
};

export function Container({ children }: ContainerProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row relative">
      <Navbar opened={navbarOpen} setOpened={setNavbarOpen} />
      <Header setOpened={setNavbarOpen} />
      <main className="max-w-[1600px] md:pl-[300px] w-full min-h-screen mx-auto">
        {children}
      </main>
      <ModalsContainer />
      <Toaster />
    </div>
  );
}
