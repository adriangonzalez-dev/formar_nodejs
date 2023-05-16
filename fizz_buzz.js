const fizz_buzz = (n) => {
        const result = [];
        if(n < 1) return 'Ingrese un número mayor a 0';
        if(isNaN(n)) return 'Ingrese un número válido';

        for (let i = 1; i <= n; i++){
            if(i % 3 === 0 && i % 5 === 0) {
                result.push('FizzBuzz');
                continue;
            }
            if(i % 3 === 0) {
                result.push('Fizz');
                continue;
            }
            if(i % 5 === 0){
                result.push('Buzz');
                continue;
            }
            result.push(i);
        }
        return result;
    }