# 🐈‍⬛ FURIApp Connect

**FURIApp Connect** é um aplicativo web criado para o desafio técnico da FURIA Tech. Seu objetivo é conectar fãs da equipe FURIA através de perfis personalizados e interação inteligente com uma IA que entende o universo FURIA.

## 🚀 Demonstração

[🔗 Link para o vídeo demonstrativo](#)  
[🔗 Link para o deploy](https://furiapp-connect.vercel.app/)

## 🎯 Funcionalidades

- **Landing Page**: Apresentação do projeto com identidade visual da FURIA.
- **Formulário do Fã**: Coleta de informações como jogador favorito, mapa preferido e estilo de torcedor.
- **Geração de Perfil**: Perfil exclusivo gerado com base nas respostas do fã.
- **Match entre Fãs**: Sugestões de fãs com perfis semelhantes.
- **IA FURIApp**: Chat inteligente alimentado por um modelo local da plataforma [Ollama](https://ollama.com/), que conversa com o fã usando contexto do seu perfil.
- **Página "Sobre"**: Informações sobre a proposta do projeto, stack utilizada e equipe (você!).

## 🤖 Integração com IA

A aplicação inclui um chatbot local baseado em modelos LLM servidos via **Ollama**, permitindo:

- Conversas contextuais personalizadas para cada fã.
- Recomendações de conteúdos e curiosidades sobre a FURIA.
- Geração de respostas sem depender de APIs externas, garantindo privacidade e performance.

> Para rodar a IA localmente, é necessário ter o Ollama instalado na máquina.

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Ollama](https://ollama.com/) – para LLM local

## 📁 Estrutura de Pastas

```
├── app/
├── components/
├── lib/
├── styles/
├── public/
├── .vscode/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🔧 Como Rodar Localmente

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/nathartigas/FURIApp_Connect.git
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

3. **Inicie o backend da IA (Ollama)**:

   - Instale o Ollama: [https://ollama.com/download](https://ollama.com/download)
   - Rode o modelo local desejado:

     ```bash
     ollama run mistral
     ```

   *(ou outro modelo compatível com o projeto)*

4. **Inicie o app**:

   ```bash
   npm run dev
   ```

5. **Acesse no navegador**:

   [http://localhost:3000](http://localhost:3000)

- **Nathalia Artigas**  
  [LinkedIn]([https://www.linkedin.com/in/nathalia-artigas/](https://www.linkedin.com/in/nathalia-calazans-artigas-741b0b277/)) | [GitHub](https://github.com/nathartigas)
