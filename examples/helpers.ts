import * as b from 'bobril';

export function h3(code: string): b.IBobrilChildren {
    return { tag: "h3", children: { tag: "code", children: code } };
}

export const nestedRowStyle = b.styleDef({
    backgroundColor: "#036",
    borderColor: "#007fff"
});

export const higherColStyle = b.styleDef({
    height: 126
});