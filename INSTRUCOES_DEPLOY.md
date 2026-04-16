# O Gênio Oculto - Guia de Deploy no Vercel

## 📋 Passo a Passo Rápido (5 minutos)

### 1️⃣ Criar repositório no GitHub
```bash
cd ~/Desktop
git clone https://github.com/OzielOZR/genio-oculto.git
cd genio-oculto
```

Se não tiver repositório ainda:
```bash
mkdir genio-oculto
cd genio-oculto
git init
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### 2️⃣ Criar estrutura Next.js básica
```bash
npx create-next-app@latest . --typescript false --tailwind false --no-git
```

(Responda "N" para ESLint, "N" para src/, "N" para app router experimental)

**Ou copie manualmente:**
```
genio-oculto/
├── app/
│   ├── page.js (copie o conteúdo do genio-oculto-landing.jsx aqui)
│   └── layout.js
├── package.json
├── next.config.js
└── .gitignore
```

### 3️⃣ Copiar o arquivo da landing page
```bash
# Copie o conteúdo de genio-oculto-landing.jsx para app/page.js
cp genio-oculto-landing.jsx app/page.js
```

### 4️⃣ Instalar dependências
```bash
npm install
```

### 5️⃣ Testar localmente
```bash
npm run dev
```
Abra http://localhost:3000 no navegador

### 6️⃣ Fazer push para GitHub
```bash
git add .
git commit -m "Initial commit: landing page O Gênio Oculto"
git branch -M main
git remote add origin https://github.com/OzielOZR/genio-oculto.git
git push -u origin main
```

### 7️⃣ Deploy no Vercel
1. Vá para https://vercel.com/new
2. Conecte sua conta GitHub
3. Selecione o repositório `genio-oculto`
4. Clique em "Deploy"
5. Pronto! Seu site estará em: `https://genio-oculto.vercel.app`

---

## ⚙️ Estrutura de Arquivos Recomendada

```
genio-oculto/
├── app/
│   ├── layout.js          # Layout base
│   ├── page.js           # (Copie genio-oculto-landing.jsx aqui)
│   └── favicon.ico       # Seu favicon
├── public/
│   └── og-image.png      # Imagem para preview social
├── package.json
├── next.config.js
├── .gitignore
├── .env.local            # Se tiver variáveis de ambiente
└── README.md
```

---

## 📝 arquivo: `app/layout.js`

```jsx
export const metadata = {
  title: 'O Gênio Oculto - Desbloqueie Seu Potencial',
  description: 'Aprenda a transmutar energia sexual em foco, disciplina e propósito real. Método baseado em Freud com resultados práticos.',
  keywords: 'sublimação, foco, disciplina, produtividade, Freud',
  openGraph: {
    title: 'O Gênio Oculto',
    description: 'Desbloqueie seu potencial infinito com o método de transmutação de energia.',
    url: 'https://genio-oculto.vercel.app',
    siteName: 'O Gênio Oculto',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Gênio Oculto',
    description: 'Desbloqueie seu potencial com transmutação de energia.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
```

---

## 🔧 Customizações Importantes

### 1. Trocar a cor do CTA
Procure por `backgroundColor: '#fbbf24'` e mude para sua cor:
- `#ff6b6b` (vermelho vibrante)
- `#00d4ff` (ciano)
- `#00f0ff` (azul neon)

### 2. Colocar seu próprio vídeo (muito importante!)
Procure por:
```jsx
<iframe
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
```

Troque `dQw4w9WgXcQ` pelo ID do seu vídeo no YouTube.

**Como pegar o ID do vídeo?**
- URL: `https://www.youtube.com/watch?v=SEU_ID_AQUI`
- ID = `SEU_ID_AQUI`

### 3. Trocar link do Kiwify
Procure por `https://pay.kiwify.com.br/LgtcX9s` e troque pelo seu link de checkout.

### 4. Personalizar depoimentos
Busque por:
```jsx
{
  name: 'Daniel M.',
  city: 'São Paulo',
  quote: '...',
  result: '...'
}
```

E mude com depoimentos reais de seus clientes.

### 5. Adicionar Analytics (Recomendado)
No arquivo `app/layout.js`, adicione depois do `<body>`:

