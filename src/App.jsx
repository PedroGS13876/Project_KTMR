import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Layers, 
  Maximize2,  
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Send, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Menu, 
  Recycle, 
  Leaf, 
  ShieldCheck, 
  Users, 
  Clock, 
  Briefcase,
  ExternalLink,
  MessageSquare,
  Building2,
  Calendar,
  ThumbsUp
} from 'lucide-react';

// --- DATA STRUCTURES ---

const CATEGORIES = [
  {
    id: 'basicos',
    title: 'Stands Básicos',
    subtitle: 'Simplicidade que faz a diferença',
    description: 'Soluções práticas, funcionais e com excelente aproveitamento de espaço, mantendo a qualidade técnica e elegância para sua marca.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    tags: ['Econômico', 'Montagem Rápida', 'Funcional']
  },
  {
    id: 'montados',
    title: 'Stands Montados',
    subtitle: 'Mais estrutura para grandes resultados',
    description: 'Design personalizado e acabamentos de alto padrão para valorizar a sua marca com imponência e presença visual marcante.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    tags: ['Alto Padrão', 'Personalizado', 'Iluminação LED']
  },
  {
    id: 'especiais',
    title: 'Projetos Especiais',
    subtitle: 'Ideias que se tornam realidade',
    description: 'Projetos 100% sob medida para marcas que buscam soluções únicas, cenografia complexa e estruturas de grande porte.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    tags: ['Design Exclusivo', 'Arquitetura', 'Tecnologia']
  },
  {
    id: 'instagramaveis',
    title: 'Espaços Instagramáveis',
    subtitle: 'Experiências que geram engajamento',
    description: 'Ambientes criativos, altamente fotográficos e interativos pensados estrategicamente para gerar compartilhamento espontâneo nas redes sociais.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    tags: ['Engajamento', 'Cenografia Visual', 'Redes Sociais']
  }
];

const COMPLEMENTARY_SERVICES = [
  { name: 'Mobiliário & Decoração', desc: 'Peças exclusivas e confortáveis para compor o lounge do evento.' },
  { name: 'Cenografia Temática', desc: 'Ambientes imersivos desenvolvidos com rico detalhamento estético.' },
  { name: 'Palcos & Plenárias', desc: 'Estruturas homologadas para auditórios, palestras e premiações.' },
  { name: 'Credenciamento & Pórticos', desc: 'Entradas de impacto e fluxo otimizado para recepção dos visitantes.' },
  { name: 'Comunicação Visual', desc: 'Impressão em grande formato, comunicação em LED e backlights.' }
];

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'Stand AgroTech Expo',
    category: 'montados',
    categoryName: 'Stands Montados',
    size: '120 m²',
    event: 'ExpoAgro 2024',
    description: 'Projeto de grande porte combinando elementos de madeira sustentável, comunicação visual em LED e área VIP elevada.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    likes: 42
  },
  {
    id: 2,
    title: 'Lounge Imersivo Neotech',
    category: 'especiais',
    categoryName: 'Projetos Especiais',
    size: '250 m²',
    event: 'Tech Summit SP',
    description: 'Estrutura cenográfica futurista com projeções mapeadas, túnel de LED e salas privadas de reunião.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    likes: 89
  },
  {
    id: 3,
    title: 'Espaço Photo Booth Glow',
    category: 'instagramaveis',
    categoryName: 'Espaços Instagramáveis',
    size: '30 m²',
    event: 'Beauty Fair',
    description: 'Espaço instagramável neon com paredes vegetais e iluminação ajustada para fotos e gravações de conteúdos por influenciadores.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80',
    likes: 67
  },
  {
    id: 4,
    title: 'Stand Modular Express',
    category: 'basicos',
    categoryName: 'Stands Básicos',
    size: '48 m²',
    event: 'Feira da Indústria',
    description: 'Solução versátil e rápida de montagem, priorizando balcões de atendimento e otimização total de área útil.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80',
    likes: 31
  },
  {
    id: 5,
    title: 'Pavilhão Institucional Pharma',
    category: 'especiais',
    categoryName: 'Projetos Especiais',
    size: '180 m²',
    event: 'Congresso de Saúde',
    description: 'Acabamento corporativo em laca e iluminação direcionada, garantindo sofisticação e conforto no atendimento aos médicos.',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1000&q=80',
    likes: 54
  },
  {
    id: 6,
    title: 'Arena de Experiências',
    category: 'instagramaveis',
    categoryName: 'Espaços Instagramáveis',
    size: '60 m²',
    event: 'Festival de Inovação',
    description: 'Ambiente interativo com displays touch e instalações visuais marcantes para engajamento com o público jovem.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    likes: 95
  }
];

