const ServiceOperacao = require("../service/ServiceOperacao.js")

test("Qual o valor da operação de subtrair", ()=>{
    expect(ServiceOperacao.subtrair(23,5)).toBe(18)
})

test("Qual o valor da  operação de multiplicar", ()=>{
    expect(ServiceOperacao.multiplicar(6,1)).toBe(6)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(ServiceOperacao.dividir(200,4)).toBe(50)
})

test("Qual o valor da operação de soma", ()=>{
    expect(ServiceOperacao.somar(1,100)).toBe(101)
})

test("Qual o valor da operação desubtrair", ()=>{
    expect(ServiceOperacao.subtrair(50,50)).toBe(0)
})

test("Qual o valor da operação de multiplicar", ()=>{
    expect(ServiceOperacao.multiplicar(7,3)).toBe(21)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(ServiceOperacao.dividir(20,2)).toBe(10)
})

test("Qual o valor da operação de dividir", ()=>{
    expect(ServiceOperacao.dividir(20,4)).toBe(5)
})

test("Qual o valor da operação de soma", ()=>{
    expect(ServiceOperacao.somar(20,7)).toBe(27)
})

test("Qual o valor da operação de subtrair teste com erro", ()=>{
    expect(ServiceOperacao.subtrair(20,7)).toBe(27)
})

test("Qual o valor da  operação de soma, teste com erro", ()=>{
    expect(ServiceOperacao.somar(20,3)).toBe(27)

})

test("Qual o valor da operação de subtrair, teste com erro", ()=>{
    expect(ServiceOperacao.subtrair(20,7)).toBe("carro")
})

test("Qual o valor da operação de dividir, teste com erro", ()=>{
    expect(ServiceOperacao.dividir("lancha")).toBe(5)
})

