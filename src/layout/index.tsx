// import * as React from "react"
import React, { ReactNode } from "react";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import { SITE_TITLE } from "@/config/site";

const LINKS = [];

interface WrapperProps {
  children: ReactNode;
}

const shortcodes = {};

const Layout = ({ children }: WrapperProps) => {
  return (
    <MDXProvider components={shortcodes}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{SITE_TITLE}</title>
      </Helmet>
      <div className="page">
        <nav className="site-nav">
          <div className="title-section">
            <span className="site-title">
              <Link to="/">Home</Link>
            </span>
          </div>
          <ul>
            {LINKS.map(([text, path]) => (
              <li key={path}>
                <Link to={path}>{text}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <main className="page-content">
          <div className="container">{children}</div>
        </main>
      </div>
    </MDXProvider>
  );
};

export default Layout;
