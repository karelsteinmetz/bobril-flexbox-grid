import * as b from 'bobril';
import * as fbg from './index';
import * as er from "./examples/responsive";
import * as ef from "./examples/fluid";
import * as eo from "./examples/offsets";
import * as eaw from "./examples/autoWidth";
import * as eal from "./examples/alignment";
import * as ed from "./examples/distribution";
import * as erv from "./examples/reverse";

b.init(() => {
    return [
        fbg.Grid({
            fluid: true,
            children: [
                er.create(),
                ef.create(),
                eo.create(),
                eaw.create(),
                eal.create(),
                ed.create(),
                erv.create()
            ]
        })
    ];
});
