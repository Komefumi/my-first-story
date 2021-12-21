import { ReactNode } from "react";

export interface ILinkPayload extends Array<string> {
  0: string;
  1: string;
}

export interface IShortCodes {
  [componentName: string]: ReactNode;
}
