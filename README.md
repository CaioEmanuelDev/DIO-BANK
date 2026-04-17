# DIO Bank

Sistema bancário desenvolvido em TypeScript para fins educacionais, focando nos conceitos fundamentais de Programação Orientada a Objetos (POO) como classes, herança, polimorfismo, encapsulamento e modificadores de acesso.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- ts-node-dev (ambiente de desenvolvimento)

## Funcionalidades Implementadas

O projeto consiste em um sistema de contas bancarias com diferentes perfis:

### DioAccount (Classe Base)
- Metodo de deposito: Permite adicionar saldo a conta caso o status seja valido.
- Metodo de saque: Realiza a retirada de valores se a conta estiver ativa e o saldo for maior que o valor solicitado.
- Encapsulamento: Todos os atributos (name, accountNumber, balance, status) sao privados.
- Imutabilidade: Os atributos name e accountNumber sao definidos no construtor e nao podem ser alterados externa ou internamente.

### CompanyAccount (Conta Juridica)
- Metodo de emprestimo: Permite a empresa obter um emprestimo, que e adicionado ao saldo atual da conta.

### PeopleAccount (Conta Pessoa Fisica)
- Conta padrao para usuarios individuais que herda as funcionalidades basicas de DioAccount.

### BonusAccount (Novo tipo de conta)
- Metodo de deposito personalizado: Cada deposito realizado nesta conta recebe um bonus de 10 unidades monetarias adicionais ao valor depositado.

## Como Executar o Projeto

1. Clone o repositorio:
   git clone https://github.com/CaioEmanuelDev/DIO-BANK.git

2. Acesse o diretorio do desafio:
   cd desafio01-ts

3. Instale as dependencias:
   npm install

4. Execute o projeto em modo de desenvolvimento:
   npm run dev

## Estrutura do Codigo

O codigo esta organizado da seguinte forma:
- app.ts: Ponto de entrada da aplicacao onde as instacias sao criadas e os metodos sao testados.
- class/: Diretorio contendo todas as classes do sistema bancario.
  - DioAccount.ts: Classe abstrata base.
  - PeopleAccount.ts: Implementacao de conta para pessoa fisica.
  - CompanyAccount.ts: Implementacao de conta para empresas.
  - DepositAccount.ts: Implementacao de conta com bonus de deposito.
