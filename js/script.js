//CREO CICLO FOR DA 1 A 100//
for (let i = 1; i <= 100; i++) {
    

    //BONUS 1//
   //RECUPERO ELEMENTO DEL DOM CONTENENTE I VALORI//
   const grid = document.getElementById('grid');

   //CREO UN ELEMENTO DA INSERIRE NEL DOM// 
   const square = document.createElement('div');
   square.classList.add('square');
   console.log(square);
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 3  E 5//
    if (i % 3 == 0 && i % 5 == 0) {
        square.innerText = 'FizzBuzz';
        square.classList.add('fizzbuzz');
        console.log('FizzBuzz');
    }
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 5//
    else if (i % 5 == 0) {
        square.innerText = 'Buzz';
        square.classList.add('buzz');
        console.log('Buzz');
    }
    //CONTROLLO SE IL NUMERO E' MULTIPLO DI 3//
    else if (i % 3 == 0) {
        square.innerText = 'Fizz';
        square.classList.add('fizz');
        console.log('Fizz');
    }
    //SE NON E' STATA VERIFICATA NESSUNA CONDIZIONE STAMPO IL NUMERO EMERSO//
    else {
        square.innerText = i;
        
        console.log(i);
    }
    //INSERISCO ELEMENTO SQUARE CREATO NELLA GRIGLIA TRAMITE FUNCTION APPEND//
    grid.append(square);
}

