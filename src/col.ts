import * as b from 'bobril';

export type ColModificatorType = number | boolean;

export interface IModificatorTypeColData {
    xs?: ColModificatorType;
    sm?: ColModificatorType;
    md?: ColModificatorType;
    lg?: ColModificatorType;
}

export interface IOffsetColData {
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
}

export interface IColData extends IModificatorTypeColData, IOffsetColData {
    className?: string;
    tagName?: string;
    reverse?: boolean;
    children: b.IBobrilChildren;
    style?: b.IBobrilStyles;
}

interface IColCtx extends b.IBobrilCtx {
    data: IColData
}

const classMap = {
    xs: 'col-xs',
    sm: 'col-sm',
    md: 'col-md',
    lg: 'col-lg',
    xsOffset: 'col-xs-offset',
    smOffset: 'col-sm-offset',
    mdOffset: 'col-md-offset',
    lgOffset: 'col-lg-offset'
}

export const Col = b.createComponent<IColData>({
    render(ctx: IColCtx, me: b.IBobrilNode) {
        const classes: string[] = [];

        if (ctx.data.className)
            classes.push(ctx.data.className);

        if (ctx.data.reverse)
            classes.push('reverse');

        for (const key in ctx.data) {
            if (ctx.data.hasOwnProperty(key) && (<any>classMap)[key]) {
                let colBaseClass = (<any>classMap)[key];
                let colClass = (<any>ctx.data)[key];
                if (typeof (colClass) !== "boolean" && !isNaN(Number(colClass)))
                    colBaseClass = colBaseClass + '-' + colClass;
                classes.push(colBaseClass);
            }
        }

        me.className = classes.join(' ');
        ctx.data.style && b.style(me, ctx.data.style);
        me.children = ctx.data.children;
    }
});
