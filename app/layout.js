cat > app/layout.js << 'EOF'
export const metadata = {
  title: 'O Gênio Oculto - Desbloqueie Seu Potencial',
  description: 'Aprenda a transmutar energia em foco e disciplina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
EOF