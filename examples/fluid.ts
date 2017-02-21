import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./box";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Fluid",
        description: "Percent based width allow fluid resizing of columns and rows.",
        children: [
            fbg.Row({
                children: [
                    fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: x.Box({}) }),
                    fbg.Col({ xs: 6, sm: 6, md: 8, lg: 10, children: x.Box({}) }),
                    fbg.Col({ xs: 6, sm: 3, md: 2, lg: 1, children: x.Box({}) })
                ]
            }),
            fbg.Row({
                children: [
                    fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: x.Box({}) }),
                    fbg.Col({ xs: 12, sm: 9, md: 10, lg: 11, children: x.Box({}) })
                ]
            }),
            fbg.Row({
                children: [
                    fbg.Col({ xs: 10, sm: 6, md: 8, lg: 10, children: x.Box({}) }),
                    fbg.Col({ xs: 2, sm: 6, md: 4, lg: 2, children: x.Box({}) })
                ]
            })
        ]
    });
}