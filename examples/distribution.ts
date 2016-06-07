import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./box";
import * as h from "./helpers";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Distribution",
        description: "Add classes to distribute the contents of a row or column.",
        children: [
            h.h3(".around-"),
            fbg.Row({
                children: [
                    fbg.Col({
                        xs: 12,
                        children: fbg.Row({
                            around: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({ xs: 2, children: x.Box({}) }),
                                fbg.Col({ xs: 2, children: x.Box({}) }),
                                fbg.Col({ xs: 2, children: x.Box({}) })
                            ]
                        })
                    }),
                ]
            }),
            h.h3(".between-"),
            fbg.Row({
                children: [
                    fbg.Col({
                        xs: 12,
                        children: fbg.Row({
                            between: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({ xs: 2, children: x.Box({}) }),
                                fbg.Col({ xs: 2, children: x.Box({}) }),
                                fbg.Col({ xs: 2, children: x.Box({}) })
                            ]
                        })
                    }),
                ]
            }),
        ]
    });
}