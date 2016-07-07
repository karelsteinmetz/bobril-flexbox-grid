import * as b from "bobril";

export interface IGridData {
    fluid?: boolean;
    className?: string;
    tagName?: string;
    children: b.IBobrilChildren;
    style?: b.IBobrilStyles;
}

interface IGridCtx {
    data: IGridData
}

export const Grid = b.createComponent<IGridData>({
    render(ctx: IGridCtx, me: b.IBobrilNode) {
        me.tag = ctx.data.tagName || 'div';
        const containerClass = ctx.data.fluid ? 'container-fluid' : 'container';
        me.className = ctx.data.className
            ? ctx.data.className + ' ' + containerClass
            : containerClass;
        ctx.data.style && b.style(me, ctx.data.style);
        me.children = ctx.data.children;
    }
});
