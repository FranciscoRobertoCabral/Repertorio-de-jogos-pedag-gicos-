
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  Clock, 
  Brain, 
  Gamepad2, 
  Star, 
  ChevronDown, 
  ArrowRight, 
  ShieldCheck, 
  Heart 
} from 'lucide-react';
import { Button } from './components/Button';
import { Feature, Testimonial, FAQ } from './types';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const features: Feature[] = [
    {
      title: "Planejamento Zero",
      description: "Chega de passar horas no Pinterest. Jogos prontos para aplicar em 5 minutos.",
      icon: <Clock className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Foco Pedagógico",
      description: "Cada atividade foi desenhada para estimular a coordenação, o raciocínio e a socialização.",
      icon: <Brain className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Simplicidade Real",
      description: "Use apenas materiais que você já tem na sala de aula ou em casa. Sem custos extras.",
      icon: <Gamepad2 className="w-8 h-8 text-indigo-500" />
    },
    {
      title: "Versatilidade",
      description: "Jogos que funcionam tanto para grupos pequenos quanto para turmas cheias.",
      icon: <CheckCircle className="w-8 h-8 text-indigo-500" />
    }
  ];

  const testimonials: Testimonial[] = [
    {
      name: "Mariana Silva",
      role: "Professora de Educação Infantil",
      content: "Minha rotina mudou completamente. Agora sempre tenho uma carta na manga quando as crianças ficam inquietas.",
      avatar: "https://picsum.photos/100/100?random=1"
    },
    {
      name: "Carla Oliveira",
      role: "Pedagoga e Mãe",
      content: "O melhor investimento do ano. Atividades simples, mas que prendem a atenção de verdade e ensinam brincando.",
      avatar: "https://picsum.photos/100/100?random=2"
    },
    {
      name: "Renata Costa",
      role: "Diretora Escolar",
      content: "Recomendei para todo o meu corpo docente. É prático, direto ao ponto e pedagógico.",
      avatar: "https://picsum.photos/100/100?random=3"
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "Para qual faixa etária os jogos são indicados?",
      answer: "O repertório é focado na Educação Infantil, ideal para crianças de 2 a 6 anos, com variações de dificuldade para cada idade."
    },
    {
      question: "Vou receber material físico em casa?",
      answer: "Não, o acesso é 100% digital. Você recebe os arquivos em PDF para baixar, ler no celular ou imprimir quando quiser."
    },
    {
      question: "Como funciona o acesso?",
      answer: "Imediatamente após a confirmação do pagamento, você recebe um e-mail com o link de acesso vitalício à nossa área de membros."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia incondicional. Se achar que não serve para você, devolvemos 100% do seu dinheiro sem perguntas."
    }
  ];

  const handleCtaClick = () => {
    // In a real scenario, this would redirect to checkout
    console.log("Redirecting to checkout...");
    window.location.href = "#checkout";
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION - DARK BACKGROUND */}
      <section className="bg-slate-900 text-white min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 py-20 lg:py-0">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center z-10">
          <span className="inline-block px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-semibold tracking-wider mb-6 border border-indigo-500/30 uppercase">
            Metodologia Prática para Professores
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8">
            Repertório de jogos educativos simples para o dia a dia do Infantil, <span className="text-orange-500 underline decoration-indigo-500">sem improvisos</span> de última hora.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Elimine o estresse de não saber o que fazer em sala. Tenha em mãos um guia prático com atividades validadas que estimulam o aprendizado e encantam os pequenos.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={handleCtaClick} variant="primary" className="w-full sm:w-auto">
              QUERO MEU REPERTÓRIO AGORA <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
          <p className="mt-6 text-slate-500 text-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-500" /> Acesso imediato e vitalício
          </p>
        </div>
      </section>

      {/* 2. THE PROBLEM - WHITE BACKGROUND */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Você já se sentiu perdida na hora de planejar a aula?
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-red-400">
                <div className="text-red-500 mt-1 font-bold italic text-xl">"</div>
                <p className="text-slate-700 italic">
                  "As crianças estão inquietas, o plano acabou mais cedo e eu não sei o que fazer..."
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                O improviso gera cansaço mental, estresse e, muitas vezes, as crianças acabam não aproveitando o tempo de forma pedagógica.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-slate-50 rounded-2xl border-l-4 border-red-400">
                <div className="text-red-500 mt-1 font-bold italic text-xl">"</div>
                <p className="text-slate-700 italic">
                  "Perco horas no celular buscando ideias que nunca funcionam na prática..."
                </p>
              </div>
              <p className="text-slate-600 leading-relaxed">
                Muitas ideias da internet exigem materiais caros ou preparações complexas que não cabem na realidade de uma sala de aula de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION - ACCENT (SLATE 50) BACKGROUND */}
      <section className="bg-slate-50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img 
                src="https://picsum.photos/600/600?random=10" 
                alt="Jogos educativos" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-indigo-600 rounded-3xl z-0 hidden md:block"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                Apresentamos o <span className="text-indigo-600">Repertório Definitivo</span> de Jogos Educativos
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Desenvolvemos um método focado na <strong>praticidade máxima</strong>. Esqueça as preparações intermináveis. Tenha acesso a um guia estruturado com atividades que geram engajamento imediato.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Mais de 50 jogos validados",
                  "Classificados por faixa etária",
                  "Guia de objetivos pedagógicos",
                  "Dicas de variação para cada jogo",
                  "Materiais de baixo custo"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              
              <Button onClick={handleCtaClick} className="w-full sm:w-auto">
                QUERO O MEU AGORA
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURES GRID - WHITE BACKGROUND */}
      <section className="bg-white py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Feito por quem entende o chão da sala</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Nosso foco é dar a você mais tempo de qualidade com os alunos e menos tempo preocupada com a próxima atividade.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="mb-6 inline-block p-4 bg-indigo-50 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TESTIMONIALS - DARK BACKGROUND */}
      <section className="bg-slate-900 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="flex justify-center gap-1 mb-6 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Milhares de educadores já transformaram suas aulas</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 flex flex-col justify-between">
                <p className="text-slate-300 italic mb-8 text-lg leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full border-2 border-indigo-500" />
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-indigo-400 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING & OFFER - WHITE BACKGROUND */}
      <section id="checkout" className="bg-white py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16 border-2 border-indigo-600 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-8 py-2 font-bold transform rotate-45 translate-x-10 translate-y-6">
              OFERTA LIMITADA
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">OFERTA ESPECIAL</h2>
              <p className="text-slate-500 mb-10 text-lg">Comece hoje mesmo a transformar seu dia a dia.</p>
              
              <div className="flex flex-col gap-6 mb-12 text-left max-w-md mx-auto">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">Repertório de Jogos Educativos</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">BÔNUS: Guia de Brincadeiras Musicais</span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">BÔNUS: Checklist de Materiais Econômicos</span>
                </div>
              </div>
              
              <div className="mb-10">
                <span className="text-slate-400 line-through text-xl">De R$ 97,00</span>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-slate-900 text-2xl font-bold">Por apenas</span>
                  <span className="text-5xl md:text-7xl font-black text-indigo-600">R$ 10,00</span>
                </div>
                <p className="text-slate-500 mt-2 font-medium">À vista no cartão ou Pix</p>
              </div>
              
              <Button onClick={handleCtaClick} className="w-full text-xl py-6 mb-8">
                QUERO COMPRAR AGORA
              </Button>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-2"><ShieldCheck className="text-green-500" /> Pagamento 100% Seguro</span>
                <span className="flex items-center gap-2"><Star className="text-yellow-500" /> Garantia de 7 Dias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GUARANTEE & FAQ - SLATE 50 BACKGROUND */}
      <section className="bg-slate-50 py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-24 bg-white p-10 rounded-3xl shadow-sm">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/3596/3596091.png" 
              alt="Garantia" 
              className="w-32 md:w-48 opacity-80"
            />
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Garantia Blindada de 7 Dias</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Nós confiamos tanto na qualidade do nosso material que te damos 7 dias de teste. Se por qualquer motivo você não se sentir 100% satisfeita, basta nos enviar um e-mail e devolvemos cada centavo. O risco é todo nosso.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">Dúvidas Frequentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h4 className="font-bold text-slate-800 text-lg pr-4">{faq.question}</h4>
                    <ChevronDown className={`text-indigo-600 transition-transform duration-300 ${activeFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  <div className={`px-6 pb-6 text-slate-600 leading-relaxed transition-all duration-300 ${activeFaq === idx ? 'block' : 'hidden'}`}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER - DARK BACKGROUND */}
      <footer className="bg-slate-900 text-slate-400 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-white mb-8">
            <Gamepad2 className="w-8 h-8 text-indigo-500" />
            <span className="text-2xl font-black tracking-tighter">REPERTÓRIO INFANTIL</span>
          </div>
          
          <p className="max-w-md mx-auto mb-10 font-light italic">
            "A criança que brinca é uma criança que aprende a viver."
          </p>
          
          <div className="w-full h-px bg-slate-800 mb-10"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
            <p>&copy; 2024 Repertório Infantil. Todos os direitos reservados.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Contato</a>
            </div>
          </div>
          <p className="mt-8 text-xs text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Este produto não garante resultados milagrosos. O sucesso depende da aplicação prática e do contexto de cada educador. Todas as estratégias apresentadas são baseadas em experiências reais de sala de aula.
          </p>
        </div>
      </footer>
      
      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200 z-50">
        <Button onClick={handleCtaClick} className="w-full py-4 shadow-xl">
          QUERO MEU REPERTÓRIO
        </Button>
      </div>
    </div>
  );
};

export default App;
