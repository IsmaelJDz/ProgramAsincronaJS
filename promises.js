((c) => {

    c('******Programacion Asincrona*****')
    c('******PROMISES*******')

    const cuadrado = value => {

        return new Promise(function(resolve, reject) {
            setTimeout(() => {
                resolve({ value: value, result: value * value })
            }, 0 | Math.random() * 100)
        });
    }

    cuadrado(0)
    .then( obj => {
        c('Inicio Promise')
        c(`Promise: ${obj.value}, ${obj.result}`)
        return cuadrado(1)
    })
    .then( obj => {
        c(`Promise: ${obj.value}, ${obj.result}`)
        return cuadrado(2)
    })
    .then( obj => {
        c(`Promise: ${obj.value}, ${obj.result}`)
        return cuadrado(3)
    })
    .then( obj => {
        c(`Promise: ${obj.value}, ${obj.result}`)
        c('Fin Promise')
    })
    .catch( err => c(err) )
    c('******promises Hell yeiiii!!!******')

})(console.log);
