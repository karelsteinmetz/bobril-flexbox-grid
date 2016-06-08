import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./box";
import * as h from "./helpers";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Auto Width",
        description: "Add any number of auto sizing columns to a row. Let the grid figure it out.",
        children: [
            fbg.Row({
                children: [
                    fbg.Col({ children: x.Box({}), xs: true }),
                    fbg.Col({ children: x.Box({}), xs: true })
                ]
            }),
            fbg.Row({
                children: [
                    fbg.Col({ children: x.Box({}), xs: true }),
                    fbg.Col({ children: x.Box({}), xs: true }),
                    fbg.Col({ children: x.Box({}), xs: true })
                ]
            })
        ]
    });
}