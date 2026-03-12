/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building2, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  Smartphone, 
  Users, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  TrendingUp,
  Heart,
  Menu,
  X,
  Mail,
  ChevronRight,
  Star,
  Award,
  Zap,
  BarChart3,
  FileText,
  CreditCard,
  HeadphonesIcon,
  Moon,
  Sun,
  Linkedin,
  Facebook,
  Instagram,
  Loader2,
  CheckCircle,
  AlertCircle,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tipagens
type FormStatus = 'idle' | 'loading' | 'success' | 'error';
type FormData = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

// Componente de Card de Serviço
const ServiceCard = ({ service, index }: { service: any; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group relative bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-emerald-200/20 dark:hover:shadow-emerald-900/30 transition-all duration-300"
  >
    <div className="absolute top-4 right-4 bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
      {service.stats}
    </div>

    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/20 dark:to-slate-800 rounded-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
      {service.icon}
    </div>
    
    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
      {service.title}
    </h3>
    
    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm mb-4">
      {service.description}
    </p>

    <button 
      onClick={() => {
        document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
      }}
      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-semibold group-hover:gap-3 transition-all"
    >
      Saiba mais 
      <ChevronRight className="w-4 h-4" />
    </button>
  </motion.div>
);

// Componente de Formulário de Contato
const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulação de envio (substituir por integração real)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Aqui você integraria com EmailJS, API própria, etc.
      console.log('Dados do formulário:', formData);
      
      setFormStatus('success');
      setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gradient-to-br from-emerald-600 to-emerald-500 dark:from-emerald-500 dark:to-emerald-400 rounded-3xl p-8 text-white shadow-2xl">
      <h3 className="text-2xl font-bold mb-2">Envie uma mensagem</h3>
      <p className="text-emerald-100 mb-8 text-sm">Responderemos o mais breve possível</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input 
            type="text" 
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu Nome" 
            required
            disabled={formStatus === 'loading'}
            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu E-mail" 
            required
            disabled={formStatus === 'loading'}
            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <input 
            type="tel" 
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Seu Telefone" 
            required
            disabled={formStatus === 'loading'}
            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>
        <div>
          <textarea 
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Como podemos ajudar?" 
            rows={4}
            required
            disabled={formStatus === 'loading'}
            className="w-full px-4 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all backdrop-blur-sm resize-none disabled:opacity-50 disabled:cursor-not-allowed"
          ></textarea>
        </div>

        <AnimatePresence mode="wait">
          {formStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-emerald-100 bg-white/10 p-3 rounded-xl"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm">Mensagem enviada com sucesso! Entraremos em contato.</span>
            </motion.div>
          )}

          {formStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2 text-red-100 bg-red-500/20 p-3 rounded-xl"
            >
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">Erro ao enviar. Tente novamente ou ligue para (69) 3421-1908.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button 
          whileHover={{ scale: formStatus !== 'loading' ? 1.02 : 1 }}
          whileTap={{ scale: formStatus !== 'loading' ? 0.98 : 1 }}
          type="submit"
          disabled={formStatus === 'loading'}
          className="w-full bg-white text-emerald-600 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 group shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formStatus === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              Enviar Mensagem
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </motion.button>
      </form>
    </div>
  );
};

// Componente de WhatsApp Button
const WhatsAppButton = () => {
  const phoneNumber = '556934211908'; // Formato internacional: 55 (Brasil) + 69 + 34211908
  const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os serviços da Conta Ágil.');
  
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all flex items-center justify-center z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs py-2 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Fale conosco no WhatsApp
      </span>
    </motion.a>
  );
};