```jsx
{/* Google Analytics */}
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Troque `GA_MEASUREMENT_ID` pelo seu ID do Google Analytics.

---

## 🚀 Otimizações para Conversão

### 1. Adicionar Pop-up de Email (Opcional)
Se quiser capturar emails antes do checkout:

```jsx
// Adicione dentro do Hero Section
<form onSubmit={handleEmailSubmit} style={{ maxWidth: '400px', margin: '20px auto' }}>
  <input
    type="email"
    placeholder="seu@email.com"
    value={emailInput}
    onChange={(e) => setEmailInput(e.target.value)}
    style={{
      width: '100%',
      padding: '12px',
      marginBottom: '8px',
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      fontSize: '14px'
    }}
    required
  />
  <button
    type="submit"
    style={{
      width: '100%',
      backgroundColor: '#fbbf24',
      color: '#1f2937',
      padding: '12px',
      borderRadius: '8px',
      fontWeight: '700',
      border: 'none',
      cursor: 'pointer'
    }}
  >
    Receber Amostra Grátis →
  </button>
</form>
```

### 2. Adicionar Pixel do Facebook
No `app/layout.js`, dentro do `<head>`:

```jsx
{/* Facebook Pixel */}
<script async defer crossOrigin="anonymous" 
  src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v18.0&appId=SEU_APP_ID" />
```

### 3. Integrar com TikTok Pixel
Para rastrear cliques vindos do TikTok:

```jsx
{/* TikTok Pixel */}
<script>
  !function (w, d, t) {
    w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;++i)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=Object.create(ttq),n=0;n<ttq.methods.length;++n)ttq.setAndDefer(e,ttq.methods[n]);return e.config=function(n){if(!n.token){console.warn("Pass property 'token' to the config method");return}e._=n,w.TiktokAnalyticsObject=t,ttq.config=e,ttq._=n},e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq.isLoading=!0,ttq.loadScript=function(e){var t=document.createElement("script");t.type="text/javascript",t.async=!0,t.src=e,document.head.appendChild(t)},ttq.loadScript(i),ttq.config(n)},ttq.ready=function(t){ttq.isReady=!0,t()},ttq.icsw=1,ttq.load("SEU_TIKTOK_ID"),ttq.track("PageView");
  }(window,document,'ttq');
</script>
```

---

## 📊 Métricas para Monitorar

Depois de colocar no ar, monitore:

- **CTR (Click-through Rate):** % de pessoas que clicam no CTA
- **Conversion Rate:** % de visitantes que viram → compraram
- **Bounce Rate:** % de pessoas que saem sem fazer nada
- **Time on Page:** Quanto tempo gastarão lendo

**Metas realistas:**
- CTR: 3-8% (acima disso é muito bom)
- Conversão: 2-5% (ótimo para landing de produto digital)

---

## 🔒 Segurança

### 1. Criar `.gitignore`
```
node_modules/
.next/
.env.local
.env.*.local
dist/
```

### 2. Variáveis de ambiente (se tiver)
Crie `.env.local`:
```
NEXT_PUBLIC_KIWIFY_URL=https://pay.kiwify.com.br/LgtcX9s
```

---

## 🆘 Troubleshooting

### "npm install" não funciona
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vercel não faz deploy
1. Verifique se o `package.json` existe
2. Clique em "Redeploy" no painel do Vercel
3. Verifique os logs na aba "Deployments"

### Página em branco no Vercel
Verificar erro no browser:
- Aperte F12 → Console
- Procure por erros em vermelho

### Link do Kiwify não abre
1. Verifique se o link está correto
2. Teste o link direto no navegador
3. Atualize a página (Ctrl+Shift+R para limpcar cache)

---

## 📱 Otimizar para TikTok

Como essa vai ser compartilhada no TikTok, garanta que:
- ✓ Página carrega rápido (< 3 segundos) — CRÍTICO
- ✓ CTA é fácil de clicar no mobile
- ✓ Não tem pop-ups que bloqueiam a view
- ✓ Cores contrastam bem em tela pequena

**Testar no mobile:**
- iPhone 12/13
- Samsung Galaxy (qualidade baixa)
- Conexão 4G (não WiFi)

---

## 🎯 Próximos Passos

1. ✓ Deploy (5 min)
2. ✓ Customizar copy/vídeo (15 min)
3. → Criar 5-10 vídeos para TikTok (30 min por vídeo)
4. → Postar no TikTok com link na bio
5. → Monitorar conversões

**Estrutura dos vídeos TikTok:**
- 0-3s: Hook poderoso ("Você está desperdiçando este poder...")
- 3-15s: Agitação (problema que a audiência sente)
- 15-45s: Sneak peek da solução
- 45-60s: CTA ("Link na bio")

---

Qualquer dúvida, é só me chamar!
