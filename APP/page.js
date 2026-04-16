'use client';

import React, { useState, useEffect } from 'react';

export default function GenioOcultoLanding() {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [emailInput, setEmailInput] = useState('');

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
            if (hours < 0) {
              hours = 23;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', backgroundColor: '#0f0f0f', color: '#fff', lineHeight: '1.6' }}>
      {/* Barra de urgência */}
      <div style={{ 
        backgroundColor: '#dc2626', 
        padding: '12px 0', 
        textAlign: 'center', 
        fontSize: '14px',
        fontWeight: '600',
        animation: 'pulse 2s ease-in-out infinite'
      }}>
        ⏰ DESCONTO DE 50% VÁLIDO POR {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
      </div>

      {/* Hero Section */}
      <section style={{ 
        paddingTop: '60px', 
        paddingBottom: '80px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '800',
          marginBottom: '20px',
          lineHeight: '1.2',
          color: '#fff'
        }}>
          Você está desperdiçando o poder que mudou a história
        </h1>
        
        <p style={{ 
          fontSize: '22px',
          color: '#d1d5db',
          marginBottom: '30px',
          fontWeight: '500'
        }}>
          Leonardo da Vinci, Nikola Tesla, Steve Jobs... todos conheciam esse segredo sobre energia que 99% dos homens ignora.
        </p>

        <p style={{ 
          fontSize: '18px',
          color: '#9ca3af',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          Aprenda a transmutar sua energia em foco irresistível, disciplina e propósito real — sem misticismo, sem autoajuda vazia.
        </p>

        {/* Botão CTA Principal */}
        <a href="https://pay.kiwify.com.br/LgtcX9s" style={{
          display: 'inline-block',
          backgroundColor: '#fbbf24',
          color: '#1f2937',
          padding: '18px 48px',
          fontSize: '18px',
          fontWeight: '700',
          borderRadius: '8px',
          textDecoration: 'none',
          marginBottom: '20px',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 10px 30px rgba(251, 191, 36, 0.3)',
          cursor: 'pointer'
        }} onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 15px 40px rgba(251, 191, 36, 0.4)';
        }} onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 30px rgba(251, 191, 36, 0.3)';
        }}>
          SIM, DESBLOQUEAR MINHA GENIALIDADE →
        </a>

        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '40px' }}>
          ⚡ Acesso imediato • 100% garantia • Suporte vitalício
        </p>
      </section>

      {/* Vídeo Testemunha */}
      <section style={{ 
        paddingTop: '40px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#1f2937',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', marginBottom: '30px' }}>Veja o método em ação</h2>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          aspectRatio: '16/9',
          backgroundColor: '#111',
          borderRadius: '8px',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #374151'
        }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="O Gênio Oculto - Método"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px' }}
          />
        </div>
        <p style={{ fontSize: '14px', color: '#9ca3af', marginTop: '16px' }}>
          Troque o ID do vídeo quando tiver seu próprio
        </p>
      </section>

      {/* O Problema */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
          Seu fracasso não é falta de vontade. É falta de energia.
        </h2>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {[
            { icon: '⚡', title: 'Procrastinação crônica', desc: 'Sente que tem potencial mas não consegue agir. Fica travado entre o desejo e a inação.' },
            { icon: '🔄', title: 'Ciclos repetidos', desc: 'Tenta, falha, desiste. Depois tenta de novo. O mesmo padrão se repete por anos.' },
            { icon: '🌀', title: 'Distração constante', desc: 'Sua energia vaza em redes sociais, vídeos, impulsos. Nada de importante sai do papel.' },
            { icon: '😵', title: 'Baixa autoestima', desc: 'Acha que não é "disciplinado o suficiente" ou que "nasceu sem talento". A verdade é outra.' }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#1f2937',
              padding: '24px',
              borderRadius: '8px',
              border: '1px solid #374151'
            }}>
              <div style={{ fontSize: '36px', marginBottom: '12px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ color: '#d1d5db', fontSize: '14px' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#7c3aed',
          padding: '32px',
          borderRadius: '8px',
          borderLeft: '4px solid #fbbf24'
        }}>
          <p style={{ fontSize: '18px', fontWeight: '600', margin: '0' }}>
            Freud chamou isso de "vazamento libidinal". Sua energia está sendo desperdiçada em canais improdutivos. E ninguém te ensinou a redirecionar isso.
          </p>
        </div>
      </section>

      {/* A Solução */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
          A sublimação: converter energia em gênio
        </h2>

        <div style={{
          backgroundColor: '#1f2937',
          padding: '40px',
          borderRadius: '8px',
          marginBottom: '40px'
        }}>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db' }}>
            <strong>Sublimação</strong> não é negação ou repressão. É a conversão consciente de impulsos instintivos em criatividade, foco e realização.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db', marginTop: '16px' }}>
            Da Vinci pintava enquanto canalizava sua energia. Napoleon dirigia impérios. Steve Jobs criava produtos revolucionários. Todos aplicavam inconscientemente o que você vai aprender de forma consciente e estruturada.
          </p>
        </div>

        <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', textAlign: 'center' }}>
          Os 3 pilares do Gênio Oculto
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {[
            { num: '1', title: 'Reconhecer', desc: 'Identifique aonde sua energia está sendo desperdiçada' },
            { num: '2', title: 'Redirecionar', desc: 'Use técnicas práticas de transmutação' },
            { num: '3', title: 'Ritualizar', desc: 'Implante rituais diários que mantêm o direcionamento' }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#374151',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center'
            }}>
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#fbbf24',
                color: '#1f2937',
                fontSize: '24px',
                fontWeight: '700',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                {item.num}
              </div>
              <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h4>
              <p style={{ fontSize: '14px', color: '#d1d5db' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que você recebe */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#1f2937',
        maxWidth: 'none'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
            O que você recebe
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              { emoji: '📘', title: 'Ebook Completo', desc: 'Guia de 100+ páginas pronto para ler' },
              { emoji: '🗺️', title: 'Mapa Mental', desc: 'Visualização completa do método' },
              { emoji: '🎯', title: 'Plano de 21 Dias', desc: 'Roteiro diário pronto para implementar' },
              { emoji: '🔧', title: '10 Técnicas', desc: 'Ferramentas práticas testadas' },
              { emoji: '🌅', title: 'Ritual Matinal', desc: 'Sequência de 15 minutos para o dia' },
              { emoji: '♾️', title: 'Acesso Vitalício', desc: 'Uma vez comprado, é seu para sempre' }
            ].map((item, idx) => (
              <div key={idx} style={{
                backgroundColor: '#111',
                padding: '24px',
                borderRadius: '8px',
                border: '1px solid #374151'
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.emoji}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#d1d5db' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos - WhatsApp Real */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
          Mensagens reais de quem testou
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {/* WhatsApp Luan */}
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              💬 Luan
            </div>
            <div style={{
              backgroundColor: '#fff',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#1f2937',
              lineHeight: '1.5',
              border: '1px solid #e5e7eb'
            }}>
              Mano, comecei a aplicar aquilo lá, não sei explicar direito, mas meu foco melhorou mt
            </div>
            <div style={{
              backgroundColor: '#fbbf24',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#1f2937',
              lineHeight: '1.5',
              border: '1px solid #f59e0b',
              textAlign: 'right',
              fontWeight: '500'
            }}>
              Perfeito, e só manter agora! ✓✓
            </div>
          </div>

          {/* WhatsApp Allan */}
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              💬 Allan
            </div>
            <div style={{
              backgroundColor: '#fff',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#1f2937',
              lineHeight: '1.5',
              border: '1px solid #e5e7eb'
            }}>
              Cara, aquilo fez sentido pra mim, principalmente essa parte de parar de gastar energia
            </div>
            <div style={{
              backgroundColor: '#fff',
              padding: '12px',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#1f2937',
              lineHeight: '1.5',
              border: '1px solid #e5e7eb'
            }}>
              Tô mais disciplinado esses dias, coisa que eu nunca fui kkk
            </div>
          </div>

          {/* WhatsApp Daniel */}
          <div style={{
            backgroundColor: '#f5f5f5',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid #e5e7eb'
          }}>
            <div style={{
              fontSize: '12px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '12px'
            }}>
              💬 Daniel M.
            </div>
            <div style={{
              backgroundColor: '#fff',
              padding: '12px',
              borderRadius: '8px',
              marginBottom: '8px',
              fontSize: '14px',
              color: '#1f2937',
              lineHeight: '1.5',
              border: '1px solid #e5e7eb'
            }}>
              No 3º dia já sentia diferença de verdade. Foco voltou, ansiedade caiu. Muito bom mesmo.
            </div>
            <div style={{
              fontSize: '12px',
              color: '#6b7280',
              marginTop: '8px'
            }}>
              ★★★★★ Recomendo
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#1f2937'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '30px' }}>
            Preço especial por tempo LIMITADO
          </h2>

          <div style={{
            backgroundColor: '#111',
            padding: '40px',
            borderRadius: '12px',
            border: '2px solid #fbbf24',
            marginBottom: '30px'
          }}>
            <p style={{ color: '#9ca3af', fontSize: '16px', marginBottom: '20px' }}>Preço normal</p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
              <span style={{ fontSize: '32px', textDecoration: 'line-through', color: '#6b7280' }}>R$74,66</span>
              <span style={{ fontSize: '12px', backgroundColor: '#dc2626', padding: '6px 12px', borderRadius: '4px', fontWeight: '700' }}>-50%</span>
            </div>
            <div style={{ fontSize: '56px', fontWeight: '800', color: '#fbbf24', marginBottom: '20px' }}>
              R$ 37,33
            </div>
            <p style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '30px' }}>
              Uma única compra. Acesso vitalício. Sem anuidades.
            </p>

            <a href="https://pay.kiwify.com.br/LgtcX9s" style={{
              display: 'inline-block',
              width: '100%',
              backgroundColor: '#fbbf24',
              color: '#1f2937',
              padding: '18px 32px',
              fontSize: '18px',
              fontWeight: '700',
              borderRadius: '8px',
              textDecoration: 'none',
              marginBottom: '16px',
              border: 'none',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
              QUERO DESBLOQUEAR MINHA GENIALIDADE
            </a>

            <p style={{ fontSize: '12px', color: '#9ca3af' }}>
              ✓ Garantia de 7 dias ou dinheiro de volta<br/>
              ✓ Acesso imediato após pagamento<br/>
              ✓ Sem pergunta se não gostar
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '700px',
        margin: '0 auto'
      }}>
        <h2 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '40px', textAlign: 'center' }}>
          Perguntas frequentes
        </h2>

        <div style={{ display: 'grid', gap: '16px' }}>
          {[
            {
              q: 'Qual é o diferencial?',
              a: 'Este não é autoajuda vazia. É psicologia aplicada baseada em Freud com exercícios práticos de 21 dias.'
            },
            {
              q: 'Quanto tempo para ver resultados?',
              a: 'A maioria sente diferença no foco entre dia 1-3. Transformações estruturais começam entre semana 2-3.'
            },
            {
              q: 'E se não gostar?',
              a: 'Você tem 7 dias de garantia. Se não for o que esperava, retorna e recupera 100% do valor.'
            },
            {
              q: 'Preciso de experiência?',
              a: 'Não. O método é prático e direto. Se já tentou 10 cursos que não funcionaram, aqui você descobre por quê.'
            },
            {
              q: 'Recebo tudo de uma vez?',
              a: 'Sim. Acesso imediato após pagamento. Ebook, mapa mental, plano — tudo baixado em segundos.'
            }
          ].map((item, idx) => (
            <div key={idx} style={{
              backgroundColor: '#1f2937',
              padding: '20px',
              borderRadius: '8px',
              borderLeft: '4px solid #fbbf24'
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px', margin: '0 0 8px 0' }}>
                {item.q}
              </h3>
              <p style={{ fontSize: '14px', color: '#d1d5db', margin: '0' }}>
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section style={{ 
        paddingTop: '60px',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
        maxWidth: '900px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px' }}>
          Você tem o potencial. Só falta canalizar a energia.
        </h2>
        
        <p style={{ fontSize: '18px', color: '#d1d5db', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
          Os próximos 21 dias vão ser diferentes. Ou você muda agora ou continua nos mesmos ciclos por mais 21 anos.
        </p>

        <a href="https://pay.kiwify.com.br/LgtcX9s" style={{
          display: 'inline-block',
          backgroundColor: '#fbbf24',
          color: '#1f2937',
          padding: '20px 56px',
          fontSize: '20px',
          fontWeight: '700',
          borderRadius: '8px',
          textDecoration: 'none',
          transition: 'transform 0.2s, box-shadow 0.2s',
          boxShadow: '0 10px 40px rgba(251, 191, 36, 0.4)'
        }} onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-2px)';
          e.target.style.boxShadow = '0 15px 50px rgba(251, 191, 36, 0.5)';
        }} onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 10px 40px rgba(251, 191, 36, 0.4)';
        }}>
          DESBLOQUEAR AGORA POR R$ 37,33
        </a>
      </section>

      {/* Footer */}
      <footer style={{ 
        paddingTop: '40px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#111',
        borderTop: '1px solid #374151',
        textAlign: 'center',
        color: '#6b7280',
        fontSize: '12px'
      }}>
        <p style={{ margin: '0' }}>
          © 2024 O Gênio Oculto. Todos os direitos reservados.
        </p>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}