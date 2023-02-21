function calculateQuadraticEquation(){
    // let a = +window.a.value;
    // let b = +window.b.value;
    // let c = +window.c.value;
    // let result = `AAAAA`;
    // window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    // let span = window.result;
    // span.textContent = "х = "+JSON.stringify(result);

    let max = 0;
    let arr = [0,1,2,3,4,5,6,7,8,9];
    let arrString = [];
    
    for (let i = 0; i < 10; i++){
    
        let a = Math.floor(Math.random() * 10);
    
        if (a > max) {
            max = a;
        }
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === a) {
                arr.splice(i,1);
            }
        }

        arrString.push(a);
        // console.log (`Число: ${a}`);
        window.equation.textContent = `Число: ${arrString}`;
    }
    // console.log (`Максимальное число: ${max}`);
    // console.log (`Числа которые не вывел рандом: ${arr}`);

    window.result.textContent = `Максимальное число: ${max}`;
    window.result2.textContent = `Числа которые не вывел рандом: ${arr}`;
}

function reload() {
    location.reload();
}

function calculate() {
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let d = +window.d.value;

    // for (let i = 0; i < 4; index++) {
        
    // }

    window.result3.textContent = `Сумма чисел: ${a + b + c + d}`;
}

