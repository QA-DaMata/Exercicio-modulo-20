const { mdc } = require('./mdc')

describe('Testes unitarios para a função do mdc', () => {
    it('Ao rodar a função mdc com os numeros 12 e 40 a resposta deve ser 4', () => {
        expect(mdc(12, 40)).toBe(4)
    })

    it('Ao rodar a função mdc com os numeros 12 e 40 a resposta não deve ser 4', () => {
        expect(mdc(12, 40)).not.toBe(6)
    })
});