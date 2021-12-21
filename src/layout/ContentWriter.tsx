// import * as React from "react"
import React, { ReactNode } from "react";
import { MDXProvider } from "@mdx-js/react";
import BaseLayout from "./index";

interface WrapperProps {
  children: ReactNode;
}

const shortcodes = {};

const Layout = ({ children }: WrapperProps) => {
  return (
    <MDXProvider components={shortcodes}>
      <BaseLayout><div className="container">{children}</div></BaseLayout>
    </MDXProvider>
  );
};

export default Layout;
