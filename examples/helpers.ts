import * as b from 'bobril';

export function h3(code: string): b.IBobrilChildren {
    return { tag: "h3", children: { tag: "code", children: code } };
}

export function container(children: b.IBobrilChildren): b.IBobrilChildren {
    return b.styledDiv(children, containerStyle);
}

export const containerStyle = b.styleDef({
    backgroundColor: "#036",
    borderColor: "#007fff"
});

export const higherColStyle = b.styleDef({
    height: 126
});