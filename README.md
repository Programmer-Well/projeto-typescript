# 🚀 Configuração TypeScript + Node.js (Guia Rápido)

Este guia explica como configurar um projeto **Node.js com TypeScript**, utilizando **ESM/ESNext**, **ts-node** e **nodemon** para desenvolvimento ágil e moderno.

---

## 📦 Inicialização do Projeto

```bash
npm init -y
```

Cria um arquivo `package.json` com as configurações básicas do projeto.

---

## ⚙️ Instalação das Dependências

### Dependências de Desenvolvimento

```bash
npm install -D typescript
npm install ts-node
npm install nodemon
```

- **typescript** → Compilador oficial do TypeScript.  
- **ts-node** → Permite executar arquivos `.ts` diretamente, sem precisar compilar antes.  
- **nodemon** → Reinicia automaticamente o servidor a cada alteração no código.

---

## 🧠 Inicializando o TypeScript

Crie o arquivo de configuração padrão do TypeScript:

```bash
npx tsc --init
```

---

## 🧩 Configuração do `tsconfig.json`

Exemplo de configuração otimizada para projetos Node.js modernos:

```json
{
  "compilerOptions": {
    "target": "esnext",           // Transpila para ES mais moderno como sera a conversão do JS
    "module": "nodenext",         // Suporte a ESM/CommonJS no Node como sera o processo de importação e exportação
    "rootDir": ".",           // Onde está o código fonte
    "outDir": "./dist",           // Onde vai gerar os .js compilados

    "strict": true,               // Tipagem rigorosa
    "esModuleInterop": true,      // Compatibilidade com require/import faz lib antigas sem suporte ter suporte ao import
    "skipLibCheck": true,         // Ignora checagem de libs externas npx tsc ignora ler arquivos de @types quando npx tsc é executado, não vai verificar os tipos de libs que baixamos
    "forceConsistentCasingInFileNames": true // Ligado Evita problemas de maiúscula/minúscula import "./UserService" import "./userservice"
  },
  //copilador olha pra essas pasta
  "include": ["src", "server.ts", "basic.ts"],  // Inclui apenas o código fonte
  "exclude": ["node_modules", "dist"] // Ignora pastas desnecessárias
}
```

---

## 🧱 Explicação dos principais campos

| Propriedade | Descrição |
|--------------|------------|
| `target` | Define para qual versão do ECMAScript o código será convertido (ex: `esnext`, `es2020`, `es2025`). |
| `module` | Define o sistema de módulos usado: `commonjs`, `esnext`, ou `nodenext`. |
| `rootDir` | Diretório onde o código fonte está localizado. |
| `outDir` | Diretório onde os arquivos compilados `.js` serão gerados. |
| `strict` | Habilita a verificação rigorosa de tipos. |
| `esModuleInterop` | Permite usar `import` em libs antigas que usam `require()`. |
| `skipLibCheck` | Ignora verificação de tipos de pacotes externos. |
| `forceConsistentCasingInFileNames` | Evita erros com diferença de maiúsculas/minúsculas nos imports. |

---

## 🧭 Tipos de Módulos

| Módulo | Descrição | Importação / Exportação |
|---------|------------|-------------------------|
| `commonjs` | Padrão antigo do Node.js | `require` / `module.exports` |
| `esnext` | Usa `import`/`export` moderno | `import express from 'express'` |
| `nodenext` | Suporte híbrido (CommonJS + ESM) conforme o Node.js atual | Automático |

---

## 🌐 Padrões ECMAScript (ES)

O **ECMAScript** é o padrão que define o JavaScript.  
Mais detalhes em: [ECMA-262 Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

Exemplo:

```json
"target": "es2025",
"module": "nodenext"
```

Isso garante compatibilidade com os recursos mais recentes do JS no Node.js.

---

## ⚡ Scripts Recomendados no `package.json`

```json
"scripts": {
  "dev": "nodemon server.ts",
  "basic": "nodemon basic.ts"
}
```

- `npm run dev` → Executa em modo desenvolvimento.  
- `npm run build` → Executa um arquivo de teste (apenas com alguns codigo base do node)

---

## 📁 Estrutura de Pastas Sugerida

```
project/
│
├── src/
│   └── ...
│
├── dist/
├── server.ts  
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📚 Referências

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
- [tsconfig.json Documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)  
- [ECMAScript Official Standard](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

---

### ✨ Autor

**Carlos Jaime**  
Desenvolvedor Full Stack & Professor de Desenvolvimento Web  
📎 [GitHub](https://github.com/carlosjaimeandrade)
