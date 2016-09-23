import * as b from 'bobril';

export const enum ModificatorType {
    xs = 1,
    sm,
    md,
    lg
}

const ModificatorTypeMap = {
    [ModificatorType.xs]: "xs",
    [ModificatorType.sm]: "sm",
    [ModificatorType.md]: "md",
    [ModificatorType.lg]: "lg"
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
    hoverStyle?: b.IBobrilStyle;

    onSelect?: () => boolean;
}

interface IRowCtx extends b.IBobrilCtx {
    data: IRowData;
    pointerDown: () => void;
    focusFromKeyboard: boolean;
    hover: boolean;
    down: boolean;
}

export const Row = b.createComponent<IRowData>({
    init(ctx: IRowCtx) {
        ctx.focusFromKeyboard = false;
        ctx.down = false;
        ctx.pointerDown = () => {
            ctx.focusFromKeyboard = false;
            if (b.pointersDownCount() === 1) {
                ctx.down = true;
                b.registerMouseOwner(ctx);
                b.focus(ctx.me);
            }
            b.invalidate(ctx);
        };
    },
    render(ctx: IRowCtx, me: b.IBobrilNode) {
        let modificators = ['row'];

        for (let i = 0; i < modificatorKeys.length; ++i) {
            const key = modificatorKeys[i];
            const value = ctx.data[key];
            if (value)
                modificators.push(`${key}-${ModificatorTypeMap[value]}`);
        }

        if (ctx.data.reverse)
            modificators.push('reverse');

        me.tag = ctx.data.tagName || 'div';
        if (ctx.data.className)
            modificators = [ctx.data.className, ...modificators];
        me.className = modificators.join(' ');
        ctx.data.style && b.style(me, [ctx.data.style, ctx.hover && ctx.data.hoverStyle]);
        me.children = ctx.data.children;
    },
    onPointerUp(ctx: IRowCtx): boolean {
        ctx.down = false;
        b.releaseMouseOwner();
        if (b.pointersDownCount() === 0) {
            let a = ctx.data.onSelect;
            if (a) a();
        }
        b.invalidate(ctx);
        return true;
    },
    onKeyDown(ctx: IRowCtx, ev: b.IKeyDownUpEvent): boolean {
        if (ev.which === 32 && ctx.focusFromKeyboard) {
            ctx.down = true;
            b.invalidate(ctx);
            return true;
        }
        if (ev.which === 13 && ctx.focusFromKeyboard) {
            let a = ctx.data.onSelect;
            if (a) a();
            return true;
        }
        return false;
    },
    onKeyUp(ctx: IRowCtx, ev: b.IKeyDownUpEvent): boolean {
        if (ev.which === 32 && ctx.focusFromKeyboard) {
            ctx.down = false;
            b.invalidate(ctx);
            let a = ctx.data.onSelect;
            if (a) a();
            return true;
        }
        return false;
    },
    onMouseEnter(ctx: IRowCtx) {
        ctx.hover = true;
        b.invalidate(ctx);
    },
    onMouseLeave(ctx: IRowCtx) {
        ctx.hover = false;
        b.invalidate(ctx);
    }
});