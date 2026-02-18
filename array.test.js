const { array } = require('./array')

describe('Testes unitarios do exercicios do array', () => {
    it('Deve validar todas as respostas validas', () => {
        let arr = [6, 3, 12, 1, 22, 100]

        expect(array(arr).menor).toBe(1)
        expect(array(arr).maior).toBe(100)
        expect(array(arr).indiceMaior).toBe(5)
        expect(array(arr).indiceMenor).toBe(3)
    })

    it('Deve validar todas as respostas validas', () => {
        let arr = [23, 87, 4, 56, 91]

        expect(array(arr).menor).toBe(4)
        expect(array(arr).maior).toBe(91)
        expect(array(arr).indiceMaior).toBe(4)
        expect(array(arr).indiceMenor).toBe(2)
    })

    it('Deve validar um valor invalido', () => {
        let arr = [23, 87, 4, 56, 91]

        expect(array(arr).menor).toBe(4)
        expect(array(arr).maior).not.toBe(6)
        expect(array(arr).indiceMaior).toBe(4)
        expect(array(arr).indiceMenor).toBe(2)
    });
})