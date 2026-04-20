# ÁPEX SPORT 🏃‍♂️

> E-commerce esportivo moderno, responsivo e performático — inspirado no design de grandes marcas esportivas.

---

## 📋 Descrição do Projeto

**ÁPEX SPORT** é uma interface front-end completa para um e-commerce esportivo de alto padrão. O projeto foi desenvolvido com foco em três pilares:

- **Design de alto nível** — tipografia impactante (Bebas Neue + DM Sans), paleta monocromática com acento vermelho, animações fluidas
- **Experiência do usuário** — navegação intuitiva, filtros de produtos, countdown de promoções, carinho interativo
- **Performance e responsividade** — CSS moderno com Grid + Flexbox, animações em GPU, zero dependências externas

### Funcionalidades incluídas

| Feature | Descrição |
|---|---|
| 🎨 Hero Section | Banner fullscreen com tênis animado em SVG, blobs dinâmicos, grid atmosférico |
| 🧭 Navegação | Menu fixo com efeito scroll, menu mobile hamburger, active link por seção |
| 📦 Produtos | Grid com 6 cards, filtro por categoria (Todos / Tênis / Roupas / Acessórios) |
| 🗂️ Categorias | Grid assimétrico com 4 categorias (Masc / Fem / Infantil / Acessórios) |
| ⏱️ Countdown | Timer regressivo em tempo real para promoções |
| 📊 Stats | Contadores animados ao entrar na viewport |
| ❤️ Favoritos | Toggle favorito por produto com feedback visual |
| 🛒 Carrinho | Adicionar ao carrinho com contador dinâmico no ícone |
| 📧 Newsletter | Formulário com validação e feedback |
| ☝️ Back to Top | Botão flutuante com aparecimento suave |
| 🌅 Scroll Reveal | Animação de entrada suave nos elementos ao rolar |
| ✨ Cursor Glow | Efeito de luz suave seguindo o cursor (desktop) |

---

## 🛠️ Tecnologias Utilizadas

```
HTML5 Semântico      — estrutura acessível com tags corretas
CSS3 Moderno         — Flexbox, Grid, Custom Properties, animations
JavaScript ES6+      — IntersectionObserver, requestAnimationFrame, módulos
Google Fonts         — Bebas Neue (display) + DM Sans (corpo)
SVG Inline           — Ícones e ilustração do tênis sem dependências
```

**Sem frameworks. Sem bibliotecas externas. Zero dependências.**

---

## 🚀 Como Rodar o Projeto

### Opção 1 — Abrir diretamente
```bash
# Simplesmente abra o arquivo no navegador:
double-click index.html
```

### Opção 2 — Com Live Server (recomendado para dev)
```bash
# Se tiver VS Code com extensão Live Server:
# Clique com botão direito em index.html → "Open with Live Server"
```

### Opção 3 — Com Python (servidor local)
```bash
# Python 3
python -m http.server 3000

# Acesse: http://localhost:3000
```

### Opção 4 — Com Node.js
```bash
npx serve .
# Acesse: http://localhost:3000
```

---

## 📁 Estrutura de Pastas

```
apex-sport/
│
├── index.html          # Estrutura HTML semântica completa
├── style.css           # Todos os estilos (variáveis, componentes, responsivo)
├── app.js              # Interações e animações JavaScript
└── README.md           # Este arquivo
```

### Arquitetura do HTML

```
<header>                ← Barra de topo + navegação fixa
<main>
  ├── .hero             ← Hero fullscreen com animação SVG
  ├── .brands           ← Faixa de esportes / confiança
  ├── .categories       ← Grid assimétrico de categorias
  ├── .products         ← Produtos em destaque com filtro
  ├── .promo-banner     ← Banner de promoção com countdown
  ├── .stats            ← Números / stats animados
  └── .newsletter       ← Formulário de e-mail
<footer>                ← Links, redes sociais, rodapé legal
```

---

## 🎨 Sistema de Design

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `--ink` | `#0A0A0A` | Fundo escuro, textos principais |
| `--cream` | `#F5F5F0` | Fundo claro, seções alternadas |
| `--red` | `#E63946` | Acento principal, CTAs, badges |
| `--blue` | `#457B9D` | Acento secundário |
| `--white` | `#FFFFFF` | Texto sobre fundos escuros |

### Tipografia

| Fonte | Uso | Peso |
|---|---|---|
| Bebas Neue | Títulos, logos, números grandes | 400 |
| DM Sans | Corpo, botões, labels | 300/400/500/700 |

### Breakpoints

```css
/* Tablet */ @media (max-width: 1024px)
/* Mobile */ @media (max-width: 768px)
/* Small  */ @media (max-width: 480px)
```

---

## ✅ Checklist de Features

- [x] Layout moderno, responsivo e clean
- [x] Menu superior com navegação completa
- [x] Menu mobile hamburger animado
- [x] Hero section com CTA e ilustração animada
- [x] Seção de produtos em destaque (6 cards)
- [x] Filtro de produtos por categoria
- [x] Seção de categorias em grid assimétrico
- [x] Seção de promoções com countdown regressivo
- [x] Rodapé com links e redes sociais
- [x] Animações hover e transições suaves
- [x] Design responsivo para mobile
- [x] Código organizado e comentado
- [x] Favoritar produto com toggle
- [x] Adicionar ao carrinho com contador
- [x] Scroll reveal nas seções
- [x] Contador de estatísticas animado
- [x] Formulário de newsletter funcional
- [x] Botão back-to-top

---

## 📸 Seções do Site

1. **Header** — Logo, navegação, busca, favoritos, carrinho
2. **Barra de topo** — Promoção de frete grátis
3. **Hero** — "MOVE WITHOUT LIMITS" com tênis SVG animado
4. **Parceiros** — Faixa de esportes disponíveis
5. **Categorias** — Masculino (destaque), Feminino, Infantil, Acessórios
6. **Produtos** — 6 cards com filtro, badges de promoção, hover overlay
7. **Promoção** — Banner escuro com countdown regressivo
8. **Stats** — 500k+ clientes, 1200+ produtos, 15+ anos, 99% satisfação
9. **Newsletter** — Cadastro de e-mail
10. **Footer** — Marca, links, social, pagamentos, legal

---

## 📄 Licença

Projeto acadêmico / portfólio. Livre para uso educacional e pessoal.

---

*Desenvolvido com 🔴 por Ápex Sport Dev Team*
