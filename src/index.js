import './main.scss';

const elvenShieldRecipe = {
    leatherStrips: 10,
    ironIngot: 1,
    refinedMoonstone: 4
}
const sheep = {
    ...elvenShieldRecipe,
    selfPity:Infinity
}

console.log(sheep);