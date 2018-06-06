((c) =>{
     c('******* Async Await *****')

     const cuadrado = value => {

         return new Promise(function(resolve, reject) {
             setTimeout(() => {
                 resolve({ value: value, result: value * value })
             }, 0 | Math.random() * 100)
         });
     }

     async function asyncAwait(){
         c('Inicio de AsincFunction')

         let obj = await cuadrado(0)
         c(`Async function: ${obj.value}, ${obj.result}`)
         obj = await cuadrado(1)
         c(`Async function: ${obj.value}, ${obj.result}`)
         obj = await cuadrado(2)
         c(`Async function: ${obj.value}, ${obj.result}`)
         c('Fin AsincFunction')
     }

     asyncAwait()

})(console.log)
