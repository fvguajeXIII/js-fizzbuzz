//1. Inizio del programma con la stampa dei numeri da 1 a 100

for(i=1;i<=100;i++){
  //2. Verifica se uno dei numeri in stampa è divisibile sia per 3 che per 5 nel caso stampa FizzBuzz
  if(i%3===0 && i%5===0){
    console.log(`FizzBuzz`)
  }
  //3. Verifica se il valore di i sia divisibile per 3 nel caso stampa il valore Fizz
  else if(i%3===0){
    console.log(`Fizz`)
  }
  //4. Verifica se il valore di i sia divisibile per 5 nel caso stampa il valore Buzz
  else if(i%5===0){
    console.log(`Buzz`)
  }
  //5. Se il valore non è divisibile per 3 e per 5 restituisce il valore di i
  else{
    console.log(i)
  }
}