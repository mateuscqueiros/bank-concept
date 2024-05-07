"use client";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Header } from "./Header";

export function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <Navbar opened={navbarOpen} setOpened={setNavbarOpen} />
      <Header setOpened={setNavbarOpen} />
    </>
  );
}
