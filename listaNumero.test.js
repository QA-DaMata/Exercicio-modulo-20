const { lista } = require('./listaNumero')

describe('Testes unitarios do exercicios da lista numerica', () => {
    it('Deve validar a soma', () => {

        expect(lista()).toBe(157361)
    })
    it('Deve validar a soma incorreta', () => {

        expect(lista()).not.toBe(257361)
    })
});