const TESTIMONIALS = [
  {
    name: 'Mariana Andrade',
    role: 'Gerente de Marketing',
    company: 'Nexus Tecnologias',
    text: 'A KTMR superou todas as nossas expectativas. Entregaram o stand 12 horas antes do prazo limite com um acabamento impecável!',
    rating: 5
  },
  {
    name: 'Carlos Eduarda Silveira',
    role: 'Diretor de Eventos',
    company: 'AgroSul Brasil',
    text: 'Profissionalismo do briefing à desmontagem. O acabamento das marcenarias e a iluminação valorizaram demais nossa marca na feira.',
    rating: 5
  },
  {
    name: 'Beatriz Ramos',
    role: 'Coordenadora de Comunicação',
    company: 'Vitalis Pharma',
    text: 'O espaço instagramável criado pela KTMR foi a maior atração do evento. Tivemos um engajamento recorde nas redes sociais.',
    rating: 5
  }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioFilter, setPortfolioFilter] = useState('todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const [likesCount, setLikesCount] = useState({});
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Quote Simulator State
  const [quoteStep, setQuoteStep] = useState(1);
  const [quoteData, setQuoteData] = useState({
    standType: 'Stands Montados',
    size: '50m² a 100m²',
    services: [],
    name: '',
    company: '',
    phone: '',
    email: '',
    city: ''
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleLike = (id, e) => {
    e.stopPropagation();
    setLikesCount(prev => ({
      ...prev,
      [id]: (prev[id] || PORTFOLIO_PROJECTS.find(p => p.id === id).likes) + 1
    }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    const whatsappMsg = `*Novo Orçamento via Site KTMR*%0A%0A` +
      `*Cliente:* ${quoteData.name}%0A` +
      `*Empresa:* ${quoteData.company}%0A` +
      `*Cidade/UF:* ${quoteData.city}%0A` +
      `*Telefone:* ${quoteData.phone}%0A` +
      `*Tipo de Stand:* ${quoteData.standType}%0A` +
      `*Tamanho Estimado:* ${quoteData.size}%0A` +
      `*Serviços Extras:* ${quoteData.services.join(', ') || 'Nenhum selected'}`;
    
    window.open(`https://wa.me/554599224000?text=${whatsappMsg}`, '_blank');
  };

  const filteredProjects = portfolioFilter === 'todos' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === portfolioFilter);

  return (
    <div className="min-h-screen bg-[#061e14] text-gray-100 font-sans selection:bg-[#00e676] selection:text-black">
      
      {/* --- HEADER & NAVIGATION --- */}
      <header className="sticky top-0 z-40 bg-[#061e14]/90 backdrop-blur-md border-b border-[#00e676]/20 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <div 
              onClick={() => setActiveTab('home')}
              className="cursor-pointer flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-[#00e676] text-black font-extrabold text-2xl flex items-center justify-center rounded-lg shadow-lg shadow-[#00e676]/20 group-hover:scale-105 transition-transform">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-white flex items-center">
                  KTMR<span className="text-[#00e676] text-3xl leading-none">.</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-gray-400 font-bold uppercase -mt-1">
                  KE STANDS
                </span>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {[
                { id: 'home', label: 'Home' },
                { id: 'quemsomos', label: 'Quem Somos' },
                { id: 'categorias', label: 'Categorias' },
                { id: 'galeria', label: 'Galeria' },
                { id: 'sustentabilidade', label: 'Sustentabilidade' },
                { id: 'contato', label: 'Contato & Orçamento' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-semibold transition-all ${
                    activeTab === item.id 
                      ? 'text-[#00e676] bg-[#00e676]/10 border border-[#00e676]/30' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA HEADER */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/554599224000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c865] text-black font-bold px-4 py-2.5 rounded-lg transition-all shadow-md shadow-[#00e676]/20 hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                <span>(45) 9922-4000</span>
              </a>
            </div>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a291c] border-b border-[#00e676]/20 px-4 pt-2 pb-6 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'quemsomos', label: 'Quem Somos' },
              { id: 'categorias', label: 'Categorias' },
              { id: 'galeria', label: 'Galeria de Projetos' },
              { id: 'sustentabilidade', label: 'Sustentabilidade' },
              { id: 'contato', label: 'Contato & Orçamento' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium flex items-center justify-between ${
                  activeTab === item.id 
                    ? 'bg-[#00e676]/20 text-[#00e676] font-bold border border-[#00e676]/40' 
                    : 'text-gray-200 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/554599224000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#00e676] text-black font-bold py-3 rounded-lg"
              >
                <Phone className="w-5 h-5" />
                <span>Falar com Atendimento</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main>

        {/* ================= PAGE: HOME ================= */}
        {activeTab === 'home' && (
          <div className="space-y-24 pb-20">
            
            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#061e14] via-[#061e14]/90 to-[#061e14]/70 z-10" />
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80" 
                alt="Stand de Evento KTMR" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse transition-all duration-1000"
              />
              
              <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00e676]/10 border border-[#00e676]/30 text-[#00e676] text-xs sm:text-sm font-semibold mb-6">
                  <Sparkles className="w-4 h-4" />
                  <span>Cenografia & Stands Corporativos de Alto Padrão</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] max-w-4xl">
                  Transformando eventos em <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e676] to-emerald-300">grandes experiências.</span>
                </h1>
                
                <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                  Do planejamento à montagem, criamos espaços impactantes que conectam marcas e pessoas com excelência, pontualidade e sofisticação.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={() => setActiveTab('contato')}
                    className="flex items-center justify-center gap-3 bg-[#00e676] hover:bg-[#00c865] text-black font-extrabold px-8 py-4 rounded-xl text-lg transition-all shadow-xl shadow-[#00e676]/25 hover:scale-105"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>

                  <button
                    onClick={() => setActiveTab('galeria')}
                    className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold px-8 py-4 rounded-xl text-lg backdrop-blur-md transition-all"
                  >
                    <span>Ver Portfólio</span>
                  </button>
                </div>

                {/* HIGHLIGHT BADGES */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-4xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Comprometimento</h4>
                      <p className="text-xs text-gray-400">Entrega rigorosa nos prazos</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Agilidade</h4>
                      <p className="text-xs text-gray-400">Eficiência em cada etapa</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-[#00e676]/10 border border-[#00e676]/30 flex items-center justify-center text-[#00e676]">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">Acabamento</h4>
                      <p className="text-xs text-gray-400">Qualidade que impressiona</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* CATEGORIES OVERVIEW */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Formatos & Formatos</span>
                <h2 className="text-3xl sm:text-5xl font-black text-white mt-2">Nossas Categorias</h2>
                <p className="text-gray-400 mt-4 text-base sm:text-lg">
                  Oferecemos soluções completas para cada tamanho de projeto e objetivo comercial.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {CATEGORIES.map(cat => (
                  <div 
                    key={cat.id}
                    className="group bg-[#0a291c] border border-white/10 rounded-2xl overflow-hidden hover:border-[#00e676]/50 transition-all hover:-translate-y-1.5 flex flex-col justify-between"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={cat.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c] via-transparent to-transparent" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-[#00e676] transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs font-medium text-[#00e676] mt-1">{cat.subtitle}</p>
                        <p className="text-xs text-gray-300 mt-3 line-clamp-3 leading-relaxed">
                          {cat.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveTab('categorias')}
                        className="mt-6 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white/5 hover:bg-[#00e676] hover:text-black text-xs font-bold text-white transition-all"
                      >
                        <span>Saiba Mais</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="bg-[#04140d] py-20 border-y border-white/5">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Depoimentos</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">O Que Nossos Clientes Dizem</h2>
                </div>

                <div className="max-w-3xl mx-auto relative bg-[#0a291c] p-8 sm:p-12 rounded-3xl border border-[#00e676]/20 shadow-2xl">
                  <div className="flex justify-center mb-6 text-[#00e676]">
                    {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                      <Sparkles key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-gray-200 text-center italic font-light leading-relaxed">
                    "{TESTIMONIALS[testimonialIndex].text}"
                  </p>

                  <div className="mt-8 text-center">
                    <h4 className="font-bold text-white text-base sm:text-lg">
                      {TESTIMONIALS[testimonialIndex].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#00e676]">
                      {TESTIMONIALS[testimonialIndex].role} — {TESTIMONIALS[testimonialIndex].company}
                    </p>
                  </div>

                  {/* CAROUSEL CONTROLS */}
                  <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/10">
                    <button 
                      onClick={() => setTestimonialIndex(prev => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      className="p-2 rounded-full bg-white/5 hover:bg-[#00e676] hover:text-black text-white transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <div className="flex gap-2">
                      {TESTIMONIALS.map((_, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setTestimonialIndex(idx)}
                          className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                            idx === testimonialIndex ? 'bg-[#00e676] w-6' : 'bg-white/20'
                          }`}
                        />
                      ))}
                    </div>

                    <button 
                      onClick={() => setTestimonialIndex(prev => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                      className="p-2 rounded-full bg-white/5 hover:bg-[#00e676] hover:text-black text-white transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* CALL TO ACTION BANNER */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#00e676] to-emerald-600 p-8 sm:p-14 text-black flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl shadow-[#00e676]/20">
                <div className="max-w-2xl text-center lg:text-left">
                  <h3 className="text-3xl sm:text-4xl font-black leading-tight">
                    Pronto para destacar sua marca no próximo evento?
                  </h3>
                  <p className="mt-3 text-black/80 font-medium text-base">
                    Solicite uma proposta personalizada sem compromisso com nossos especialistas.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('contato')}
                  className="bg-black hover:bg-gray-900 text-white font-extrabold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shrink-0 shadow-xl"
                >
                  Simular Orçamento Agora
                </button>
              </div>
            </section>

          </div>
        )}

        {/* ================= PAGE: QUEM SOMOS ================= */}
        {activeTab === 'quemsomos' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            {/* HERO QUEM SOMOS */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Sobre a KTMR</span>
                <h1 className="text-3xl sm:text-5xl font-black text-white mt-2 leading-tight">
                  Especialistas em Soluções para Eventos.
                </h1>
                <p className="mt-6 text-gray-300 text-lg leading-relaxed font-light">
                  A <strong>KTMR (KE Stands)</strong> é uma empresa especializada na montagem de stands e ambientes corporativos para feiras, congressos e grandes eventos. Unimos criatividade visual, segurança estrutural e eficiência logistica para entregar soluções memoráveis.
                </p>
                <p className="mt-4 text-gray-400 text-base leading-relaxed">
                  Entendemos que o stand é o cartão de visitas presencial da sua empresa em uma feira. Por isso, cuidamos minuciosamente de cada detalhe, do conceito 3D até a entrega final antes do início do evento.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-[#0a291c] border border-[#00e676]/30 px-5 py-3 rounded-xl">
                    <span className="block text-2xl font-black text-[#00e676]">100%</span>
                    <span className="text-xs text-gray-300 font-medium">Pontualidade na Entrega</span>
                  </div>
                  <div className="bg-[#0a291c] border border-[#00e676]/30 px-5 py-3 rounded-xl">
                    <span className="block text-2xl font-black text-[#00e676]">Anos</span>
                    <span className="text-xs text-gray-300 font-medium">De Experiência Setorial</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-[#00e676]/30 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80" 
                    alt="Montagem de Stand KTMR" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#00e676] text-black p-6 rounded-2xl font-bold shadow-xl hidden sm:block">
                  <p className="text-2xl font-black">Qualidade &</p>
                  <p className="text-sm font-semibold">Compromisso total</p>
                </div>
              </div>
            </div>

            {/* THREE PILARS */}
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-3xl font-black text-white">Nossos Pilares de Trabalho</h2>
                <p className="text-gray-400 mt-2">O segredo por trás do alto padrão das nossas montagens.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#0a291c] p-8 rounded-2xl border border-white/10 hover:border-[#00e676]/40 transition-all">
                  <div className="w-14 h-14 bg-[#00e676]/10 text-[#00e676] rounded-xl flex items-center justify-center mb-6">
                    <Users className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Equipe Experiente e Qualificada</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Profissionais multidisciplinares, marceneiros, eletricistas e designers alinhados para executar projetos complexos com precisão.
                  </p>
                </div>

                <div className="bg-[#0a291c] p-8 rounded-2xl border border-white/10 hover:border-[#00e676]/40 transition-all">
                  <div className="w-14 h-14 bg-[#00e676]/10 text-[#00e676] rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Processos Bem Definidos</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Metodologia de trabalho organizada em etapas claras de aprovação, fabricação e montagem no pavilhão de exposições.
                  </p>
                </div>

                <div className="bg-[#0a291c] p-8 rounded-2xl border border-white/10 hover:border-[#00e676]/40 transition-all">
                  <div className="w-14 h-14 bg-[#00e676]/10 text-[#00e676] rounded-xl flex items-center justify-center mb-6">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Soluções Sob Medida</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Cada marca possui uma identidade única. Desenvolvemos soluções adequadas ao seu orçamento e meta comercial.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= PAGE: CATEGORIAS ================= */}
        {activeTab === 'categorias' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Portfólio de Soluções</span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-2">Categorias de Stands</h1>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                Do conceito à montagem final, oferecemos formatos adequados para cada necessidade corporativa.
              </p>
            </div>

            {/* DETAILED CATEGORY CARDS */}
            <div className="space-y-12">
              {CATEGORIES.map((cat, idx) => (
                <div 
                  key={cat.id} 
                  className={`bg-[#0a291c] rounded-3xl border border-white/10 overflow-hidden flex flex-col ${
                    idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className="lg:w-1/2 relative min-h-[300px]">
                    <img 
                      src={cat.image} 
                      alt={cat.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a291c] via-transparent to-transparent lg:hidden" />
                  </div>

                  <div className="lg:w-1/2 p-8 sm:p-12 flex flex-col justify-center">
                    <span className="text-[#00e676] text-xs font-bold tracking-widest uppercase mb-2">
                      {cat.subtitle}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-black text-white mb-4">{cat.title}</h2>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {cat.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="bg-white/10 text-xs px-3 py-1 rounded-full text-gray-200">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setQuoteData(prev => ({ ...prev, standType: cat.title }));
                        setActiveTab('contato');
                      }}
                      className="inline-flex items-center justify-center gap-2 bg-[#00e676] hover:bg-[#00c865] text-black font-bold px-6 py-3 rounded-xl transition-all self-start"
                    >
                      <span>Orçar este Modelo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* COMPLEMENTARY SERVICES */}
            <div className="pt-12 border-t border-white/10">
              <h3 className="text-2xl font-bold text-white text-center mb-8">Outras Soluções Integradas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {COMPLEMENTARY_SERVICES.map((srv, sIdx) => (
                  <div key={sIdx} className="bg-[#04140d] p-6 rounded-2xl border border-white/5">
                    <CheckCircle2 className="w-6 h-6 text-[#00e676] mb-3" />
                    <h4 className="text-lg font-bold text-white">{srv.name}</h4>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{srv.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ================= PAGE: GALERIA DE PROJETOS ================= */}
        {activeTab === 'galeria' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Cases de Sucesso</span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-2">Galeria de Projetos</h1>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                Confira os resultados reais de montagens que uniram design, funcionalidade e acabamento refinado.
              </p>
            </div>

            {/* FILTERS */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'todos', label: 'Todos os Projetos' },
                { id: 'montados', label: 'Stands Montados' },
                { id: 'especiais', label: 'Projetos Especiais' },
                { id: 'instagramaveis', label: 'Instagramáveis' },
                { id: 'basicos', label: 'Stands Básicos' }
              ].map(f => (
                <button
                  key={f.id}
                  onClick={() => setPortfolioFilter(f.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    portfolioFilter === f.id
                      ? 'bg-[#00e676] text-black shadow-lg shadow-[#00e676]/20'
                      : 'bg-[#0a291c] text-gray-300 hover:bg-white/10'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* PROJECTS GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map(proj => (
                <div 
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group bg-[#0a291c] rounded-2xl overflow-hidden border border-white/10 hover:border-[#00e676]/50 transition-all cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-[#00e676] text-xs font-bold px-3 py-1 rounded-full border border-[#00e676]/30">
                      {proj.categoryName}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
                      <span>{proj.event}</span>
                      <span className="font-semibold text-white">{proj.size}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#00e676] transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-gray-300 mt-2 line-clamp-2">
                      {proj.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#00e676] flex items-center gap-1">
                        Ver detalhes <Maximize2 className="w-3.5 h-3.5" />
                      </span>
                      <button 
                        onClick={(e) => handleLike(proj.id, e)}
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-[#00e676] transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{likesCount[proj.id] || proj.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* MODAL DETALHES DO PROJETO */}
            {selectedProject && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
                <div className="bg-[#0a291c] border border-[#00e676]/40 rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-200">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 bg-black/60 p-2 rounded-full text-white hover:bg-[#00e676] hover:text-black transition-all"
                  >
                    <X className="w-6 h-6" />
                  </button>

                  <div className="relative h-80">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="bg-[#00e676] text-black font-bold text-xs px-3 py-1 rounded-full">
                        {selectedProject.categoryName}
                      </span>
                      <span className="text-xs text-gray-400">Evento: {selectedProject.event}</span>
                      <span className="text-xs text-gray-400">• Área: {selectedProject.size}</span>
                    </div>

                    <h2 className="text-2xl font-black text-white">{selectedProject.title}</h2>
                    <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                      {selectedProject.description}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
                      <button 
                        onClick={(e) => handleLike(selectedProject.id, e)}
                        className="flex items-center gap-2 text-sm font-bold text-white bg-white/10 px-4 py-2 rounded-xl hover:bg-[#00e676] hover:text-black transition-all"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>Curtir Case ({likesCount[selectedProject.id] || selectedProject.likes})</span>
                      </button>

                      <button
                        onClick={() => {
                          const projName = selectedProject.title;
                          setSelectedProject(null);
                          setQuoteData(prev => ({ ...prev, standType: `Inspirado em: ${projName}` }));
                          setActiveTab('contato');
                        }}
                        className="w-full sm:w-auto bg-[#00e676] hover:bg-[#00c865] text-black font-bold px-6 py-2.5 rounded-xl text-sm transition-all text-center"
                      >
                        Quero um Projeto Similar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>
        )}

        {/* ================= PAGE: SUSTENTABILIDADE ================= */}
        {activeTab === 'sustentabilidade' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Práticas ESG na Cenografia</span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-2">Sustentabilidade & Respeito Ambiental</h1>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                Construímos experiências visuais marcantes minimizando o impacto ambiental e priorizando a economia circular.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0a291c] p-6 rounded-2xl border border-white/10">
                <Recycle className="w-10 h-10 text-[#00e676] mb-4" />
                <h3 className="text-lg font-bold text-white">Módulos Reutilizáveis</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Utilização de estruturas modulares pré-fabricadas que reduzem drasticamente a geração de resíduos ao final do evento.
                </p>
              </div>

              <div className="bg-[#0a291c] p-6 rounded-2xl border border-white/10">
                <Leaf className="w-10 h-10 text-[#00e676] mb-4" />
                <h3 className="text-lg font-bold text-white">Materiais Certificados</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Uso prioritário de madeiras de reflorestamento com certificação ambiental e tintas de baixa emissão de compostos orgânicos.
                </p>
              </div>

              <div className="bg-[#0a291c] p-6 rounded-2xl border border-white/10">
                <Sparkles className="w-10 h-10 text-[#00e676] mb-4" />
                <h3 className="text-lg font-bold text-white">Eficiência Energética</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Projeto de iluminação 100% focado em refletores e fitas LED de baixo consumo elétrico e alta eficiência luminosa.
                </p>
              </div>

              <div className="bg-[#0a291c] p-6 rounded-2xl border border-white/10">
                <ShieldCheck className="w-10 h-10 text-[#00e676] mb-4" />
                <h3 className="text-lg font-bold text-white">Descarte Consciente</h3>
                <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                  Logística reversa e parceria com cooperativas de reciclagem para correta destinação dos resíduos pós-desmontagem.
                </p>
              </div>
            </div>

            {/* SUSTAINABILITY STATS */}
            <div className="bg-gradient-to-br from-[#04140d] to-[#0a291c] p-8 sm:p-12 rounded-3xl border border-[#00e676]/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
                <div>
                  <span className="block text-4xl sm:text-5xl font-black text-[#00e676]">+85%</span>
                  <span className="text-xs text-gray-300 mt-2 block font-medium">Reaproveitamento de Materiais</span>
                </div>
                <div>
                  <span className="block text-4xl sm:text-5xl font-black text-[#00e676]">100%</span>
                  <span className="text-xs text-gray-300 mt-2 block font-medium">Lâmpadas & Fitas LED</span>
                </div>
                <div>
                  <span className="block text-4xl sm:text-5xl font-black text-[#00e676]">Zero</span>
                  <span className="text-xs text-gray-300 mt-2 block font-medium">Descarte Irresponsável</span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ================= PAGE: CONTATO & ORÇAMENTO ================= */}
        {activeTab === 'contato' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#00e676] font-bold text-sm tracking-widest uppercase">Atendimento Rápido</span>
              <h1 className="text-3xl sm:text-5xl font-black text-white mt-2">Simule Seu Orçamento</h1>
              <p className="text-gray-400 mt-4 text-base sm:text-lg">
                Preencha as informações abaixo para receber uma estimativa ou atendimento personalizado sem compromisso.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              
              {/* CONTACT INFO CARD */}
              <div className="space-y-6">
                <div className="bg-[#0a291c] p-8 rounded-3xl border border-white/10 space-y-6">
                  <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">Canais Diretos</h3>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00e676]/10 text-[#00e676] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase">Telefone / WhatsApp</h4>
                      <a href="https://wa.me/554599224000" className="text-base font-bold text-white hover:text-[#00e676] transition-colors">
                        (45) 9922-4000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00e676]/10 text-[#00e676] flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase">Atendimento</h4>
                      <p className="text-sm font-semibold text-white">Segunda a Sexta, das 08h às 18h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#00e676]/10 text-[#00e676] flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs text-gray-400 font-semibold uppercase">Garantia KTMR</h4>
                      <p className="text-xs text-gray-300">Orçamento detalhado sem compromisso e suporte durante todo o evento.</p>
                    </div>
                  </div>

                </div>

                <div className="bg-gradient-to-br from-[#00e676]/20 to-transparent p-6 rounded-2xl border border-[#00e676]/30 text-center">
                  <p className="text-xs text-[#00e676] font-bold uppercase tracking-wider">Atendimento Rápido</p>
                  <p className="text-sm text-gray-200 mt-2">Prefer preferência por WhatsApp? Clique e fale direto com um especialista.</p>
                  <a
                    href="https://wa.me/554599224000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-[#00e676] text-black font-bold px-6 py-2.5 rounded-xl text-sm hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Iniciar Chat no WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* SIMULATOR / MULTI-STEP FORM */}
              <div className="lg:col-span-2 bg-[#0a291c] p-8 sm:p-12 rounded-3xl border border-[#00e676]/30 shadow-2xl relative">
                
                {/* STEP INDICATOR */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  {[1, 2, 3].map(step => (
                    <div key={step} className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                        quoteStep === step 
                          ? 'bg-[#00e676] text-black ring-4 ring-[#00e676]/20' 
                          : quoteStep > step 
                            ? 'bg-[#00e676]/40 text-white' 
                            : 'bg-white/10 text-gray-400'
                      }`}>
                        {step}
                      </div>
                      <span className="hidden sm:inline text-xs font-semibold text-gray-300">
                        {step === 1 ? 'Formato' : step === 2 ? 'Tamanho & Serviços' : 'Seus Dados'}
                      </span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  
                  {/* STEP 1: FORMAT */}
                  {quoteStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <h3 className="text-lg font-bold text-white">Qual categoria de stand você precisa?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                          'Stands Montados',
                          'Projetos Especiais',
                          'Stands Básicos',
                          'Espaços Instagramáveis'
                        ].map(type => (
                          <div
                            key={type}
                            onClick={() => setQuoteData({ ...quoteData, standType: type })}
                            className={`p-4 rounded-xl border cursor-pointer transition-all ${
                              quoteData.standType === type 
                                ? 'bg-[#00e676]/15 border-[#00e676] text-white font-bold' 
                                : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span>{type}</span>
                              {quoteData.standType === type && <CheckCircle2 className="w-5 h-5 text-[#00e676]" />}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(2)}
                          className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c865] text-black font-bold px-6 py-3 rounded-xl transition-all"
                        >
                          <span>Próximo Passo</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: SIZE & SERVICES */}
                  {quoteStep === 2 && (
                    <div className="space-y-6 animate-in fade-in duration-200">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Tamanho estimado da área (m²)</h3>
                        <select
                          value={quoteData.size}
                          onChange={(e) => setQuoteData({ ...quoteData, size: e.target.value })}
                          className="w-full bg-[#04140d] border border-white/20 rounded-xl p-3.5 text-white focus:border-[#00e676] focus:outline-none"
                        >
                          <option value="Até 36m²">Até 36m²</option>
                          <option value="36m² a 75m²">36m² a 75m²</option>
                          <option value="75m² a 150m²">75m² a 150m²</option>
                          <option value="Acima de 150m² / Mezanino">Acima de 150m² / Mezanino</option>
                        </select>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white mb-3">Serviços adicionais necessários</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {[
                            'Mobiliário Exclusivo',
                            'Comunicação Visual LED',
                            'Cenografia Interativa',
                            'Credenciamento'
                          ].map(service => (
                            <label 
                              key={service} 
                              className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/10 cursor-pointer hover:bg-white/10"
                            >
                              <input
                                type="checkbox"
                                checked={quoteData.services.includes(service)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setQuoteData({ ...quoteData, services: [...quoteData.services, service] });
                                  } else {
                                    setQuoteData({ ...quoteData, services: quoteData.services.filter(s => s !== service) });
                                  }
                                }}
                                className="accent-[#00e676] w-4 h-4"
                              />
                              <span className="text-xs text-gray-200">{service}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(1)}
                          className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/15"
                        >
                          Voltar
                        </button>
                        <button
                          type="button"
                          onClick={() => setQuoteStep(3)}
                          className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c865] text-black font-bold px-6 py-3 rounded-xl transition-all"
                        >
                          <span>Próximo Passo</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: CONTACT DATA */}
                  {quoteStep === 3 && (
                    <div className="space-y-4 animate-in fade-in duration-200">
                      <h3 className="text-lg font-bold text-white">Dados da sua Empresa</h3>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs text-gray-300 font-medium block mb-1">Seu Nome *</label>
                          <input
                            type="text"
                            required
                            value={quoteData.name}
                            onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                            placeholder="Ex: Roberto Silva"
                            className="w-full bg-[#04140d] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#00e676] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-300 font-medium block mb-1">Empresa / Marca *</label>
                          <input
                            type="text"
                            required
                            value={quoteData.company}
                            onChange={(e) => setQuoteData({ ...quoteData, company: e.target.value })}
                            placeholder="Ex: Marca Corp"
                            className="w-full bg-[#04140d] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#00e676] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-300 font-medium block mb-1">Telefone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            value={quoteData.phone}
                            onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                            placeholder="(45) 90000-0000"
                            className="w-full bg-[#04140d] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#00e676] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="text-xs text-gray-300 font-medium block mb-1">Cidade / Estado</label>
                          <input
                            type="text"
                            value={quoteData.city}
                            onChange={(e) => setQuoteData({ ...quoteData, city: e.target.value })}
                            placeholder="Ex: Cascavel / PR"
                            className="w-full bg-[#04140d] border border-white/20 rounded-xl p-3 text-sm text-white focus:border-[#00e676] focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="pt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={() => setQuoteStep(2)}
                          className="bg-white/10 text-white font-bold px-6 py-3 rounded-xl hover:bg-white/15"
                        >
                          Voltar
                        </button>
                        <button
                          type="submit"
                          className="flex items-center gap-2 bg-[#00e676] hover:bg-[#00c865] text-black font-extrabold px-8 py-3 rounded-xl transition-all shadow-lg shadow-[#00e676]/25"
                        >
                          <Send className="w-4 h-4" />
                          <span>Enviar via WhatsApp</span>
                        </button>
                      </div>
                    </div>
                  )}

                </form>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-[#03110b] border-t border-white/10 py-12 text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#00e676] text-black font-extrabold text-xl flex items-center justify-center rounded-lg">
                  K
                </div>
                <span className="text-xl font-black text-white">KTMR <span className="text-[#00e676]">KE STANDS</span></span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Transformando eventos em grandes experiências. Soluções completas do planejamento à montagem final.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm">Navegação</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setActiveTab('home')} className="hover:text-[#00e676]">Home</button></li>
                <li><button onClick={() => setActiveTab('quemsomos')} className="hover:text-[#00e676]">Quem Somos</button></li>
                <li><button onClick={() => setActiveTab('categorias')} className="hover:text-[#00e676]">Categorias</button></li>
                <li><button onClick={() => setActiveTab('galeria')} className="hover:text-[#00e676]">Galeria de Projetos</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm">Institucional</h4>
              <ul className="space-y-2 text-xs">
                <li><button onClick={() => setActiveTab('sustentabilidade')} className="hover:text-[#00e676]">Sustentabilidade ESG</button></li>
                <li><button onClick={() => setActiveTab('contato')} className="hover:text-[#00e676]">Simulador de Orçamento</button></li>
                <li><a href="https://wa.me/554599224000" target="_blank" rel="noreferrer" className="hover:text-[#00e676]">Atendimento Comercial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 text-sm">Contato Direto</h4>
              <p className="text-xs text-gray-300 font-bold">(45) 9922-4000</p>
              <p className="text-xs text-gray-400 mt-1">Montagem de Stands e Cenografia para Eventos Corporativos</p>
            </div>

          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-4">
            <p>© {new Date().getFullYear()} KTMR (KE Stands). Todos os direitos reservados.</p>
            <p className="flex items-center gap-1">Desenvolvido para máxima conversão & performance.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/554599224000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#00e676] hover:bg-[#00c865] text-black p-4 rounded-full shadow-2xl shadow-[#00e676]/40 transition-transform hover:scale-110 flex items-center justify-center group"
        title="Falar pelo WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-2 text-xs font-black transition-all duration-300">
          (45) 9922-4000
        </span>
      </a>

    </div>
  );
}