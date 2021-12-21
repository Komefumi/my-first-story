// import * as React from "react"
import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { SITE_TITLE } from "@/config/site";
import { WrapperProps } from "@/my-types/props";
import { ILinkPayload } from "@/my-types/util-types";

const LINKS: ILinkPayload[] = [["A", "/a"]];

const Layout = ({ children }: WrapperProps) => {
  return (
    <>
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
        <main className="page-content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
