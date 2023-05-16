/*Esta función toma un array de numeros
y por cada elemento genera el valor de la suma del rango de vision.
Retorna un nuevo array con los valores de cada elemento y su rango de vision. 
 */
const setValorVision = (array) => {
    const longitud = array.length;
    let valores = []
    for (let i = 0; i < longitud; i++) {
        const rango = array[i];
        let valorVision = 0;

        for (let j = i - rango; j <= i + rango; j++) {
            if (j >= 0 && j < longitud && j !== i) {
                valorVision += array[j];
            }
        }
        valores.push({value: array[i], valorVision})
    }
    return valores;
}

/*Esta función toma un número entero positivo y retorna true si el valor de su rango de vision es 1,
de lo contrario retorna false.
*/
const range_vision = (num) => {
    if (isNaN(num)) return 'Ingrese un número válido';
    if (num < 0 || num % 1 !== 0) return 'Ingrese un número entero positivo';

    const digitos = num.toString().split('').map(Number);
    
    const valores = setValorVision(digitos);

    valores.sort((a, b) => {
        if (a.valorVision === b.valorVision) {
          return a.value - b.value;
        } else {
          return a.valorVision - b.valorVision;
        }
      });
      
    return valores[0].value === 1
}

