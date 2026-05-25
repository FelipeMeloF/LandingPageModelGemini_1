# Landing Page: Imobiliária Extremo Oriente 🌟

Este repositório contém a landing page institucional de alta conversão para a **Imobiliária Extremo Oriente**, desenvolvida com foco em induzir usuários a baixarem o aplicativo oficial de catálogo de imóveis de luxo (para venda e locação).

A página é inteiramente construída em HTML5 semântico, CSS3 premium com efeitos modernos e JavaScript nativo de alta performance.

---

## 🎨 Decisões de Design & Experiência Visual

Para transmitir prestígio, exclusividade e confiabilidade, a interface foi projetada utilizando uma estética **Preto & Dourado Premium** com as seguintes diretrizes:

### 1. Paleta de Cores (Design Tokens)
*   **Obsidian Black (`#0A0A0B` & `#121214`):** Cores de fundo dominantes. Proporcionam um visual ultra-moderno no estilo "Dark Mode Premium", reduzindo o cansaço visual e criando um forte contraste com os elementos em dourado.
*   **Liquid Gold (`#D4AF37`, `#F3E5AB` & `#AA7C11`):** Gradientes metálicos refinados aplicados a botões primários, ícones, bordas finas e destaques tipográficos. O dourado simboliza luxo, riqueza e o alto padrão dos imóveis atendidos.
*   **Muted Text (`#A0A0AB`):** Texto cinza-claro balanceado que garante excelente contraste e legibilidade, sem competir com a tipografia dourada ou branca de destaque.

### 2. Tipografia
*   **Títulos:** `Cinzel` e `Playfair Display` (via Google Fonts). Fontes serifadas clássicas e lapidadas que evocam tradição, prestígio e autoridade do mercado asiático e de alto padrão.
*   **Corpo de Texto:** `Plus Jakarta Sans` (via Google Fonts). Uma fonte geométrica sem serifa contemporânea, limpa e extremamente legível, ideal para interfaces web móveis e de desktop modernas.

### 3. Efeitos Visuais Avançados
*   **Glassmorphism:** Divisões e cartões estruturados usando fundos levemente transparentes (`rgba(18, 18, 20, 0.7)`) combinados com desfoque de fundo (`backdrop-filter: blur(12px)`) e bordas douradas finas com gradiente linear.
*   **Shimmer Effect (Brilho Metálico):** Animações em CSS puro que fazem um feixe de luz refletir suavemente sobre os botões de ação principais (CTAs) em intervalos periódicos, capturando a atenção do usuário para os links de download.
*   **Scroll Animations (Revelação Gradual):** Utilização da API nativa do navegador `Intersection Observer` para revelar seções conforme o usuário navega pela página, mantendo a taxa de quadros estável em 60fps.

---

## 🛠️ Decisões Técnicas & Arquitetura

Optamos por desenvolver esta landing page utilizando **tecnologias puras da Web (Vanilla Stack)** em vez de frameworks robustos (como Next.js ou React) pelos seguintes motivos:

1.  **Performance Absoluta & SEO:** Uma landing page de conversão exige carregamento instantâneo. Sem dependências externas de Javascript para renderização (Zero Hydration), a página obtém pontuações perfeitas (próximas de 100/100) no Google Lighthouse, o que impulsiona organicamente o ranqueamento de busca (SEO).
2.  **Manutenibilidade Sem Sobrecarga:** Toda a estrutura de estilo, layout responsivo e animações está centralizada em um CSS modular estruturado com variáveis CSS nativas (`custom properties`), facilitando mudanças de cores, fontes ou tamanhos.
3.  **Carregamento Inteligente de Imagens:** Implementação de lazy loading (`loading="lazy"`) em todas as imagens de imóveis secundárias e formatos eficientes para otimizar o consumo de dados de usuários móveis.

---

## 📁 Estrutura de Arquivos do Projeto

```bash
LandingPage1/
├── assets/                  # Imagens e assets de design da página
│   ├── app_mockup.png       # Mockup do app de imobiliária no celular
│   ├── luxury_house_1.png   # Imagem da Mansão Zen-Luxo
│   ├── luxury_house_2.png   # Imagem da Cobertura Urbana Vista Noturna
│   └── luxury_house_3.png   # Imagem do Apartamento Estilo Japandi
├── index.html               # Estrutura HTML5 semântica e SEO
├── styles.css               # Estilos, variáveis de design e animações
├── app.js                   # Lógica de interatividade e animações de scroll
└── README.md                # Documentação técnica do projeto (esta página)
```

---

## 🚀 Como Executar o Projeto Localmente

### Opção 1: Servidor de Desenvolvimento Fast (Recomendado)
O projeto agora possui suporte para um servidor de desenvolvimento ultra-rápido e com hot-reload automático utilizando o **Vite**.

1. Instale as dependências necessárias:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   Acesse a página no endereço indicado no terminal (por padrão, `http://localhost:5173`).

### Opção 2: Abrir Diretamente no Navegador
Basta abrir o arquivo [index.html](file:///d:/Projetos/LIM/LandingPage1/index.html) diretamente no seu navegador web preferido (Chrome, Edge, Safari, Firefox).

### Opção 3: Outros Servidores Locais
Para rodar outros servidores HTTP estáticos locais simples:

Se você tiver o Python instalado:
```bash
python -m http.server 8000
```
Em seguida, acesse `http://localhost:8000` no seu navegador.

Ou através do VS Code usando a extensão **Live Server**.


---

## 💎 Créditos e Autoria

Projeto desenvolvido pela **Imobiliária Extremo Oriente** para campanhas de marketing digital focadas em captação de clientes premium.
Todos os direitos reservados.
