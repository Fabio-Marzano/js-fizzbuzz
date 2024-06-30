//CREO CICLO FOR DA 1 A 100//
for (let i = 1; i <= 100; i++) {
    console.log(i)
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 3//
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizz');
    }
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 5//
    else if (i % 5 == 0) {
        console.log('Buzz');
    }
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 3 E 5//
    else if (i % 3 == 0) {
        console.log('FizzBuzz');
    }
    else {
        console.log(i);
    }
}