const TYPES_CARDINALITY = {
    ZERO: 'zero',
    FIVE: 'five',
    EVEN: 'even',
    ODD: 'odd'
}

const number_cardinality = (num) => {
    if(isNaN(num))return 'Ingrese un número válido';

    const last_str = num.toString()[num.toString().length - 1];

    if(last_str === String(0)) return TYPES_CARDINALITY.ZERO;

    if(last_str === String(5)) return TYPES_CARDINALITY.FIVE;

    if(num % 2 === 0 && last_str !== String(0)) return TYPES_CARDINALITY.EVEN;

    if(num % 2 !== 0 && last_str !== String(5)) return TYPES_CARDINALITY.ODD;
}
