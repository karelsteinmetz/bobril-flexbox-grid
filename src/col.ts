import * as b from 'bobril';

type ModificatorType = number | boolean;

export interface IColData {
    className?: string;
    tagName?: string;
    reverse?: boolean;
    xs?: ModificatorType,
    sm?: ModificatorType,
    md?: ModificatorType,
    lg?: ModificatorType,
    xsOffset?: number,
    smOffset?: number,
    mdOffset?: number,
    lgOffset?: number,
    children: b.IBobrilChildren;
    style?: b.IBobrilStyles;
}

interface IColCtx {
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
        const classes = [];

        if (ctx.data.className)
            classes.push(ctx.data.className);

        if (ctx.data.reverse)
            classes.push('reverse');

        for (const key in ctx.data) {
            if (ctx.data.hasOwnProperty(key) && classMap[key]) {
                let colBaseClass = classMap[key];
                colBaseClass = isNaN(Number(ctx.data[key]))
                    ? colBaseClass
                    : colBaseClass + '-' + ctx.data[key];
                classes.push(colBaseClass);
            }
        }

        ctx.data.style && b.style(me, ctx.data.style);
        me.className = classes.join(' ');
        me.children = ctx.data.children;
    }
});
