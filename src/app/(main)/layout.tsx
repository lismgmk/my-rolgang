import Base from "@/layouts/Base";
import { getListPage } from "@/lib/contentParser";
import { Call_to_action } from "@/types";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const callToAction: Call_to_action = getListPage(
    "sections/call-to-action.md",
  );
  return (
    <Base backgroundColor="bg-quaternary/20" callToAction={callToAction}>
      {children}
    </Base>
  );
};

export default MainLayout;
