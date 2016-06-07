import * as b from "bobril";
import * as s from "./section";
import * as fbg from '../index';
import * as x from "./box";
import * as h from "./helpers";

export function create(): b.IBobrilNode {
    return s.Section({
        title: "Alignment",
        description: "Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column.",
        children: [
            h.h3(".start-"),
            fbg.Row({
                children: [
                    fbg.Col({
                        xs: 12,
                        children: fbg.Row({
                            style: h.nestedRowStyle,
                            start: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    xs: 6,
                                    children: x.Box({})
                                })
                            ]
                        })
                    })
                ]
            }),
            h.h3(".center-"),
            fbg.Row({
                children: [
                    fbg.Col({
                        xs: 12,
                        children: fbg.Row({
                            style: h.nestedRowStyle,
                            center: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    xs: 6,
                                    children: x.Box({})
                                })
                            ]
                        })
                    })
                ]
            }),
            h.h3(".end-"),
            fbg.Row({
                children: [
                    fbg.Col({
                        xs: 12,
                        children: fbg.Row({
                            style: h.nestedRowStyle,
                            end: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    xs: 6,
                                    children: x.Box({})
                                })
                            ]
                        })
                    })
                ]
            }),
            h.h3(".top-"),
            fbg.Row({
                top: fbg.ModificatorType.xs,
                children: [
                    fbg.Col({
                        style: h.higherColStyle,
                        xs: 6,
                        children: x.Box({})
                    }),
                    fbg.Col({
                        xs: 6,
                        children: x.Box({})
                    })
                ]
            }),
            h.h3(".middle-"),
            fbg.Row({
                middle: fbg.ModificatorType.xs,
                children: [
                    fbg.Col({
                        style: h.higherColStyle,
                        xs: 6,
                        children: x.Box({})
                    }),
                    fbg.Col({
                        xs: 6,
                        children: x.Box({})
                    })
                ]
            }),
            h.h3(".bottom-"),
            fbg.Row({
                bottom: fbg.ModificatorType.xs,
                children: [
                    fbg.Col({
                        style: h.higherColStyle,
                        xs: 6,
                        children: x.Box({})
                    }),
                    fbg.Col({
                        xs: 6,
                        children: x.Box({})
                    })
                ]
            }),
        ]
    });
}