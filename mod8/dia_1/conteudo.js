const wakingUp = () => 'Acordando!';
const breakFast = () => 'Bora tomar café';
const goingSleep = () => 'Partiu dormir';
const doingThings = (param) => console.log(param);

doingThings(wakingUp());
doingThings(breakFast());
doingThings(goingSleep());