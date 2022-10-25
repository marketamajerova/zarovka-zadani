import { Bulb } from './Bulb/index.js';

const app = document.getElementById('app');

app.append(Bulb({
        isOn: false,
    }),
    Bulb({
        isOn: true,
    }),
    Bulb({
        isOn: true,
    })
);
