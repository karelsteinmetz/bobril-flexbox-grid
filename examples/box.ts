import * as b from 'bobril';

interface IBoxData {
}

interface IBoxCtx extends b.IBobrilCtx {
    data: IBoxData;
}

export const Box = b.createComponent<IBoxData>({
    render(ctx: IBoxCtx, me: b.IBobrilNode) {
        b.style(me, { backgroundColor: "#007fff", padding: 10, margin: 5 });
    }
});