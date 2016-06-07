import * as b from "bobril";

declare var DEBUG: boolean;

b.asset(DEBUG ? "./css/flexboxgrid.css" : "./css/flexboxgrid.min.css");

export * from "./src/grid";
export * from "./src/row";
export * from "./src/col";
