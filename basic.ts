let nome: string = "carlos jaime"
console.log(nome)

//nome = 1 error

let idade: number = 29
console.log(idade)

//idade = "carlos jaime"

const active: boolean = true;
console.log(active)

const objJs: object = {
    nome: "carlos",
    idade: "jaime"
} 

console.log(objJs)

const lista: Array<any> = ["1","2"]

const lista2: string[] = ["1","2"]

console.log(lista)
console.log(lista2)

const lista3: object[] = [
    {},
    {}
]

console.log(lista3)

//INTERFACE

interface Pessoa {
    nome: string,
    idade: number
}

const pessoa: Pessoa = {
    nome: "carlos",
    idade: 29
}


const pessoas: Pessoa[] = [
    {
        nome: "carlos",
        idade: 29
    },
    {
        nome: "carlos",
        idade: 29
    }
]


interface Usuario extends Pessoa{
    email: string
}

const usuario: Usuario = {
    nome: "carlos",
    idade: 29,
    email: "carlos@jaime"
}

//TYPES
type Carro1 = {
    nome: string,
}

type Carro2 = {
    ano?: number,
}

type Carro = Carro1 & Carro2

const carro: Carro = {
    nome: "celta",
    ano: 2022
}

type Caminhao = Carro1 | Carro2

const caminhao: Caminhao = {
    nome: "celta"
}

//types e interface
interface client {
    nome: string
}

type endereco = {
    uf: string
}

type CasaEndereco = client | endereco
//type CasaEndereco = client & endereco

const casaEndereco: CasaEndereco = {
    nome: "casa",
    uf : "mg"
}


//patial

const user1: Partial<Usuario> = {
    nome: "carlos"
}

//#function with generic Types

const message = <T>(message: T): T => {
    console.log(message)
    return message
}

message<string>("oi")

//
interface Partial2<T> {
    value: T
}


const data: Partial2<string> = {
    value: "oi"
}


//exemplo de uso da função ?

const meuNome:any = null;

console.log(meuNome?.name?.test)