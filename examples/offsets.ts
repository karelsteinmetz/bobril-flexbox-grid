import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./Box";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Offsets",
        description: "Offset a column.",
        children: [
            fbg.Row({
                children: [
                    fbg.Col({ xsOffset: 11, xs: 1, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 10, xs: 2, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 9, xs: 3, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 8, xs: 4, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 7, xs: 5, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 6, xs: 6, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 5, xs: 7, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 4, xs: 8, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 3, xs: 9, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 2, xs: 10, children: x.Box({}) }),
                    fbg.Col({ xsOffset: 1, xs: 11, children: x.Box({}) })
                ]
            }),
        ]
    });
}