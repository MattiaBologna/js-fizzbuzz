// Consegna:
// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
// per i multipli di 3 stampi “Fizz” al posto del numero e
// per i multipli di 5 stampi “Buzz” al post del numero.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.

// recuperare il container del DOM 
const numbersListElement = document.querySelector('.numbers')  // Element | null

// Scivere un programm che stampi in console i numeri da 1 a 100
// ciclo for che si ripete 100 volte
for (let i = 0; i < 100; i++) {
    // definizione variabile num da stampare
    let number = i + 1; 
    // per i multipli sia di 3 che di 5 stampare "FizzBuzz"
    if (number % 3 === 0 && number % 5 === 0) {
        console.log('FizzBuzz')
    } else if (number % 5 === 0) {
        // per i multipli di 5 stampare "Buzz" 
        console.log('Buzz')
    } else if (number % 3 === 0) {
            // per i multipli di 3 stampare "Fizz"
            console.log('Fizz')
    } else {
        // se il numero non e ne multiplo di 3 ne di 5 => stamparlo 
        console.log(number)
    }
    
    // creare un elemento nel DOM (in panchina)
    const listItemElement = document.createElement('li'); // Element | null
    
    // inserire nell'elemento creato i numeri 
    listItemElement.innerHTML = number

    if (number % 3 === 0 && number % 5 === 0) {
        listItemElement.innerHTML = 'FizzBuzz'
        listItemElement.classList.add('red')
    } else if (number % 5 === 0) {
        // per i multipli di 5 stampare "Buzz" 
        listItemElement.innerHTML = 'Buzz'
        listItemElement.classList.add('yellow')
    } else if (number % 3 === 0) {
            // per i multipli di 3 stampare "Fizz"
        listItemElement.innerHTML = 'Fizz'
        listItemElement.classList.add('blue')
    } else {
        // se il numero non e ne multiplo di 3 ne di 5 => stamparlo 
        listItemElement.innerHTML = number
    }

    
    
    // inserire nel container l'elemento creato 
    numbersListElement.append(listItemElement)
}
    