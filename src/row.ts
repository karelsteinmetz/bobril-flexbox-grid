import * as b from 'bobril';

export const enum ModificatorType {
    xs,
    sm,
    md,
    lg
}

export const modificatorKeys = ['start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last'];

export interface IRowData {
    fluid?: boolean;
    className?: string;
    tagName?: string;
    reverse?: boolean;
    start?: ModificatorType;
    center?: ModificatorType;
    end?: ModificatorType;
    top?: ModificatorType;
    middle?: ModificatorType;
    bottom?: ModificatorType;
    around?: ModificatorType;
    between?: ModificatorType;
    first?: ModificatorType;
    last?: ModificatorType;
    children: b.IBobrilChildren;
    style?: b.IBobrilStyles;
}

interface IRowCtx {
    data: IRowData
}

export const Row = b.createComponent<IRowData>({
    render(ctx: IRowCtx, me: b.IBobrilNode) {
        let modificators = ['row'];

        for (let i = 0; i < modificatorKeys.length; ++i) {
            const key = modificatorKeys[i];
            const value = ctx.data[key];
            if (value)
                modificators.push(`${key}-${value}`);
        }

        if (ctx.data.reverse)
            modificators.push('reverse');

        me.tag = ctx.data.tagName || 'div';
        if (ctx.data.className)
            modificators = [ctx.data.className, ...modificators];
        ctx.data.style && b.style(me, ctx.data.style);
        me.className = modificators.join(' ');
        me.children = ctx.data.children;
    }
});