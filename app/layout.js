export const metadata = {
  title: 'O Gênio Oculto - Desbloqueie Seu Potencial',
  description: 'Aprenda a transmutar energia sexual em foco, disciplina e propósito real. Método baseado em Freud com resultados práticos.',
  keywords: 'sublimação, foco, disciplina, produtividade, Freud',
  openGraph: {
    title: 'O Gênio Oculto',
    description: 'Desbloqueie seu potencial infinito com o método de transmutação de energia.',
    url: 'https://genio-oculto.vercel.app',
    siteName: 'O Gênio Oculto',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Gênio Oculto',
    description: 'Desbloqueie seu potencial com transmutação de energia.',
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