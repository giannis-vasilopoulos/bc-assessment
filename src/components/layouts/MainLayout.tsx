import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = (props: MainLayoutProps) => {
  return (
    <>
      <nav />
      {props.children}
      <footer />
    </>
  );
};

export default MainLayout;
