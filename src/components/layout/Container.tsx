import { ReactNode } from "react";
import { ModalsContainer } from "../elements";
import { Navigation } from "./Navigation";

type ContainerProps = {
  children: ReactNode;
};

export function LayoutContainer({ children }: ContainerProps) {
  return (
    <div className="flex flex-col md:flex-row relative">
      <Navigation />
      <main className="max-w-[1600px] md:pl-[300px] w-full min-h-screen mx-auto">
        {children}
      </main>
      <ModalsContainer />
    </div>
  );
}
