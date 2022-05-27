## 🚀 Testes Automatizados com Cypress - Básico 🚀

Projeto de estudo sobre [Cypress](https://www.cypress.io/). O material disponível neste repositório foi desenvolvido durante o curso  [Testes Automatizados com Cypress - Básico](https://www.udemy.com/course/testes-automatizados-com-cypress-basico/), disponibilizado pela [Talking About Testing](https://talkingabouttesting.com).

O objetivo deste projeto é compreender o funcionamento do cypress, seus componentes e realizar integração contínua no seu desenvolvimento. Para tanto, foi utilizado o uma aplicação web - do próprio curso - como objeto de testes. Essa aplicação foi construída utilizando HTML, CSS e JS.


### 💡 Conceitos abordados
-----------------------

- Checkpoints na automação;
- Comandos customizados;
- Controle do relógio do navegador;
- CSS Selector;
- Documentação de projeto;
- Integração contínua (CI);
- Invode('show') e invoke('hide');
- Lodash;
- Massa de testes estática (.json) e dinâmica ([faker](https://www.npmjs.com/package/@faker-js/faker));
- Seleção de checkbox, radio e dropdown;
- Submeter forms e validar mensagens de erro/sucesso;
- Upload de arquivos (seleção e drag-and-drop);


### ⚠️ Instalação e uso do projeto
-----------------------

- Instale o [Node.js](https://nodejs.org/en/download/);
- Abra o diretório do projeto e execute o comando:
    - `npm install`
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`


### ⚙️ Arquitetura do projeto
-----------------------

```
TAT(basic) - cypress/
  ├─  .github/
  │        └── workflows/
  │            └── ci.yml
  |
  ├─  cypress/
  │        ├── fixtures/
  │        │   └── *.json       
  │        │
  │        ├── integration/
  │        │   ├── CAC-TAT-al2.spec.js
  │        │   ├── CAC-TAT-al3.spec.js
  │        │   ├── CAC-TAT-al4.spec.js
  │        │   ├── CAC-TAT-al5.spec.js
  │        │   ├── CAC-TAT-al6.spec.js
  │        │   └── CAC-TAT-al7.spec.js
  │        │
  │        └── support/
  │            ├── Commands.js
  │            └── index.js
  │ 
  ├── src/
  │        ├── index.html
  │        ├── privacy.html
  │        ├── script.js
  │        └── style.css
  │
  ├── node_modules/
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```

## 🔍 Camadas do projeto
---------------------------------------
 -**.github:** contém arquivo para criação de pipeline de integração contínua (*.yml); 
 - **fixtures:** arquivos para massa de dados estática para os testes (*.json);
 - **integration:** arquivos de testes separados em categorias a organização. (*.spec.js);
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
 - **src:** arquivos da aplicação utilizada nos testes;
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;


### 💡 Features
-----------------------
</details>

<details><summary><i>Integração Contínua - CI</i></summary>

No arquivo ci.yml (.github/workflows) é criada o pipeline para integração contínua do projeto. Ele é executado quando houver `git push` de um novo arquivo e realiza o job `cypress-run` (comando para inicializar o cypress). 

Pretendo implementar futuramente a opção de gerar o relatório do teste e deixá-lo disponível sempre que houver mudanças no código. Assim, haverá validação do pipeline visível e acessível a todos.

</details>