// Componente de Depoimentos
const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "MEI - Salão de Beleza",
      image: "https://i.pravatar.cc/150?img=1",
      content: "A Conta Ágil transformou a gestão do meu salão. Agora tenho tudo organizado e pago menos impostos. Atendimento excelente!",
      rating: 5
    },
    {
      name: "Carlos Santos",
      role: "ME - Restaurante",
      image: "https://i.pravatar.cc/150?img=2",
      content: "Profissionais incríveis! Me ajudaram a regularizar minha empresa e ainda economizar com planejamento tributário.",
      rating: 5
    },
    {
      name: "Mariana Costa",
      role: "LTDA - Loja Virtual",
      image: "https://i.pravatar.cc/150?img=3",
      content: "A plataforma digital é muito intuitiva e o suporte é rápido. Recomendo para todos os empreendedores de Ji-Paraná.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] mb-4">
            Depoimentos
          </h2>
          <p className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
            O que nossos clientes dizem
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Histórias reais de empreendedores que transformaram seus negócios com nossa ajuda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800 p-8 rounded-3xl border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={`Foto de ${testimonial.name}, cliente da Conta Ágil`}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-emerald-100 dark:ring-emerald-900/30"
                  loading="lazy"
                />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Componente Principal
export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Smooth scroll para links âncora
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      title: "Abertura de Empresa",
      description: "Abrimos seu CNPJ de forma rápida e segura, orientando na escolha do melhor regime tributário.",
      icon: <Building2 className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      stats: "Processo em 48h"
    },
    {
      title: "Contabilidade Digital",
      description: "Acesse seus documentos e relatórios de qualquer lugar com nossa plataforma tecnológica.",
      icon: <Smartphone className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      stats: "100% Online"
    },
    {
      title: "Gestão de MEI",
      description: "Suporte completo para o Microempreendedor Individual: DAS, Declaração Anual e consultoria.",
      icon: <Calculator className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      stats: "+500 MEIs"
    },
    {
      title: "Planejamento Tributário",
      description: "Análise profunda para reduzir seus impostos dentro da legalidade e aumentar sua margem.",
      icon: <ShieldCheck className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />,
      stats: "Economia até 30%"
    }
  ];

  const differentials = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Atendimento Ágil",
      description: "Resposta em até 2 horas"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "10+ Anos de Experiência",
      description: "Especialistas em contabilidade"
    },
    {
      icon: <HeadphonesIcon className="w-6 h-6" />,
      title: "Suporte Personalizado",
      description: "Atendimento humanizado"
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 font-sans antialiased">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl z-50 border-b border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Logo */}
              <a href="/" className="flex items-center gap-2 group">
                <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/30">
                  <TrendingUp className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Conta <span className="text-emerald-600 dark:text-emerald-400">Ágil</span>
                </span>
              </a>
              
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <a 
                  href="#servicos" 
                  onClick={(e) => handleAnchorClick(e, '#servicos')}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group cursor-pointer"
                >
                  Serviços
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#sobre" 
                  onClick={(e) => handleAnchorClick(e, '#sobre')}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group cursor-pointer"
                >
                  Sobre
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a 
                  href="#contato" 
                  onClick={(e) => handleAnchorClick(e, '#contato')}
                  className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors relative group cursor-pointer"
                >
                  Contato
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 dark:bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
                </a>
                
                {/* Theme Toggle */}
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>

                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200/50 dark:shadow-emerald-900/30 hover:shadow-xl hover:shadow-emerald-200/60 dark:hover:shadow-emerald-900/40 hover:-translate-y-0.5"
                >
                  Fale Conosco
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden flex items-center gap-3">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
                >
                  {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Nav */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                <div className="px-4 py-6 space-y-4">
                  <a 
                    href="#servicos" 
                    onClick={(e) => handleAnchorClick(e, '#servicos')}
                    className="block text-sm font-medium py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Serviços
                  </a>
                  <a 
                    href="#sobre" 
                    onClick={(e) => handleAnchorClick(e, '#sobre')}
                    className="block text-sm font-medium py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Sobre
                  </a>
                  <a 
                    href="#contato" 
                    onClick={(e) => handleAnchorClick(e, '#contato')}
                    className="block text-sm font-medium py-3 px-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Contato
                  </a>
                  <button 
                    onClick={() => {
                      document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-emerald-600 dark:bg-emerald-500 text-white px-6 py-4 rounded-xl text-sm font-semibold hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all mt-4"
                  >
                    Fale Conosco
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 via-white to-indigo-50/30 dark:from-emerald-950/20 dark:via-slate-950 dark:to-indigo-950/20 -z-10"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden -z-5">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 dark:bg-emerald-900/30 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/30 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-8 border border-emerald-200 dark:border-emerald-800">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Contabilidade em Ji-Paraná • RO
                </div>
                
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
                  Sua empresa <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-emerald-400 dark:to-emerald-300">
                    Ágil e Digital
                  </span>
                </h1>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-lg leading-relaxed">
                  Transformamos a burocracia em estratégia. Contabilidade moderna para empreendedores que buscam crescimento e segurança em Ji-Paraná.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-emerald-600 dark:bg-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-emerald-200/50 dark:shadow-emerald-900/30"
                  >
                    Quero Abrir Minha Empresa
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
                  >
                    Conheça Nossos Planos
                  </motion.button>
                </div>
                
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                        alt={`Cliente da Conta Ágil - Perfil ${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 object-cover ring-2 ring-emerald-500/20"
                        loading="lazy"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                      <span className="text-slate-900 dark:text-white font-bold text-lg">+500</span> empresas atendidas
                    </p>
                    <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">em Rondônia</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 bg-white dark:bg-slate-800 p-3 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-700">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                    alt="Escritório da Conta Ágil - Ambiente moderno e acolhedor para clientes em Ji-Paraná"
                    className="rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                    loading="eager"
                  />
                </div>
                
                {/* Floating Cards */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 z-20 hidden sm:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Satisfação</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">99.8%</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="absolute -top-6 -left-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 z-20 hidden sm:block"
                >
                  <div className="flex items-center gap-3">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Excelência</p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">10+ anos</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentials Bar */}
        <div className="bg-emerald-600 dark:bg-emerald-500 py-6 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold opacity-90">{item.title}</p>
                    <p className="text-xs opacity-75">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <section id="servicos" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.2em] mb-4"
              >
                O que fazemos
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6"
              >
                Soluções completas para o seu negócio prosperar
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg text-slate-600 dark:text-slate-300"
              >
                Desde a abertura até a gestão contábil avançada, estamos ao seu lado em cada etapa da jornada empreendedora.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* About Section */}
        <section id="sobre" className="py-24 bg-white dark:bg-slate-950 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-50 dark:bg-pink-950/30 text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wider mb-8 border border-pink-200 dark:border-pink-800">
                  <Heart className="w-3 h-3 fill-pink-500" />
                  Liderança Feminina
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight text-slate-900 dark:text-white">
                  Inovação e cuidado em cada detalhe, com a força da <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-emerald-600">mulher empreendedora</span>
                </h2>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Na Conta Ágil, acreditamos que a contabilidade vai além dos números. Somos uma empresa liderada por mulheres que entendem os desafios reais do empreendedorismo e oferecem soluções humanizadas, precisas e inovadoras para o seu negócio crescer com segurança.
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Atendimento personalizado e humanizado",
                    "Foco em inovação e tecnologia contábil",
                    "Compromisso com a ética e transparência",
                    "Especialistas em diversos nichos de mercado"
                  ].map((item, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Equipe Qualificada</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">10+ profissionais</p>
                    </div>
                  </div>
                  
                  <div className="w-px h-10 bg-slate-200 dark:bg-slate-700"></div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Clientes Ativos</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">500+ empresas</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2 relative"
              >
                <div className="relative">
                  <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-emerald-100 dark:border-emerald-900/30">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Equipe da Conta Ágil - Profissionais dedicadas ao sucesso do seu negócio"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Stats Card */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700"
                  >
                    <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-1">10+</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Anos de Experiência</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[1,2,3,4,5].map(i => (
                        <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-[3rem] p-8 lg:p-16 border border-slate-200 dark:border-slate-700 shadow-xl overflow-hidden relative"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_#10b981_0%,_transparent_50%)]"></div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">Onde nos encontrar</h2>
                  
                  <div className="space-y-8">
                    {/* Address */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-200 dark:border-emerald-800">
                        <MapPin className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Endereço</p>
                        <p className="text-lg text-slate-900 dark:text-white font-medium">
                          R. Goiânia, 809 - Nova Brasília<br />
                          Ji-Paraná - RO, 76908-462
                        </p>
                        <a 
                          href="https://maps.google.com/?q=R.+Goiânia,+809+-+Nova+Brasília+Ji-Paraná+RO"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-emerald-600 dark:text-emerald-400 mt-2 hover:gap-2 transition-all"
                        >
                          Ver no mapa <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-200 dark:border-emerald-800">
                        <Phone className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Telefone</p>
                        <a 
                          href="tel:+556934211908"
                          className="text-2xl text-slate-900 dark:text-white font-bold hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          (69) 3421-1908
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Disponível em horário comercial</p>
                      </div>
                    </motion.div>

                    {/* Hours */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-200 dark:border-emerald-800">
                        <Clock className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">Horário de Atendimento</p>
                        <p className="text-lg text-slate-900 dark:text-white font-medium">Segunda a Sexta: 08:00 às 18:00</p>
                        <p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold mt-2">Intervalo: 11:30 às 13:30</p>
                      </div>
                    </motion.div>

                    {/* Email */}
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900/30 dark:to-slate-800 rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-emerald-200 dark:border-emerald-800">
                        <Mail className="text-emerald-600 dark:text-emerald-400 w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">E-mail</p>
                        <a 
                          href="mailto:contato@contaagil.com.br"
                          className="text-lg text-slate-900 dark:text-white font-medium hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          contato@contaagil.com.br
                        </a>
                        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Respondemos em até 2h</p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Contact Form */}
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-6 group">
                  <div className="w-10 h-10 bg-emerald-600 dark:bg-emerald-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                    <TrendingUp className="text-white w-6 h-6" />
                  </div>
                  <span className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Conta <span className="text-emerald-600 dark:text-emerald-400">Ágil</span>
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                  Soluções contábeis e empresariais modernas para o empreendedor de Ji-Paraná. Agilidade, tecnologia e confiança em um só lugar.
                </p>
                
                {/* Social Links */}
                <div className="flex items-center gap-4 mt-6">
                  <a 
                    href="#" 
                    aria-label="Facebook da Conta Ágil"
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-all group"
                  >
                    <Facebook className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="Instagram da Conta Ágil"
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-all group"
                  >
                    <Instagram className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white" />
                  </a>
                  <a 
                    href="#" 
                    aria-label="LinkedIn da Conta Ágil"
                    className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-500 hover:text-white transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Links Rápidos</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a 
                      href="/" 
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Início
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#servicos"
                      onClick={(e) => handleAnchorClick(e, '#servicos')}
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Serviços
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#sobre"
                      onClick={(e) => handleAnchorClick(e, '#sobre')}
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Sobre Nós
                    </a>
                  </li>
                  <li>
                    <a 
                      href="#contato"
                      onClick={(e) => handleAnchorClick(e, '#contato')}
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Contato
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-6">Legal</h4>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a 
                      href="/privacidade" 
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Privacidade
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/termos" 
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Termos de Uso
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/cookies" 
                      className="text-slate-500 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all" /> Cookies
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                © 2026 Conta Ágil Soluções Contábeis e Empresariais. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500 font-bold uppercase tracking-widest">
                  <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                  Liderança Feminina
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-emerald-600 dark:bg-emerald-500 text-white rounded-xl shadow-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-all flex items-center justify-center z-50"
          aria-label="Voltar ao topo da página"
        >
          <ChevronRight className="w-5 h-5 -rotate-90" />
        </motion.button>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
      `}</style>
    </div>
  );
}
