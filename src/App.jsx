import React, { useState } from 'react';
import { 
  Building2, Layers, Image as ImageIcon, Leaf, Phone, Menu, X, 
  CheckCircle, ArrowRight, Star, ChevronRight, Send, Sparkles, 
  ShieldCheck, Clock, Award, Check, Target, Compass, Users, ArrowDown,
  Recycle, Zap, Truck, TreePine, MessageCircle
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [filterCategory, setFilterCategory] = useState('todos');

  // Estado para o simulador de orçamento
  const [budgetStep, setBudgetStep] = useState(1);
  const [budgetData, setBudgetData] = useState({
    tipo: 'Stands Montados',
    tamanho: 'Até 36m²',
    prazo: 'Próximos 3 meses',
    nome: '',
    empresa: '',
    whatsapp: ''
  });

  const categoryImages = {
    basicos: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    montados: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    especiais: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    instagramaveis: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
  };

  const projects = [
    { id: 1, title: 'Stand Corporativo TechExpo', category: 'Montados', size: '72m²', image: categoryImages.montados, description: 'Design personalizado com acabamento em madeira nobre e iluminação em LED embutida.' },
    { id: 2, title: 'Ambiente Sustentável EcoMarket', category: 'Especiais', size: '120m²', image: categoryImages.especiais, description: 'Estrutura modular reutilizável com vegetação natural e painéis de baixo impacto ambiental.' },
    { id: 3, title: 'Espaço Instagramável Glow Experience', category: 'Instagramáveis', size: '25m²', image: categoryImages.instagramaveis, description: 'Cenografia imersiva com neon, túnel de luzes e pontos focais para engajamento em redes sociais.' },
    { id: 4, title: 'Stand Modular Simples & Prático', category: 'Básicos', size: '18m²', image: categoryImages.basicos, description: 'Solução funcional com excelente aproveitamento de espaço e alta visibilidade de marca.' }
  ];

  const categoriesList = [
    { id: 'Básicos', title: 'Stands Básicos', desc: 'Simplicidade Eficaz', image: categoryImages.basicos },
    { id: 'Montados', title: 'Stands Montados', desc: 'Impacto Visual', image: categoryImages.montados },
    { id: 'Especiais', title: 'Projetos Especiais', desc: 'Criatividade Ilimitada', image: categoryImages.especiais },
    { id: 'Instagramáveis', title: 'Espaços Instagramáveis', desc: 'Engajamento Digital', image: categoryImages.instagramaveis }
  ];

  const sendWhatsAppBudget = (e) => {
    e.preventDefault();
    const phone = "554599224000";
    const text = `Olá! Vim pelo site e gostaria de um orçamento:\n- Tipo: ${budgetData.tipo}\n- Tamanho: ${budgetData.tamanho}\n- Prazo: ${budgetData.prazo}\n- Nome: ${budgetData.nome}\n- Empresa: ${budgetData.empresa}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F0D] text-white font-sans selection:bg-[#39FF14] selection:text-black overflow-x-hidden relative">
      
      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a 
        href="https://wa.me/554599224000?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20stands%20da%20KTMR." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all transform hover:scale-110 flex items-center justify-center"
        title="Fale conosco no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>

      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-40 bg-[#0B0F0D]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => setActiveTab('home')}>
            <span className="text-3xl font-black tracking-tighter text-[#39FF14]">K</span>
            <span className="text-3xl font-black tracking-tight text-white">TMR</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
            {['home', 'quemsomos', 'categorias', 'galeria', 'sustentabilidade', 'contato'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition-colors hover:text-[#39FF14] ${activeTab === tab ? 'text-[#39FF14] font-bold border-b-2 border-[#39FF14] pb-1' : ''}`}
              >
                {tab === 'quemsomos' ? 'Quem Somos' : tab === 'galeria' ? 'Galeria De Projetos' : tab}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => setActiveTab('contato')}
              className="bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold px-6 py-2.5 rounded-full transition-all shadow-[0_0_15px_rgba(57,255,20,0.4)] flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4" /> Solicitar Orçamento
            </button>
          </div>

          <button className="md:hidden text-white hover:text-[#39FF14]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B0F0D] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
            {['home', 'quemsomos', 'categorias', 'galeria', 'sustentabilidade', 'contato'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                className={`block w-full text-left py-2 px-3 rounded-md capitalize font-medium ${activeTab === tab ? 'bg-white/10 text-[#39FF14]' : 'text-white/80 hover:bg-white/5'}`}
              >
                {tab === 'quemsomos' ? 'Quem Somos' : tab === 'galeria' ? 'Galeria De Projetos' : tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* CONTEÚDO DINÂMICO */}
      <main className="flex-grow">
        
        {activeTab === 'home' && (
          <div>
            <section 
              className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 py-20 bg-cover bg-center overflow-hidden border-b border-white/10"
              style={{ 
                backgroundImage: `linear-gradient(to right, rgba(11, 15, 13, 0.95), rgba(6, 64, 43, 0.75)), url('${categoryImages.montados}')` 
              }}
            >
              <div className="absolute top-10 left-10 w-96 h-96 bg-[#39FF14]/15 rounded-full blur-[140px] pointer-events-none"></div>
              <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#06402B] rounded-full blur-[100px] pointer-events-none"></div>

              <div className="max-w-4xl mx-auto text-left sm:text-center space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#39FF14]/30 text-xs font-semibold text-[#39FF14] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Cenografia e Estrutura de Alto Padrão
                </div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
                  <span className="text-[#39FF14]">KTMR:</span> Transformando Eventos em Grandes Experiências.<br />
                  <span className="text-white/90">Do Planejamento à Montagem, Criamos Conexões e Impacto.</span>
                </h1>
                <p className="text-lg text-white/70 max-w-2xl mx-auto font-light">
                  Estruturas completas para feiras e congressos, unindo design inovador, pontualidade e acabamentos impecáveis.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => setActiveTab('contato')} className="w-full sm:w-auto bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] flex items-center justify-center gap-2 text-base">
                    Solicitar Orçamento <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveTab('galeria')} className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-full border border-white/20 transition-all">
                    Ver Galeria de Projetos
                  </button>
                </div>
              </div>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="w-6 h-6 text-[#39FF14]" />
              </div>
            </section>

            <section className="py-20 bg-[#0B0F0D] relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
                <div>
                  <span className="text-[#39FF14] font-bold text-xs uppercase tracking-widest">Modelos Disponíveis</span>
                  <h2 className="text-3xl font-extrabold text-white">As Nossas Categorias</h2>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoriesList.map((cat, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveTab('categorias')}
                      className="group bg-[#121A15] rounded-2xl overflow-hidden border border-white/10 hover:border-[#39FF14] transition-all cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.25)] relative"
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#121A15] via-transparent to-transparent"></div>
                      </div>
                      <div className="p-5 space-y-2">
                        <h3 className="text-lg font-bold text-white group-hover:text-[#39FF14] transition-colors">{cat.title}</h3>
                        <p className="text-xs text-white/60">{cat.desc}</p>
                        <div className="pt-2 flex items-center text-[#39FF14] text-xs font-bold gap-1 group-hover:translate-x-1 transition-transform">
                          Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-20 bg-[#07140E] border-t border-white/10 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <span className="text-[#39FF14] font-bold text-xs uppercase tracking-widest">Portfólio em Destaque</span>
                <h2 className="text-3xl font-extrabold text-white">Cases de Sucesso</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="bg-[#121A15] rounded-3xl p-4 border border-white/10 shadow-2xl relative overflow-hidden group">
                    <img src={categoryImages.especiais} alt="Ambiente Sustentável" className="rounded-2xl w-full h-80 object-cover border border-white/10 group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="space-y-6">
                    <h3 className="text-3xl font-extrabold text-white">AMBIENTE SUSTENTÁVEL</h3>
                    <p className="text-white/80 text-base leading-relaxed">Design funcional com acabamento premium e sustentabilidade aplicada. Projeto desenvolvido para feiras corporativas de grande escala com foco em reaproveitamento total.</p>
                    <button 
                      onClick={() => setActiveTab('galeria')}
                      className="bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold px-8 py-3 rounded-full transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] inline-flex items-center gap-2 text-sm"
                    >
                      VER PROJETO <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'quemsomos' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] font-bold tracking-wider text-xs uppercase">Quem Somos</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Especialistas em soluções para eventos.</h2>
                <p className="text-white/80 leading-relaxed font-light text-lg">
                  A KTMR é uma empresa especializada na montagem de stands e ambientes para feiras, congressos e eventos corporativos, unindo criatividade, estrutura e eficiência.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Gerenciamos cada etapa da montagem com equipe especializada, garantindo entrega pontual e padrão estético indiscutível.
                </p>
              </div>
              <div>
                <img src={categoryImages.especiais} alt="Equipe KTMR" className="rounded-2xl shadow-xl border border-white/10" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
              <div className="bg-[#121A15] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#39FF14]"></div>
                <Target className="w-8 h-8 text-[#39FF14] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Nossa Missão</h3>
                <p className="text-white/70 text-sm leading-relaxed">Entregar estruturas de alto padrão que valorizem a identidade de cada cliente, garantindo segurança e pontualidade.</p>
              </div>
              <div className="bg-[#121A15] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#39FF14]"></div>
                <Compass className="w-8 h-8 text-[#39FF14] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Nossa Visão</h3>
                <p className="text-white/70 text-sm leading-relaxed">Ser referência em montagem de cenografia e stands corporativos, reconhecida pela inovação e excelência.</p>
              </div>
              <div className="bg-[#121A15] p-8 rounded-2xl border border-white/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#39FF14]"></div>
                <Users className="w-8 h-8 text-[#39FF14] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Nossos Valores</h3>
                <p className="text-white/70 text-sm leading-relaxed">Comprometimento absoluto com prazos, transparência e acabamento impecável.</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'categorias' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] font-bold text-xs uppercase">Nossas Categorias</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Diversos formatos para o seu objetivo.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoriesList.map((cat, idx) => (
                <div key={idx} className="bg-[#121A15] rounded-2xl overflow-hidden border border-white/10 hover:border-[#39FF14] transition-all shadow-sm flex flex-col sm:flex-row">
                  <div className="sm:w-1/2 h-64 sm:h-auto relative">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="sm:w-1/2 p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4">{cat.desc}</p>
                    </div>
                    <button onClick={() => setActiveTab('contato')} className="inline-flex items-center gap-2 text-[#39FF14] font-bold text-sm hover:underline">
                      Solicitar Orçamento <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'galeria' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] font-bold text-xs uppercase">Cases de Sucesso</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Resultados que falam por si.</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((proj) => (
                <div key={proj.id} onClick={() => setSelectedProject(proj)} className="bg-[#121A15] rounded-2xl overflow-hidden border border-white/10 hover:border-[#39FF14] transition-all cursor-pointer group shadow-sm">
                  <div className="h-60 overflow-hidden relative">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-xs text-[#39FF14] font-bold uppercase">{proj.category}</span>
                    <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                    <p className="text-white/70 text-sm line-clamp-2">{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sustentabilidade' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] font-bold text-xs uppercase">Sustentabilidade & Inovação</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Compromisso com o Futuro: Estruturas Eco-Conscientes</h2>
              <p className="text-white/80 leading-relaxed text-lg">
                Na KTMR, reduzimos a pegada de carbono em feiras e pavilhões através de processos inteligentes de engenharia modular, economia circular e descarte responsável.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#121A15] p-6 rounded-2xl border border-white/10 hover:border-[#39FF14] transition-all relative overflow-hidden group">
                <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center text-[#39FF14] mb-4">
                  <Recycle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Estruturas Modulares</h3>
                <p className="text-white/70 text-xs leading-relaxed">Sistemas reaproveitáveis de alumínio e marcenaria inteligente projetados para múltiplos eventos.</p>
              </div>

              <div className="bg-[#121A15] p-6 rounded-2xl border border-white/10 hover:border-[#39FF14] transition-all relative overflow-hidden group">
                <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center text-[#39FF14] mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Iluminação EcoLED</h3>
                <p className="text-white/70 text-xs leading-relaxed">100% dos projetos utilizam iluminação LED de alta eficiência energética, reduzindo o consumo.</p>
              </div>

              <div className="bg-[#121A15] p-6 rounded-2xl border border-white/10 hover:border-[#39FF14] transition-all relative overflow-hidden group">
                <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center text-[#39FF14] mb-4">
                  <TreePine className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Madeira Certificada</h3>
                <p className="text-white/70 text-xs leading-relaxed">Madeiras e painéis oriundos exclusivamente de áreas de reflorestamento sustentável.</p>
              </div>

              <div className="bg-[#121A15] p-6 rounded-2xl border border-white/10 hover:border-[#39FF14] transition-all relative overflow-hidden group">
                <div className="w-12 h-12 bg-[#39FF14]/10 rounded-xl flex items-center justify-center text-[#39FF14] mb-4">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Logística Reversa</h3>
                <p className="text-white/70 text-xs leading-relaxed">Triagem rigorosa pós-desmontagem com destinação correta de sobras e materiais recicláveis.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#06402B] to-[#121A15] border border-[#39FF14]/40 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
              <div className="space-y-4 max-w-2xl z-10">
                <span className="text-[#39FF14] font-bold text-xs uppercase tracking-widest">Sua Marca Com Propósito</span>
                <h3 className="text-2xl font-bold text-white">Quer um stand que transpareça responsabilidade social e ambiental?</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Criamos cenografias verdes com vegetação natural embutida, tintas atóxicas à base de água e mobiliário sustentável que fortalecem o posicionamento ESG da sua empresa.
                </p>
              </div>
              <button 
                onClick={() => setActiveTab('contato')} 
                className="whitespace-nowrap bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(57,255,20,0.4)] z-10 text-sm"
              >
                Planejar Stand Sustentável
              </button>
            </div>
          </div>
        )}

        {activeTab === 'contato' && (
          <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#121A15] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl">
              <div className="text-center max-w-2xl mx-auto mb-8 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/30 text-[#39FF14] font-bold text-xs uppercase">Atendimento Personalizado</span>
                <h2 className="text-3xl font-extrabold text-white">Faça seu Projeto com a KTMR</h2>
                
                {/* INDICADOR DE ETAPAS (AS BOLINHAS INTERLIGADAS) RESTAURADO */}
                <div className="flex items-center justify-center gap-3 pt-4">
                  <div className={`w-3.5 h-3.5 rounded-full transition-all ${budgetStep >= 1 ? 'bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.6)]' : 'bg-white/20'}`}></div>
                  <div className={`w-12 h-1 rounded transition-all ${budgetStep >= 2 ? 'bg-[#39FF14]' : 'bg-white/20'}`}></div>
                  <div className={`w-3.5 h-3.5 rounded-full transition-all ${budgetStep >= 2 ? 'bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.6)]' : 'bg-white/20'}`}></div>
                  <div className={`w-12 h-1 rounded transition-all ${budgetStep >= 3 ? 'bg-[#39FF14]' : 'bg-white/20'}`}></div>
                  <div className={`w-3.5 h-3.5 rounded-full transition-all ${budgetStep >= 3 ? 'bg-[#39FF14] shadow-[0_0_10px_rgba(57,255,20,0.6)]' : 'bg-white/20'}`}></div>
                </div>

              </div>

              <form onSubmit={sendWhatsAppBudget} className="space-y-8">
                {budgetStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#39FF14]">1. Qual o tipo de solução você procura?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Stands Montados', 'Stands Básicos', 'Projetos Especiais', 'Espaços Instagramáveis'].map((tipo) => (
                        <button
                          type="button"
                          key={tipo}
                          onClick={() => setBudgetData({ ...budgetData, tipo })}
                          className={`p-4 rounded-xl border text-left font-medium transition-all ${budgetData.tipo === tipo ? 'bg-[#39FF14] text-black border-[#39FF14] font-bold shadow-sm' : 'bg-[#0B0F0D] border-white/10 text-white hover:border-[#39FF14]/50'}`}
                        >
                          {tipo}
                        </button>
                      ))}
                    </div>
                    <button type="button" onClick={() => setBudgetStep(2)} className="w-full bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold py-3 rounded-full transition-all shadow-md">
                      Avançar
                    </button>
                  </div>
                )}

                {budgetStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#39FF14]">2. Qual o tamanho aproximado do espaço?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Até 36m²', 'De 36m² a 100m²', 'Acima de 100m²'].map((tamanho) => (
                        <button
                          type="button"
                          key={tamanho}
                          onClick={() => setBudgetData({ ...budgetData, tamanho })}
                          className={`p-4 rounded-xl border text-center font-medium transition-all ${budgetData.tamanho === tamanho ? 'bg-[#39FF14] text-black border-[#39FF14] font-bold shadow-sm' : 'bg-[#0B0F0D] border-white/10 text-white hover:border-[#39FF14]/50'}`}
                        >
                          {tamanho}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setBudgetStep(1)} className="w-1/2 bg-white/10 text-white font-semibold py-3 rounded-full hover:bg-white/20">Voltar</button>
                      <button type="button" onClick={() => setBudgetStep(3)} className="w-1/2 bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold py-3 rounded-full shadow-md">Avançar</button>
                    </div>
                  </div>
                )}

                {budgetStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#39FF14]">3. Seus dados para contato</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-white/80 mb-2">Seu Nome</label>
                        <input
                          type="text"
                          required
                          value={budgetData.nome}
                          onChange={(e) => setBudgetData({ ...budgetData, nome: e.target.value })}
                          placeholder="Digite seu nome"
                          className="w-full bg-[#0B0F0D] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#39FF14]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/80 mb-2">Nome da Empresa</label>
                        <input
                          type="text"
                          required
                          value={budgetData.empresa}
                          onChange={(e) => setBudgetData({ ...budgetData, empresa: e.target.value })}
                          placeholder="Digite sua empresa"
                          className="w-full bg-[#0B0F0D] border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[#39FF14]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={() => setBudgetStep(2)} className="w-1/2 bg-white/10 text-white font-semibold py-3 rounded-full hover:bg-white/20">Voltar</button>
                      <button type="submit" className="w-1/2 bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg">
                        <Send className="w-5 h-5" /> Enviar para o WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER COM TELEFONE E INSTAGRAM */}
      <footer className="bg-[#050806] border-t border-white/10 py-12 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-sm">
          
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-[#39FF14]">K</span>
            <span className="text-2xl font-black text-white">TMR</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/70">
            <a 
              href="https://wa.me/554599224000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#39FF14] transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-[#39FF14]" /> (45) 9922-4000
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#39FF14] transition-colors font-medium"
            >
              <svg className="w-4 h-4 text-[#39FF14] fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg> Instagram
            </a>
          </div>

          <div className="text-right text-white/50 text-xs md:text-sm">
            <p>© 2026 KTMR. Todos os direitos reservados.</p>
          </div>

        </div>
      </footer>

      {/* MODAL DE PROJETOS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#121A15] border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full z-10 transition-all">
              <X className="w-5 h-5" />
            </button>
            <div className="h-72 overflow-hidden relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#39FF14] font-bold">{selectedProject.category}</span>
                <span className="bg-white/10 px-3 py-1 rounded-md text-xs font-bold text-white border border-white/10">{selectedProject.size}</span>
              </div>
              <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
              <p className="text-white/70 leading-relaxed">{selectedProject.description}</p>
              <div className="pt-4">
                <button onClick={() => { setSelectedProject(null); setActiveTab('contato'); }} className="w-full bg-[#39FF14] hover:bg-[#32e011] text-black font-extrabold py-3.5 rounded-full transition-all shadow-md">
                  Solicitar Projeto Semelhante
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}