# 🧪 Automação de Testes com Cypress

Projeto de automação de testes E2E (End-to-End) desenvolvido como **trabalho acadêmico**, utilizando o framework **Cypress** para validar fluxos de um e-commerce.

---

## 📋 Sobre o Projeto

Este projeto automatiza os principais fluxos de usuário do site [Sauce Demo Shopify](https://sauce-demo.myshopify.com), incluindo:

- ✅ **Login** de usuário
- ✅ **Navegação** pelo catálogo de produtos  
- ✅ **Adicionar ao carrinho** e fluxo de checkout

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão |
|------------|--------|
| [Cypress](https://www.cypress.io/) | 14.5.4 |
| Node.js | 18+ |

---

## 📁 Estrutura do Projeto

```
cypress/
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js      # Teste de login
│   │   ├── catalog.cy.js    # Teste de navegação no catálogo
│   │   └── cart.cy.js       # Teste de carrinho e checkout
│   └── support/
│       ├── commands.js      # Comandos customizados (ex: cy.login())
│       └── e2e.js           # Configurações globais
├── cypress.config.js        # Configuração do Cypress
└── package.json
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/nicolaszprado/testes-auto-cypress.git

# Acesse a pasta
cd testes-auto-cypress

# Instale as dependências
npm install
```

### Executar os Testes

```bash
# Modo interativo (abre interface gráfica)
npx cypress open

# Modo headless (terminal)
npx cypress run
```

---

## 📝 Casos de Teste

### 1. Login (`login.cy.js`)
Valida o fluxo de autenticação do usuário no sistema.

### 2. Catálogo (`catalog.cy.js`)
Valida a navegação até o catálogo de produtos após login.

### 3. Carrinho e Checkout (`cart.cy.js`)
Valida o fluxo completo de adicionar um produto ao carrinho e prosseguir para o checkout.

---

## 👨‍🎓 Autor

**Nicolas Prado** **&&** **Luis Eduardo**

Trabalho desenvolvido para fins acadêmicos.

---

## 📄 Licença

Este projeto está sob a licença ISC.
