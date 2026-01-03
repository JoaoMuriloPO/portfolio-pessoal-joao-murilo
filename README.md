# Portfólio Pessoal - João Murilo

Portfólio pessoal desenvolvido com ReactJS, TypeScript e Vite, apresentando projetos, habilidades e informações profissionais de forma moderna e profissional.

## 🚀 Tecnologias

- **ReactJS** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool moderna e rápida
- **React Icons** - Biblioteca de ícones para React
- **CSS Puro** - Estilização sem frameworks adicionais

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- Node.js (versão 16 ou superior)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/JoaoMuriloPO/portfolio.git
cd portfolio
```

2. Instale as dependências:
```bash
npm install
```

ou

```bash
yarn install
```

## 🎯 Como Executar

### Modo de Desenvolvimento

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

ou

```bash
yarn dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

Para criar uma build de produção:

```bash
npm run build
```

ou

```bash
yarn build
```

Os arquivos otimizados estarão na pasta `dist/`

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

ou

```bash
yarn preview
```

## 📁 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Navigation.tsx   # Navegação principal
│   │   ├── ProjectCard.tsx  # Card de projeto
│   │   └── ...
│   ├── sections/            # Seções da página
│   │   ├── Home.tsx         # Seção inicial (Hero)
│   │   ├── About.tsx        # Sobre mim
│   │   ├── Projects.tsx     # Projetos
│   │   ├── Skills.tsx        # Habilidades
│   │   ├── Contact.tsx      # Contato
│   │   ├── Footer.tsx       # Rodapé
│   │   └── ...
│   ├── App.tsx              # Componente principal
│   ├── main.tsx             # Ponto de entrada
│   └── index.css            # Estilos globais
├── public/                  # Arquivos estáticos
├── index.html               # HTML principal
├── package.json             # Dependências do projeto
├── vite.config.ts           # Configuração do Vite
├── tsconfig.json            # Configuração do TypeScript
└── README.md                # Este arquivo
```

## 🎨 Características

- ✅ Design minimalista e profissional
- ✅ Tema escuro
- ✅ Totalmente responsivo (mobile e desktop)
- ✅ Navegação suave por scroll
- ✅ Componentes reutilizáveis
- ✅ Código limpo e bem organizado
- ✅ TypeScript para maior segurança de tipos
- ✅ Pronto para deploy na Vercel

## 📱 Seções

1. **Home (Hero)** - Apresentação inicial
2. **Sobre Mim** - Informações pessoais e experiência profissional
3. **Projetos** - Portfólio de projetos desenvolvidos
4. **Skills** - Habilidades técnicas e ferramentas
5. **Contato** - Informações de contato e redes sociais
6. **Footer** - Rodapé com informações adicionais

## 🚀 Deploy na Vercel

### Opção 1: Deploy via CLI

1. Instale a Vercel CLI:
```bash
npm i -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Opção 2: Deploy via GitHub

1. Faça push do código para o GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Conecte seu repositório GitHub
4. Configure o projeto:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em Deploy

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção

## 👤 Autor

**João Murilo Pereira de Oliveira**

- Email: j.murilo.mobile@gmail.com
- LinkedIn: [joaomurilopoo](https://www.linkedin.com/in/joaomurilopoo/)
- GitHub: [JoaoMuriloPO](https://github.com/JoaoMuriloPO)

## 📄 Licença

Este projeto está sob a licença MIT.

