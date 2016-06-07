import * as b from "bobril";
import * as bm from "bobril-m";

interface ISectionData {
    title: string;
    description: string;
    children: b.IBobrilChildren;
}

interface ISectionCtx extends b.IBobrilCtx {
    data: ISectionData;
}

export const Section = b.createComponent<ISectionData>({
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