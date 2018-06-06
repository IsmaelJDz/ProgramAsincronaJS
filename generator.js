((c) => {

    const cuadrado = value => {
        setTimeout(() => {
            c( { value: value, result: value * value } )
        }, 0 | value * 100)

        return {
            value: value,
            result: value * value
        }
    }

    function* generator() {
        c('Inicio generator')
        yield cuadrado(0)
        yield cuadrado(1)
        c('fin generator')
    }

    let gen = generator()
    c( gen.next() )
    c( gen.next() )

})(console.log);
