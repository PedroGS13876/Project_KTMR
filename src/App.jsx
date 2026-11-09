import React, { useState } from 'react';
import { 
  Building2, Layers, Image as ImageIcon, Leaf, Phone, Menu, X, 
  CheckCircle, ArrowRight, Star, ChevronRight, Mail, 
  Send, Sparkles, ShieldCheck, Clock, Award, Check, Target, Compass, Users
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

  const projects = [
    { id: 1, title: 'Stand Corporativo TechExpo', category: 'Montados', size: '72m²', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80', description: 'Design personalizado com acabamento em madeira nobre e iluminação em LED embutida.' },
    { id: 2, title: 'Ambiente Sustentável EcoMarket', category: 'Especiais', size: '120m²', image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80', description: 'Estrutura modular reutilizável com vegetação natural e painéis de baixo impacto ambiental.' },
    { id: 3, title: 'Espaço Instagramável Glow Experience', category: 'Instagramáveis', size: '25m²', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80', description: 'Cenografia imersiva com neon, túnel de luzes e pontos focais para engajamento em redes sociais.' },
    { id: 4, title: 'Stand Modular Simples & Prático', category: 'Básicos', size: '18m²', image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80', description: 'Solução funcional com excelente aproveitamento de espaço e alta visibilidade de marca.' },
    { id: 5, title: 'Arena de Palestras & Plenária', category: 'Especiais', size: '200m²', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80', description: 'Montagem completa de palco, isolamento acústico, painéis de LED gigantes e mobiliário executivo.' },
    { id: 6, title: 'Lounge VIP Automotivo', category: 'Montados', size: '90m²', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', description: 'Ambiente sofisticado com piso elevado, vidro temperado e acabamento premium.' }
  ];

  const categoriesList = [
    { title: 'Stands Básicos', desc: 'Simplicidade, praticidade e excelente aproveitamento de espaço.', icon: Layers, image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', points: ['Praticidade e funcionalidade', 'Excelente aproveitamento', 'Soluções versáteis'] },
    { title: 'Stands Montados', desc: 'Design personalizado e acabamentos de alto padrão para valorizar sua marca.', icon: Building2, image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', points: ['Design personalizado', 'Acabamentos de alto padrão', 'Valorização da marca'] },
    { title: 'Projetos Especiais', desc: 'Ideias exclusivas que se tornam realidade para marcas que buscam inovação.', icon: Sparkles, image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80', points: ['Soluções únicas', 'Ideias sob medida', 'Inovação total'] },
    { title: 'Espaços Instagramáveis', desc: 'Ambientes criativos e interativos projetados para gerar engajamento e alcance.', icon: ImageIcon, image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80', points: ['Experiências interativas', 'Geração de engajamento', 'Cenografia criativa'] }
  ];

  const sendWhatsAppBudget = (e) => {
    e.preventDefault();
    const phone = "554599224000";
    const text = `Olá! Vim pelo site e gostaria de um orçamento:\n- Tipo: ${budgetData.tipo}\n- Tamanho: ${budgetData.tamanho}\n- Prazo: ${budgetData.prazo}\n- Nome: ${budgetData.nome}\n- Empresa: ${budgetData.empresa}`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAFB] text-slate-800 font-sans selection:bg-[#76993D] selection:text-white">
      
      {/* HEADER / NAVEGAÇÃO */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGO UNIFICADA KTMR */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tighter text-[#76993D]">K</span>
              <span className="text-2xl font-black tracking-tight text-slate-900">TMR</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {['home', 'quemsomos', 'categorias', 'galeria', 'sustentabilidade', 'contato'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize transition-colors hover:text-[#76993D] ${activeTab === tab ? 'text-[#76993D] font-bold border-b-2 border-[#76993D] pb-1' : ''}`}
              >
                {tab === 'quemsomos' ? 'Quem Somos' : tab === 'galeria' ? 'Galeria De Projetos' : tab}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button 
              onClick={() => setActiveTab('contato')}
              className="bg-[#76993D] hover:bg-[#628A4C] text-white font-bold px-5 py-2.5 rounded-lg transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Solicitar Orçamento
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-slate-700 hover:text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            {['home', 'quemsomos', 'categorias', 'galeria', 'sustentabilidade', 'contato'].map((tab) => (
              <button
                key={tab}
                onClick={() => { setActiveTab(tab); setMobileMenuOpen(false); }}
                className={`block w-full text-left py-2 px-3 rounded-md capitalize font-medium ${activeTab === tab ? 'bg-[#76993D]/10 text-[#76993D]' : 'text-slate-700 hover:bg-slate-50'}`}
              >
                {tab === 'quemsomos' ? 'Quem Somos' : tab === 'galeria' ? 'Galeria De Projetos' : tab}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* CONTEÚDO DINÂMICO DAS PÁGINAS */}
      <main className="flex-grow">
        
        {/* 1. HOME */}
        {activeTab === 'home' && (
          <div>
            {/* Hero Section sem imagem de fundo (fundo limpo) */}
            <section className="relative min-h-[75vh] flex items-center justify-center px-4 py-20">
              <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#76993D]/10 border border-[#76993D]/30 text-xs font-semibold text-[#76993D] shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> Transformando eventos em grandes experiências
                </div>
                <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-tight">
                  Do planejamento à montagem, criamos espaços que <span className="text-[#76993D]">conectam marcas e pessoas.</span>
                </h1>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-light">
                  Soluções completas em montagem de stands e ambientes para feiras, congressos e eventos corporativos, unindo criatividade, estrutura e eficiência.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <button onClick={() => setActiveTab('galeria')} className="w-full sm:w-auto bg-[#76993D] hover:bg-[#628A4C] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2">
                    Ver Projetos <ArrowRight className="w-5 h-5" />
                  </button>
                  <button onClick={() => setActiveTab('contato')} className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-3.5 rounded-xl border border-slate-300 transition-all shadow-sm">
                    Falar com Atendimento
                  </button>
                </div>
              </div>
            </section>

            {/* Diferenciais */}
            <section className="py-20 bg-white border-y border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-slate-200 hover:border-[#76993D] transition-all shadow-sm">
                  <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Comprometimento com Prazos</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Rigor absoluto no cronograma para que seu evento aconteça exatamente como planejado.</p>
                </div>
                <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-slate-200 hover:border-[#76993D] transition-all shadow-sm">
                  <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Agilidade em Cada Etapa</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Processos bem definidos e suporte dinâmico em todas as fases do projeto.</p>
                </div>
                <div className="bg-[#F9FAFB] p-8 rounded-2xl border border-slate-200 hover:border-[#76993D] transition-all shadow-sm">
                  <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Acabamento que Impressiona</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">Padrão estético elevado para destacar a sua marca e atrair o público ideal.</p>
                </div>
              </div>
            </section>

            {/* Depoimentos de Clientes */}
            <section className="py-20 bg-[#F9FAFB]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Depoimentos de Clientes</h2>
                  <p className="text-slate-600">O reconhecimento de quem confia na nossa entrega e profissionalismo.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                    <div className="flex text-[#76993D] mb-4 gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-700 italic mb-6">"A montagem do stand superou todas as expectativas. Pontualidade impecável e um acabamento de primeiríssima linha que chamou atenção na feira inteira."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#76993D]/15 flex items-center font-bold text-[#76993D] justify-center">MC</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Marcos C.</h4>
                        <span className="text-xs text-slate-500">Diretor de Marketing, TechCorp</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                    <div className="flex text-[#76993D] mb-4 gap-1">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-slate-700 italic mb-6">"Trabalhar com a KTMR nos deu total segurança. Desde o projeto 3D até a entrega final no pavilhão, a equipe demonstrou extrema competência."</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#76993D]/15 flex items-center font-bold text-[#76993D] justify-center">RA</div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Renata A.</h4>
                        <span className="text-xs text-slate-500">Gerente de Eventos, InovaExpo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* 2. QUEM SOMOS */}
        {activeTab === 'quemsomos' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#76993D]/10 text-[#76993D] font-bold tracking-wider text-xs uppercase">Quem Somos</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Especialistas em soluções para eventos.</h2>
                <p className="text-slate-600 leading-relaxed font-light text-lg">
                  A KTMR é uma empresa especializada na montagem de stands e ambientes para feiras, congressos e eventos corporativos, unindo criatividade, estrutura e eficiência.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Nosso compromisso é transformar a presença da sua marca em uma experiência memorável. Contamos com infraestrutura própria e profissionais altamente capacitados para gerenciar cada etapa do seu projeto com excelência.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#76993D] transition-all">
                    <h3 className="text-2xl font-black text-[#76993D] mb-1">Equipe</h3>
                    <p className="text-xs text-slate-500">Experiente e qualificada</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#76993D] transition-all">
                    <h3 className="text-2xl font-black text-[#76993D] mb-1">Processos</h3>
                    <p className="text-xs text-slate-500">Bem definidos</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center shadow-sm hover:border-[#76993D] transition-all">
                    <h3 className="text-2xl font-black text-[#76993D] mb-1">Soluções</h3>
                    <p className="text-xs text-slate-500">Sob medida para cada projeto</p>
                  </div>
                </div>
              </div>
              <div className="relative space-y-4">
                <img src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80" alt="Equipe KTMR" className="rounded-2xl shadow-xl border border-slate-200" />
              </div>
            </div>

            {/* Missão, Visão e Valores */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#76993D]"></div>
                <Target className="w-8 h-8 text-[#76993D] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nossa Missão</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Entregar estruturas de alto padrão que valorizem a identidade de cada cliente, garantindo segurança, pontualidade e destaque em feiras e congressos.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#76993D]"></div>
                <Compass className="w-8 h-8 text-[#76993D] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nossa Visão</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Ser referência nacional em montagem de cenografia e stands corporativos, reconhecida pela inovação nos projetos e excelência operacional.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-[#76993D]"></div>
                <Users className="w-8 h-8 text-[#76993D] mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Nossos Valores</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Comprometimento absoluto com prazos, transparência com parceiros, acabamento impecável e foco total no sucesso do cliente.</p>
              </div>
            </div>
          </div>
        )}

        {/* 3. CATEGORIAS */}
        {activeTab === 'categorias' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#76993D]/10 text-[#76993D] font-bold text-xs uppercase">Nossas Categorias</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Diversos formatos para o seu objetivo.</h2>
              <p className="text-slate-600">Do conceito à montagem, oferecemos soluções completas para cada necessidade do seu evento.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {categoriesList.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#76993D] transition-all shadow-sm flex flex-col sm:flex-row">
                  <div className="sm:w-1/2 h-64 sm:h-auto relative">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="sm:w-1/2 p-8 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{cat.desc}</p>
                      <ul className="space-y-2">
                        {cat.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2 text-xs text-slate-700">
                            <Check className="w-3.5 h-3.5 text-[#76993D]" /> {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <button onClick={() => setActiveTab('contato')} className="inline-flex items-center gap-2 text-[#76993D] font-bold text-sm hover:underline">
                      Solicitar Orçamento <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. GALERIA DE PROJETOS */}
        {activeTab === 'galeria' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#76993D]/10 text-[#76993D] font-bold text-xs uppercase">Cases de Sucesso</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Resultados que falam por si.</h2>
              <p className="text-slate-600">Projetos que unem design, funcionalidade e acabamento para fortalecer marcas e gerar experiências memoráveis.</p>
            </div>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-2">
              {['todos', 'Montados', 'Especiais', 'Instagramáveis', 'Básicos'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium capitalize transition-all ${filterCategory === cat ? 'bg-[#76993D] text-white font-bold shadow-sm' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid de Projetos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter(p => filterCategory === 'todos' || p.category === filterCategory).map((proj) => (
                <div key={proj.id} onClick={() => setSelectedProject(proj)} className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-[#76993D] transition-all cursor-pointer group shadow-sm">
                  <div className="h-60 overflow-hidden relative">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-xs font-semibold text-white">
                      {proj.size}
                    </span>
                  </div>
                  <div className="p-6 space-y-2">
                    <span className="text-xs text-[#76993D] font-bold uppercase">{proj.category}</span>
                    <h3 className="text-xl font-bold text-slate-900">{proj.title}</h3>
                    <p className="text-slate-600 text-sm line-clamp-2">{proj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. SUSTENTABILIDADE */}
        {activeTab === 'sustentabilidade' && (
          <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="inline-block px-3 py-1 rounded-full bg-[#76993D]/10 text-[#76993D] font-bold text-xs uppercase">Sustentabilidade</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Responsabilidade e Inovação Ecológica</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Na KTMR, buscamos integrar práticas sustentáveis em nossos processos de montagem, otimizando o uso de materiais e reduzindo o impacto ambiental em cada evento corporativo.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#76993D] transition-all">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#76993D]"></div>
                <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Materiais Reutilizáveis</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Estruturas modulares pensadas para múltiplos ciclos de utilização, diminuindo drasticamente o descarte de resíduos no pós-evento.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#76993D] transition-all">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#76993D]"></div>
                <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Eficiência Energética</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Uso intensivo de iluminação em LED e sistemas otimizados de distribuição elétrica para garantir menor consumo de energia nos pavilhões.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#76993D] transition-all">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-[#76993D]"></div>
                <div className="w-12 h-12 bg-[#76993D]/15 rounded-xl flex items-center justify-center text-[#76993D] mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Gestão de Resíduos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Destinação correta e reciclagem de sobras de marcenaria, tintas e materiais recicláveis em parceria com empresas e órgãos especializados.</p>
              </div>
            </div>

            {/* Bloco de destaque verde na sustentabilidade */}
            <div className="bg-[#76993D]/10 border border-[#76993D]/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <span className="text-[#76993D] font-bold text-xs uppercase tracking-wider">Compromisso Verde</span>
                <h3 className="text-2xl font-bold text-slate-900">Eventos sustentáveis geram mais valor para sua marca.</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Associar sua empresa a práticas eco-friendly durante feiras e feirões transmite modernidade, responsabilidade social e consciência ambiental ao seu público.</p>
              </div>
              <button onClick={() => setActiveTab('contato')} className="whitespace-nowrap bg-[#76993D] hover:bg-[#628A4C] text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md">
                Montar Stand Sustentável
              </button>
            </div>
          </div>
        )}

        {/* 6. CONTATO & SIMULADOR */}
        {activeTab === 'contato' && (
          <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-lg">
              <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-[#76993D]/10 text-[#76993D] font-bold text-xs uppercase">Atendimento Personalizado</span>
                <h2 className="text-3xl font-extrabold text-slate-900">Faça seu Projeto com a KTMR</h2>
                <p className="text-slate-600">Vamos transformar o seu evento em uma grande conexão? Preencha os dados abaixo e fale conosco.</p>
              </div>

              <form onSubmit={sendWhatsAppBudget} className="space-y-8">
                {budgetStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#76993D]">1. Qual o tipo de solução você procura?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['Stands Montados', 'Stands Básicos', 'Projetos Especiais', 'Espaços Instagramáveis'].map((tipo) => (
                        <button
                          type="button"
                          key={tipo}
                          onClick={() => setBudgetData({ ...budgetData, tipo })}
                          className={`p-4 rounded-xl border text-left font-medium transition-all ${budgetData.tipo === tipo ? 'bg-[#76993D] text-white border-[#76993D] font-bold shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'}`}
                        >
                          {tipo}
                        </button>
                      ))}
                    </div>
                    <button type="button" onClick={() => setBudgetStep(2)} className="w-full bg-[#76993D] hover:bg-[#628A4C] text-white font-bold py-3 rounded-xl transition-all shadow-md">
                      Avançar
                    </button>
                  </div>
                )}

                {budgetStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#76993D]">2. Qual o tamanho aproximado do espaço?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {['Até 36m²', 'De 36m² a 100m²', 'Acima de 100m²'].map((tamanho) => (
                        <button
                          type="button"
                          key={tamanho}
                          onClick={() => setBudgetData({ ...budgetData, tamanho })}
                          className={`p-4 rounded-xl border text-center font-medium transition-all ${budgetData.tamanho === tamanho ? 'bg-[#76993D] text-white border-[#76993D] font-bold shadow-sm' : 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'}`}
                        >
                          {tamanho}
                        </button>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setBudgetStep(1)} className="w-1/2 bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl hover:bg-slate-300">Voltar</button>
                      <button type="button" onClick={() => setBudgetStep(3)} className="w-1/2 bg-[#76993D] hover:bg-[#628A4C] text-white font-bold py-3 rounded-xl shadow-md">Avançar</button>
                    </div>
                  </div>
                )}

                {budgetStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#76993D]">3. Seus dados para contato</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-slate-600 mb-2">Seu Nome</label>
                        <input
                          type="text"
                          required
                          value={budgetData.nome}
                          onChange={(e) => setBudgetData({ ...budgetData, nome: e.target.value })}
                          placeholder="Digite seu nome"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#76993D]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-slate-600 mb-2">Nome da Empresa</label>
                        <input
                          type="text"
                          required
                          value={budgetData.empresa}
                          onChange={(e) => setBudgetData({ ...budgetData, empresa: e.target.value })}
                          placeholder="Digite sua empresa"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-[#76993D]"
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={() => setBudgetStep(2)} className="w-1/2 bg-slate-200 text-slate-800 font-semibold py-3 rounded-xl hover:bg-slate-300">Voltar</button>
                      <button type="submit" className="w-1/2 bg-[#76993D] hover:bg-[#628A4C] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg">
                        <Send className="w-5 h-5" /> Enviar para o WhatsApp
                      </button>
                    </div>
                  </div>
                )}
              </form>

              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-slate-600 text-sm gap-4">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#76993D]" /> Atendimento: (45) 9922-4000
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#76993D]" /> Orçamento sem compromisso
                </div>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FOOTER FIXADO E UNIFORME */}
      <footer className="bg-white border-t border-slate-200 py-10 w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-slate-500 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-xl font-black tracking-tighter text-[#76993D]">K</span>
              <span className="text-xl font-black tracking-tight text-slate-900">TMR</span>
            </div>
            <span className="ml-2">© 2026 Todos os direitos reservados.</span>
          </div>
          <p>Transformando eventos em grandes experiências.</p>
        </div>
      </footer>

      {/* MODAL DE PROJETOS */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full overflow-hidden relative shadow-2xl">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-slate-900/60 hover:bg-slate-900 text-white p-2 rounded-full z-10 transition-all">
              <X className="w-5 h-5" />
            </button>
            <div className="h-72 overflow-hidden relative">
              <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-[#76993D] font-bold">{selectedProject.category}</span>
                <span className="bg-slate-100 px-3 py-1 rounded-md text-xs font-bold text-slate-800 border border-slate-200">{selectedProject.size}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
              <p className="text-slate-600 leading-relaxed">{selectedProject.description}</p>
              <div className="pt-4">
                <button onClick={() => { setSelectedProject(null); setActiveTab('contato'); }} className="w-full bg-[#76993D] hover:bg-[#628A4C] text-white font-bold py-3.5 rounded-xl transition-all shadow-md">
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