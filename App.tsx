
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
  ArrowRight,
  Gift,
  Calendar,
  Heart,
  Home,
  Layout,
  Smartphone,
  Download
} from 'lucide-react';

// --- Components ---

const CTAButton: React.FC<{ 
  children: React.ReactNode; 
  subtext?: string; 
  className?: string;
  href?: string;
}> = ({ children, subtext, className, href = "#preço" }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = href;
    }
  };

  return (
    <div className={`flex flex-col items-center w-full max-w-md mx-auto ${className}`}>
      <button 
        onClick={handleClick}
        className="group relative w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-5 px-8 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
      >
        <BookOpen className="w-6 h-6 relative z-10" />
        <span className="relative z-10 text-xl md:text-2xl uppercase tracking-tight">{children}</span>
        <ArrowRight className="w-6 h-6 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      </button>
      {subtext && <p className="mt-3 text-sm text-slate-500 font-medium italic">{subtext}</p>}
    </div>
  );
};

const PillarCard: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div className="bg-white border border-orange-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
    <div className="w-10 h-10 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center font-bold mb-4">
      {number}
    </div>
    <h4 className="text-xl font-bold text-slate-800 mb-2">{title}</h4>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

const BonusCard: React.FC<{ 
  icon: React.ReactNode; 
  title: string; 
  value: string; 
  description: string;
}> = ({ icon, title, value, description }) => (
  <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden group flex flex-col h-full hover:border-orange-200 transition-colors">
    <div className="absolute top-4 right-4 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full z-10">
      GRÁTIS HOJE
    </div>
    <div className="mb-6 text-orange-600 transition-transform duration-300 group-hover:scale-110 bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner">
      {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-10 h-10' })}
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-grow">{description}</p>
    
    <div className="pt-4 border-t border-slate-100">
      <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Valor Individual: </span>
      <span className="text-slate-900 font-bold line-through">{value}</span>
    </div>
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
    <div className="min-h-screen bg-[#fdfcf8]">
      {/* Sticky Header for CTA */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="glass border-b border-orange-100 py-3 px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-orange-600 w-6 h-6" />
            <span className="font-bold text-slate-800 text-sm md:text-base">Escola Pequenos na Fé</span>
          </div>
          <button 
            onClick={() => document.getElementById('preço')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-orange-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg hover:bg-orange-700 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
          >
            QUERO O MEU ACESSO
          </button>
        </div>
      </header>

      {/* Hero / Hook Section */}
      <section className="relative pt-24 pb-20 px-4 bg-gradient-to-b from-orange-50 to-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-800 text-sm font-bold mb-8 uppercase tracking-wider">
            <AlertCircle className="w-4 h-4" />
            Um Convite para o Amadurecimento Espiritual
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-8">
            Você já sentiu que está apenas <span className="text-orange-600 italic">"passando o olho"</span> na Bíblia sem que ela entre no seu coração?
          </h1>

          <div className="vsl-text max-w-2xl mx-auto text-lg md:text-xl text-slate-700 text-left [&>p]:mb-10 [&>p]:leading-loose">
            <p className="font-medium text-center text-slate-500">
              Leia cada palavra desta carta com atenção. Ela pode ser a resposta para a oração que você fez hoje de manhã.
            </p>
          </div>

          <CTAButton subtext="Acesso imediato via E-mail" href="#preço">
            Sim! Quero entender a Bíblia
          </CTAButton>
        </div>
      </section>

      {/* Main VSL Text Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto vsl-text text-slate-800 text-lg md:text-xl [&>p]:mb-10 [&>p]:leading-loose">
          <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">A verdade que ninguém te contou...</h2>
          
          <p>Eu sei exatamente como é.</p>
          <p>Você acorda cedo, abre sua Bíblia, lê um capítulo inteiro...</p>
          <p>E quando fecha o livro, sente um vazio estranho.</p>
          <p>Você sabe que aquelas são as palavras de Deus.</p>
          <p>Mas, para você, elas parecem apenas... <span className="font-bold text-slate-900">palavras distantes.</span></p>

          <p>Você olha para the seu pastor, ou para aquele irmão da igreja que cita versículos de cor e salteado e pensa:</p>
          <p className="italic text-slate-600 border-l-4 border-orange-200 pl-4">"Será que o problema sou eu? Será que me falta fé? Ou talvez eu não seja inteligente o suficiente?"</p>

          <p>Deixa eu te dizer algo que vai te libertar hoje:</p>
          <p className="text-2xl font-bold text-orange-600">O problema NÃO é a sua fé.</p>
          <p>E muito menos a sua inteligência.</p>
          <p>O problema é que ninguém nunca te ensinou <span className="underline decoration-orange-300">COMO</span> estudar.</p>

          <p>Ler a Bíblia sem um método é como tenta montar um quebra-cabeça de 5 mil peças no escuro.</p>
          <p>Você tenta encaixar as peças, mas elas não fazem sentido.</p>
          <p>Você se frustra. Desiste. E acaba lendo apenas as promessas, porque as partes difíceis você prefere pular.</p>

          <div className="bg-slate-50 p-8 rounded-3xl my-16 border border-slate-100 text-center">
            <p className="text-2xl serif italic mb-0">"Meu povo perece por falta de conhecimento."</p>
            <p className="text-sm font-bold mt-2 text-slate-400">Oséias 4:6</p>
          </div>

          <p>Eu não quero que você continue perecendo na superficialidade.</p>
          <p>Imagine o seguinte: abrir a Bíblia e, em vez de confusão, sentir clareza.</p>
          <p>Entender o contexto histórico, por que aquele autor escreveu aquilo e, principalmente, <span className="font-bold text-slate-900">o que Deus está dizendo para VOCÊ hoje.</span></p>

          <h3 className="text-2xl font-bold mt-20 mb-10 text-slate-900 text-center">Conheça o Método dos 5 Pilares do Estudo Bíblico Estruturado</h3>

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

          <p className="mt-20 text-center font-bold text-orange-600">Esse método é o coração do nosso Módulo 1: Formação Bíblica Fundamental.</p>
        </div>
      </section>

      {/* Feature Section - Text Focused */}
      <section className="py-24 px-4 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600/20 text-orange-500 text-xs font-bold mb-6 uppercase tracking-widest">
            <Layout className="w-3 h-3" /> Escola Bíblica Online
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">O que você recebe no Módulo 1?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="bg-orange-600/20 p-3 rounded-xl w-fit mb-6">
                <CheckCircle2 className="text-orange-500 w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3">Guia Digital Premium</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Todo o conteúdo do Método dos 5 Pilares em um PDF de alta qualidade, otimizado para leitura em qualquer dispositivo.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="bg-orange-600/20 p-3 rounded-xl w-fit mb-6">
                <CheckCircle2 className="text-orange-500 w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3">Checklist de Estudo Diário</h4>
              <p className="text-slate-400 text-sm leading-relaxed">O roteiro prático para você imprimir ou usar no celular para nunca mais se perder em uma leitura bíblica.</p>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-orange-500/50 transition-colors">
              <div className="bg-orange-600/20 p-3 rounded-xl w-fit mb-6">
                <CheckCircle2 className="text-orange-500 w-6 h-6" />
              </div>
              <h4 className="font-bold text-xl mb-3">Material de Apoio Gráfico</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Mapas fundamentais e cronologias bíblicas essenciais para o seu estudo do Módulo 1.</p>
            </div>
          </div>

          <div className="mt-16 p-8 bg-slate-900/50 rounded-3xl border border-slate-800 max-w-2xl mx-auto">
            <p className="text-lg text-slate-300 italic mb-6">"Este é o primeiro passo para quem deseja sair da superficialidade e amadurecer na fé com fundamento sólido."</p>
            <div className="flex justify-center gap-6 text-orange-500">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Smartphone className="w-5 h-5" /> Celular
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Layout className="w-5 h-5" /> Tablet/PC
              </div>
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                <Download className="w-5 h-5" /> Acesso Vitalício
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-24 px-4 bg-orange-50/50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-orange-200 text-orange-800 text-sm font-bold mb-4 uppercase">
              <Gift className="w-4 h-4" /> Bônus Exclusivos
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Ao garantir o Módulo 1 hoje, você também ganha:</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Materiais complementares criados para fortalecer o ambiente espiritual da sua casa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <BonusCard 
              icon={<Calendar />}
              title="Calendário de Orações em Família"
              description="Um guia prático de 30 dias para unir sua família em propósito diante de Deus com temas diários específicos."
              value="R$ 47,00"
            />
            <BonusCard 
              icon={<Heart />}
              title="Devocional Diário para Pais"
              description="Reflexões bíblicas curtas e profundas para quem tem o desafio de criar filhos no caminho do Senhor."
              value="R$ 37,00"
            />
            <BonusCard 
              icon={<Home />}
              title="Roteiro de Culto Doméstico"
              description="Aprenda como conduzir um momento espiritual em casa que seja envolvente para todas as idades."
              value="R$ 39,90"
            />
          </div>

          <div className="mt-16 bg-white p-8 rounded-3xl border border-orange-100 shadow-sm">
            <p className="text-slate-500 font-medium">Você está recebendo mais de <span className="text-slate-900 font-bold">R$ 120,00</span> em materiais bônus.</p>
            <p className="text-orange-600 font-bold text-lg mt-2">Mas eles serão seus por R$ 0,00 ao se inscrever agora.</p>
          </div>
        </div>
      </section>

      {/* Pricing / Final Offer */}
      <section id="preço" className="py-24 px-4 bg-white relative overflow-hidden text-center">
        <div className="max-w-2xl mx-auto relative z-10">
          <p className="text-slate-500 font-bold uppercase tracking-widest mb-4">Investimento Especial</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Quanto vale a sua paz de entender a Bíblia?</h2>
          
          <div className="vsl-text text-left mb-12 [&>p]:mb-10 [&>p]:leading-loose">
            <p className="text-slate-600">Poderíamos cobrar R$ 97,00 ou até mais por este material completo, dada a clareza que ele proporciona.</p>
            <p className="text-slate-600">Mas queremos que o conhecimento bíblico seja acessível para todo cristão que tem sede de Deus.</p>
          </div>

          <div className="bg-white border-2 border-orange-200 rounded-3xl p-10 shadow-2xl relative">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-1 rounded-full text-sm font-bold flex items-center gap-2 whitespace-nowrap">
              <Clock className="w-4 h-4" />
              Oferta de Lançamento
            </div>
            
            <p className="text-slate-400 line-through text-xl mb-2">De R$ 97,00</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-2xl text-slate-500 font-medium">Por apenas</span>
              <span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter">R$ 19,90</span>
            </div>
            <p className="text-orange-600 font-bold mb-8 italic">Pagamento único. Acesso imediato.</p>

            <CTAButton href={checkoutUrl}>
              QUERO MEU ACESSO AGORA
            </CTAButton>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-4 text-slate-500 text-sm">
                <div className="flex items-center gap-1">
                  <Lock className="w-4 h-4" />
                  Ambiente Seguro
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  Aprovado por Alunos
                </div>
              </div>
              <img src="https://picsum.photos/seed/cards/300/40" alt="Métodos de Pagamento" className="h-8 grayscale opacity-50" />
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
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Garantia Incondicional de 7 Dias</h3>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Teste o Módulo 1 sem riscos. Se em até 7 dias você sentir que o material não é para você, 
              ou se não aprender nada de novo, basta pedir o reembolso. 
              Nós devolvemos seu dinheiro integralmente, sem perguntas. Risco zero para você.
            </p>
          </div>
        </div>
      </section>

      {/* Decision Section */}
      <section className="py-24 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">Você está a um passo da clareza espiritual...</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left mb-12">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 opacity-60">
              <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                <Clock className="w-5 h-5" /> Opção 1
              </h4>
              <p className="text-slate-600 text-sm">Continuar lendo a Bíblia sem entender os contextos, sentindo que falta algo e permanecendo na insegurança espiritual.</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-orange-200 bg-orange-50 ring-4 ring-orange-50">
              <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                <ChevronRight className="w-5 h-5" /> Opção 2
              </h4>
              <p className="text-slate-800 text-sm font-medium">Investir R$ 19,90 para dominar um método que vai transformar sua leitura bíblica para o resto da sua vida.</p>
            </div>
          </div>

          <p className="text-xl text-slate-700 mb-10 italic">"Qual dessas escolhas te aproxima mais da vontade de Deus hoje?"</p>

          <CTAButton subtext="Aproveite o preço promocional de lançamento" href={checkoutUrl}>
            Escolho a Opção 2!
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-slate-100 text-slate-400 text-sm text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 opacity-50">
            <BookOpen className="w-5 h-5" />
            <span className="font-bold">Escola Pequenos na Fé</span>
          </div>
          <p>© 2024 Escola Bíblica Online Pequenos na Fé. Todos os direitos reservados.</p>
          <p className="max-w-2xl text-[10px] leading-tight opacity-40">
            AVISO LEGAL: Os resultados podem variar de pessoa para pessoa. Este material tem fins educacionais e de auxílio espiritual. Este site não tem vínculo com o Facebook Inc. ou Meta Inc.
          </p>
        </div>
      </footer>
    </div>
  );
}
