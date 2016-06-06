import * as b from 'bobril';
import * as bm from 'bobril-m';
import * as fbg from './index';

b.init(() => {
    return [
        fbg.Grid({
            fluid: true,
            children: [
                Section({
                    title: "Responsive",
                    description: "Responsive modifiers enable specifying different column sizes, offsets, alignment and distribution at xs, sm, md & lg viewport widths.",
                    children: [
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: Box({}) }),
                                fbg.Col({ xs: 6, sm: 6, md: 8, lg: 10, children: Box({}) }),
                                fbg.Col({ xs: 6, sm: 3, md: 2, lg: 1, children: Box({}) })
                            ]
                        }),
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: Box({}) }),
                                fbg.Col({ xs: 12, sm: 9, md: 10, lg: 11, children: Box({}) })
                            ]
                        }),
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 10, sm: 6, md: 8, lg: 10, children: Box({}) }),
                                fbg.Col({ xs: 2, sm: 6, md: 4, lg: 2, children: Box({}) })
                            ]
                        })
                    ]
                }),
                Section({
                    title: "Fluid",
                    description: "Percent based width allow fluid resizing of columns and rows.",
                    children: [
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: Box({}) }),
                                fbg.Col({ xs: 6, sm: 6, md: 8, lg: 10, children: Box({}) }),
                                fbg.Col({ xs: 6, sm: 3, md: 2, lg: 1, children: Box({}) })
                            ]
                        }),
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 12, sm: 3, md: 2, lg: 1, children: Box({}) }),
                                fbg.Col({ xs: 12, sm: 9, md: 10, lg: 11, children: Box({}) })
                            ]
                        }),
                        fbg.Row({
                            children: [
                                fbg.Col({ xs: 10, sm: 6, md: 8, lg: 10, children: Box({}) }),
                                fbg.Col({ xs: 2, sm: 6, md: 4, lg: 2, children: Box({}) })
                            ]
                        })
                    ]
                }),
                Section({
                    title: "Offsets",
                    description: "Offset a column.",
                    children: [
                        fbg.Row({
                            children: [
                                fbg.Col({ xsOffset: 11, xs: 1, children: Box({}) }),
                                fbg.Col({ xsOffset: 10, xs: 2, children: Box({}) }),
                                fbg.Col({ xsOffset: 9, xs: 3, children: Box({}) }),
                                fbg.Col({ xsOffset: 8, xs: 4, children: Box({}) }),
                                fbg.Col({ xsOffset: 7, xs: 5, children: Box({}) }),
                                fbg.Col({ xsOffset: 6, xs: 6, children: Box({}) }),
                                fbg.Col({ xsOffset: 5, xs: 7, children: Box({}) }),
                                fbg.Col({ xsOffset: 4, xs: 8, children: Box({}) }),
                                fbg.Col({ xsOffset: 3, xs: 9, children: Box({}) }),
                                fbg.Col({ xsOffset: 2, xs: 10, children: Box({}) }),
                                fbg.Col({ xsOffset: 1, xs: 11, children: Box({}) }),
                            ]
                        }),
                    ]
                }),
                Section({
                    title: "Auto Width",
                    description: "Add any number of auto sizing columns to a row. Let the grid figure it out.",
                    children: [
                        fbg.Row({
                            children: [
                                fbg.Col({ children: Box({}) }),
                                fbg.Col({ children: Box({}) })
                            ]
                        }),
                        fbg.Row({
                            children: [
                                fbg.Col({ children: Box({}) }),
                                fbg.Col({ children: Box({}) }),
                                fbg.Col({ children: Box({}) })
                            ]
                        })
                    ]
                }),
                Section({
                    title: "Alignment",
                    description: "Add classes to align elements to the start or end of row as well as the top, bottom, or center of a column.",
                    children: [
                        h3(".start-"),
                        fbg.Row({
                            children: [
                                fbg.Col({
                                    xs: 12,
                                    children: fbg.Row({
                                        style: nestedRowStyle,
                                        start: fbg.ModificatorType.xs,
                                        children: [
                                            fbg.Col({
                                                xs: 6,
                                                children: Box({})
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        h3(".center-"),
                        fbg.Row({
                            children: [
                                fbg.Col({
                                    xs: 12,
                                    children: fbg.Row({
                                        style: nestedRowStyle,
                                        center: fbg.ModificatorType.xs,
                                        children: [
                                            fbg.Col({
                                                xs: 6,
                                                children: Box({})
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        h3(".end-"),
                        fbg.Row({
                            children: [
                                fbg.Col({
                                    xs: 12,
                                    children: fbg.Row({
                                        style: nestedRowStyle,
                                        end: fbg.ModificatorType.xs,
                                        children: [
                                            fbg.Col({
                                                xs: 6,
                                                children: Box({})
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        h3(".top-"),
                        fbg.Row({
                            top: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    style: higherColStyle,
                                    xs: 6,
                                    children: Box({})
                                }),
                                fbg.Col({
                                    xs: 6,
                                    children: Box({})
                                })
                            ]
                        }),
                        h3(".middle-"),
                        fbg.Row({
                            middle: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    style: higherColStyle,
                                    xs: 6,
                                    children: Box({})
                                }),
                                fbg.Col({
                                    xs: 6,
                                    children: Box({})
                                })
                            ]
                        }),
                        h3(".bottom-"),
                        fbg.Row({
                            bottom: fbg.ModificatorType.xs,
                            children: [
                                fbg.Col({
                                    style: higherColStyle,
                                    xs: 6,
                                    children: Box({})
                                }),
                                fbg.Col({
                                    xs: 6,
                                    children: Box({})
                                })
                            ]
                        }),
                    ]
                }),
                Section({
                    title: "Distribution",
                    description: "Add classes to distribute the contents of a row or column.",
                    children: [
                        h3(".around-"),
                        fbg.Row({
                            children: [
                                fbg.Col({
                                    xs: 12,
                                    children: fbg.Row({
                                        around: fbg.ModificatorType.xs,
                                        children: [
                                            fbg.Col({ xs: 2, children: Box({}) }),
                                            fbg.Col({ xs: 2, children: Box({}) }),
                                            fbg.Col({ xs: 2, children: Box({}) })
                                        ]
                                    })
                                }),
                            ]
                        }),
                        h3(".between-"),
                        fbg.Row({
                            children: [
                                fbg.Col({
                                    xs: 12,
                                    children: fbg.Row({
                                        between: fbg.ModificatorType.xs,
                                        children: [
                                            fbg.Col({ xs: 2, children: Box({}) }),
                                            fbg.Col({ xs: 2, children: Box({}) }),
                                            fbg.Col({ xs: 2, children: Box({}) })
                                        ]
                                    })
                                }),
                            ]
                        }),
                    ]
                })
            ]
        })
    ];
});

function h3(code: string): b.IBobrilChildren {
    return { tag: "h3", children: { tag: "code", children: code } };
}

interface ISectionData {
    title: string;
    description: string;
    children: b.IBobrilChildren;
}

interface ISectionCtx extends b.IBobrilCtx {
    data: ISectionData;
}

const Section = b.createComponent<ISectionData>({
    render(ctx: ISectionCtx, me: b.IBobrilNode) {
        me.children = bm.Paper({
            children: [
                { tag: "h2", children: ctx.data.title },
                { tag: "p", children: ctx.data.description },
                ctx.data.children
            ]
        })
    }
});

interface IBoxData {
}

interface IBoxCtx extends b.IBobrilCtx {
    data: IBoxData;
}

const Box = b.createComponent<IBoxData>({
    render(ctx: ISectionCtx, me: b.IBobrilNode) {
        b.style(me, { backgroundColor: "#007fff", width: "100%", padding: 10, margin: 5 });
    }
});

export const nestedRowStyle = b.styleDef({
    backgroundColor: "#036"
});

export const higherColStyle = b.styleDef({
    height: 126
});
