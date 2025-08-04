import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      {children}
    </section>
  );
};

export default Container;
