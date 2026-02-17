
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Lock, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const CTAButton: React.FC<{ 
  children: React.ReactNode; 
  subtext?: string; 
  className?: string;
  href?: string;
}> = ({ children, subtext, className, href = "#preço" }) => (
  <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
    <button 
      onClick={() => window.location.href = href}
      className="group relative w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
    >
      <span className="relative z-10 text-xl md:text-2xl uppercase tracking-tight">{children}</span>
      <ArrowRight className="w-6 h-6 animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </button>
    {subtext && <p className="mt-3 text-sm text-slate-500 font-medium italic">{subtext}</p>}
  </div>
);

const PillarCard: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="bg-white border border-orange-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold mb-4">
      {number}
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

// --- Main App ---

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const checkoutUrl = "https://pay.kiwify.com.br/8sYIxiD";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Sticky Header for CTA */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="glass border-b border-orange-100 py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-orange-600 w-6 h-6" />
            <span className="font-bold text-slate-800 text-sm md:text-base">Pequenos na Fé</span>
          </div>
          <button 
            onClick={() => window.location.href = '#preço'}
            className="bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-lg hover:bg-orange-700 transition-colors"
          >
            QUERO O MEU ACESSO
          </button>
        </div>
      </header>

      {/* Hero / Hook Section */}
      <section className="relative pt-16 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-bold mb-8 uppercase tracking-wider animate-bounce">
            <AlertCircle className="w-4 h-4" />
            Atenção: Para quem quer profundidade bíblica
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Você já sentiu que está apenas <span className="text-orange-600 italic">"passando o olho"</span> na Bíblia sem que ela entre no seu coração?
          </h1>

          <div className="vsl-text max-w-2xl mx-auto text-lg md:text-xl text-slate-700 text-left space-y-6">
            <p className="font-medium text-center text-slate-500 mb-10">
              Leia cada palavra desta carta com atenção. Ela pode ser o divisor de águas que você tanto pediu em oração.
            </p>
          </div>

          {/* This first button remains an anchor to the pricing section */}
          <CTAButton subtext="Acesso imediato via E-mail" href="#preço">
            Sim! Quero entender a Bíblia
          </CTAButton>
        </div>
      </section>

      {/* Main VSL Text Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto vsl-text text-slate-800 text-lg md:text-xl leading-relaxed">
          
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-900">A verdade que ninguém te contou...</h2>
          
          <p>Eu sei exatamente como é.</p>
          
          <p>Você acorda cedo, abre sua Bíblia, lê um capítulo inteiro...</p>
          
          <p>E quando fecha o livro, sente um vazio estranho.</p>
          
          <p>Você sabe que aquelas são as palavras de Deus.</p>
          
          <p>Mas, para você, elas parecem apenas... <span className="font-bold">palavras distantes.</span></p>

          <p>Você olha para o seu pastor, ou para aquele irmão da igreja que cita versículos de cor e salteado e pensa:</p>

          <p className="italic text-slate-600 border-l-4 border-orange-200 pl-4">"Será que o problema sou eu? Será que me falta fé? Ou talvez eu não seja inteligente o suficiente?"</p>

          <p>Deixa eu te dizer algo que vai te libertar hoje:</p>

          <p className="text-2xl font-bold text-orange-600">O problema NÃO é a sua fé.</p>

          <p>E muito menos a sua inteligência.</p>

          <p>O problema é que ninguém nunca te ensinou <span className="underline decoration-orange-300">COMO</span> estudar.</p>

          <p>Ler a Bíblia sem um método é como tentar montar um quebra-cabeça de 5 mil peças no escuro.</p>

          <p>Você tenta encaixar as peças, mas elas não fazem sentido.</p>

          <p>Você se frustra. Desiste. E acaba lendo apenas as promessas, porque as partes difíceis você prefere pular.</p>

          <div className="bg-slate-50 p-8 rounded-3xl my-12 border border-slate-100 text-center">
            <p className="text-2xl serif italic mb-0">"Meu povo perece por falta de conhecimento."</p>
            <p className="text-sm font-bold mt-2 text-slate-400">Oséias 4:6</p>
          </div>

          <p>Eu não quero que você continue perecendo na superficialidade.</p>

          <p>Imagine o seguinte: abrir a Bíblia e, em vez de confusão, sentir clareza.</p>

          <p>Entender o contexto histórico, por que aquele autor escreveu aquilo e, principalmente, <span className="font-bold text-slate-900">o que Deus está dizendo para VOCÊ hoje.</span></p>

          <p>Isso é possível através do mecanismo exclusivo que desenvolvemos na Escola Pequenos na Fé.</p>

          <h3 className="text-2xl font-bold mt-16 mb-8 text-slate-900">Conheça o Método dos 5 Pilares do Estudo Bíblico Estruturado</h3>

          <p>Este não é um curso de teologia complicado de 4 anos.</p>

          <p>É uma estrutura prática, pensada para o cristão comum que tem pouco tempo, mas tem sede de Deus.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10">
            <PillarCard 
              number={1} 
              title="Contexto Histórico" 
              description="Entenda para QUEM a mensagem foi escrita e o que estava acontecendo na época. Isso evita interpretações erradas."
            />
            <PillarCard 
              number={2} 
              title="Gênero Literário" 
              description="A Bíblia tem poesia, lei, história e cartas. Cada uma se lê de um jeito diferente."
            />
            <PillarCard 
              number={3} 
              title="Observação Atenta" 
              description="Aprenda a fazer as perguntas certas ao texto: Quem? Onde? Por quê?"
            />
            <PillarCard 
              number={4} 
              title="Interpretação Sólida" 
              description="Conecte as passagens com o restante da Bíblia sem inventar significados que não existem."
            />
          </div>
          <div className="max-w-md mx-auto">
             <PillarCard 
              number={5} 
              title="Aplicação Prática" 
              description="O pilar mais importante. Como transformar a leitura em mudança real de vida hoje."
            />
          </div>

          <p className="mt-16">Esse método é o coração da nossa <span className="font-bold text-orange-600">Formação Bíblica Fundamental</span>.</p>

          <p>E hoje, eu quero te entregar as chaves do **Módulo 1**.</p>

          <div className="my-12 flex flex-col items-center">
            <CTAButton subtext="Aproveite o valor de lançamento" href={checkoutUrl}>
              Quero aprender o Método agora
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Product Presentation */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">O que você recebe no Módulo 1?</h2>
            <p className="text-slate-400 text-lg">A base sólida para sua vida espiritual em formato digital.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Guia do Módulo 1 (PDF)</h4>
                  <p className="text-slate-400">Todo o conteúdo estruturado, passo a passo, para você estudar no celular, tablet ou imprimir.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Checklist de Estudo</h4>
                  <p className="text-slate-400">Um guia rápido para você ter ao lado da sua Bíblia e nunca mais se perder durante a leitura.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Mapas e Cronologia</h4>
                  <p className="text-slate-400">Visualizações claras para você entender geograficamente onde os eventos bíblicos ocorreram.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">
              <div className="flex items-start gap-4">
                <div className="bg-orange-600/20 p-3 rounded-lg">
                  <CheckCircle2 className="text-orange-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Acesso Vitalício</h4>
                  <p className="text-slate-400">O material é seu para sempre. Estude no seu ritmo, sem mensalidades ou pressa.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Anchoring */}
      <section id="preço" className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-100/50 rounded-full -ml-32 -mb-32 blur-3xl" />

        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="text-slate-500 font-bold uppercase tracking-widest mb-4">Investimento</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Qual o valor do seu crescimento espiritual?</h2>
          
          <div className="vsl-text text-left mb-12">
            <p className="text-slate-600">Um seminário teológico custa hoje, em média, R$ 400 por mês. E leva anos para dar resultados práticos.</p>
            <p className="text-slate-600">Nós poderíamos cobrar facilmente R$ 197 por este módulo inicial, dada a profundidade do método.</p>
            <p className="text-slate-600">Mas nossa missão na <span className="font-bold">Escola Pequenos na Fé</span> é democratizar o acesso ao conhecimento bíblico sério.</p>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-3xl p-10 shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-1 rounded-full text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-4 h-4" />
              Oferta por tempo limitado!
            </div>
            
            <p className="text-slate-400 line-through text-xl mb-2">De R$ 97,00</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl text-slate-500 font-medium">Por apenas</span>
              <span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">R$ 19,90</span>
            </div>
            <p className="text-orange-600 font-bold mb-8">Pagamento único. Sem mensalidades.</p>

            <CTAButton href={checkoutUrl}>
              Quero Aproveitar Agora
            </CTAButton>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  Compra 100% Segura
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  +4.500 Alunos
                </div>
              </div>
              <img src="https://picsum.photos/seed/cards/300/40" alt="Cartões de Crédito" className="h-8 grayscale opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-orange-50">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
             <div className="relative">
                <ShieldCheck className="w-32 h-32 text-orange-600" />
                <div className="absolute inset-0 bg-orange-200 rounded-full -z-10 blur-xl opacity-50" />
             </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Risco Zero: 7 Dias de Garantia Incondicional</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Eu confio tanto no Método dos 5 Pilares que eu tiro todo o risco das suas costas. 
              Acesse o Módulo 1, leia o material e comece a praticar. Se em até 7 dias você sentir que não 
              está aprendendo nada, basta me enviar um único e-mail e eu devolvo 100% do seu dinheiro. 
              Sem perguntas, sem burocracia. Continuamos amigos e irmãos em Cristo.
            </p>
          </div>
        </div>
      </section>

      {/* Binary Decision / Final CTA */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Agora, você tem apenas dois caminhos...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Caminho 1
              </h4>
              <p className="text-slate-600 text-sm">Ignorar esta página e continuar estudando a Bíblia da mesma forma, sentindo frustração e falta de entendimento pelos próximos anos.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-orange-200 bg-orange-50 ring-4 ring-orange-50">
              <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" /> Caminho 2
              </h4>
              <p className="text-slate-800 text-sm font-medium">Investir menos que o preço de um lanche para ter um método testado, que vai te dar segurança e profundidade espiritual para o resto da vida.</p>
            </div>
          </div>

          <p className="text-xl text-slate-700 mb-10 italic">"Qual desses caminhos agrada mais ao coração de Deus para sua vida?"</p>

          <CTAButton subtext="A oferta pode encerrar a qualquer momento" href={checkoutUrl}>
            Escolho o Caminho 2!
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-100 text-slate-400 text-sm text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold">Pequenos na Fé</span>
          </div>
          <p>© 2024 Escola Bíblica Online Pequenos na Fé. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-600 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-orange-600 transition-colors">Privacidade</a>
          </div>
          <p className="max-w-2xl">
            Este site não faz parte do site do Facebook ou do Facebook Inc. Além disso, este site NÃO é endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca comercial da FACEBOOK, Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
