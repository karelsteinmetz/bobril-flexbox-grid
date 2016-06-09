import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./box";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Reversing",
        description: "",
        children: [
            fbg.Row({
                reverse: true,
                children: [
                    fbg.Col({ xs: 2, children: x.Box({ children: 1 }) }),
                    fbg.Col({ xs: 2, children: x.Box({ children: 2 }) }),
                    fbg.Col({ xs: 2, children: x.Box({ children: 3 }) }),
                    fbg.Col({ xs: 2, children: x.Box({ children: 4 }) }),
                    fbg.Col({ xs: 2, children: x.Box({ children: 5 }) }),
                    fbg.Col({ xs: 2, children: x.Box({ children: 6 }) })
                ]
            })
        ]
    });
}