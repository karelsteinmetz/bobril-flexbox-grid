import * as b from 'bobril';

export interface IBoxData {
    style?: b.IBobrilStyles;
    children?: b.IBobrilChildren;
}

interface IBoxCtx extends b.IBobrilCtx {
    data: IBoxData;
}

export const Box = b.createComponent<IBoxData>({
    render(ctx: IBoxCtx, me: b.IBobrilNode) {
        b.style(me, [baseStyle, ctx.data.style && ctx.data.style]);
        me.children = ctx.data.children;
    }
});

export const baseStyle = b.styleDef({
    backgroundColor: "#007fff",
    padding: 10,
    margin: 5,
    textAlign: "center"
});