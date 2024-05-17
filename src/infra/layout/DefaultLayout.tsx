import React, { ReactNode } from "react";
import { Header } from "../../components";

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
