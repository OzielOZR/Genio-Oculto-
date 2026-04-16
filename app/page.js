cat > app/page.js << 'EOF'
'use client';
import React, { useState, useEffect } from 'react';

export default function GenioOcultoLanding() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) hours = 23;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#0f0f0f', color: '#fff', lineHeight: '1.6', margin: 0, padding: 0 }}>
      <div style={{ backgroundColor: '#dc2626', padding: '12px', textAlign: 'center', fontSize: '14px', fontWeight: '600' }}>
        ⏰ DESCONTO 50% POR {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </div>
      <section style={{ padding: '60px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '20px' }}>Você está desperdiçando o poder que mudou a história</h1>
        <p style={{ fontSize: '22px', color: '#d1d5db', marginBottom: '30px' }}>Leonardo da Vinci, Nikola Tesla, Steve Jobs... todos conheciam esse segredo.</p>
        <p style={{ fontSize: '18px', color: '#9ca3af', marginBottom: '40px' }}>Aprenda a transmutar sua energia em foco irresistível, disciplina e propósito real.</p>
        <a href="https://pay.kiwify.com.br/LgtcX9s" style={{ display: 'inline-block', backgroundColor: '#fbbf24', color: '#1f2937', padding: '18px 48px', fontSize: '18px', fontWeight: '700', borderRadius: '8px', textDecoration: 'none', marginBottom: '20px', cursor: 'pointer' }}>SIM, DESBLOQUEAR →</a>
      </section>
      <section style={{ padding: '40px 20px', backgroundColor: '#1f2937', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px' }}>Veja em ação</h2>
        <div style={{ maxWidth: '700px', margin: '0 auto', aspectRatio: '16/9', backgroundColor: '#111', borderRadius: '8px' }}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameBorder="0" allow="accelerometer; autoplay" allowFullScreen style={{ borderRadius: '8px' }} />
        </div>
      </section>
      <section style={{ padding: '60px 20px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>Seu fracasso não é falta de vontade</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
          {[{ icon: '⚡', title: 'Procrastinação crônica', desc: 'Sente potencial mas não consegue agir' }, { icon: '🔄', title: 'Ciclos repetidos', desc: 'O mesmo padrão anos' }, { icon: '🌀', title: 'Distração', desc: 'Energia em redes sociais' }].map((item, i) => (
            <div key={i} style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '8px' }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section style={{ padding: '60px 20px', backgroundColor: '#1f2937' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px' }}>Preço especial</h2>
          <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '12px', border: '2px solid #fbbf24' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '32px', textDecoration: 'line-through', color: '#6b7280' }}>R$74,66</span>
              <span style={{ fontSize: '12px', backgroundColor: '#dc2626', padding: '6px 12px', borderRadius: '4px', fontWeight: '700' }}>-50%</span>
            </div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: '#fbbf24', marginBottom: '20px' }}>R$ 37,33</div>
            <a href="https://pay.kiwify.com.br/LgtcX9s" style={{ display: 'block', backgroundColor: '#fbbf24', color: '#1f2937', padding: '18px', fontSize: '18px', fontWeight: '700', borderRadius: '8px', textDecoration: 'none', marginBottom: '16px', cursor: 'pointer' }}>DESBLOQUEAR AGORA</a>
          </div>
        </div>
      </section>
      <footer style={{ padding: '40px 20px', backgroundColor: '#111', textAlign: 'center', color: '#6b7280', fontSize: '12px' }}>
        <p>© 2024 O Gênio Oculto</p>
      </footer>
    </div>
  );
}
EOF