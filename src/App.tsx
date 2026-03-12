/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const services = [
    {
      title: "Abertura de Empresa",
      description: "Abrimos seu CNPJ de forma rápida e segura, orientando na escolha do melhor regime tributário.",
      icon: <Building2 className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Contabilidade Digital",
      description: "Acesse seus documentos e relatórios de qualquer lugar com nossa plataforma tecnológica.",
      icon: <Smartphone className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Gestão de MEI",
      description: "Suporte completo para o Microempreendedor Individual: DAS, Declaração Anual e consultoria.",
      icon: <Calculator className="w-8 h-8 text-indigo-600" />
    },
    {
      title: "Planejamento Tributário",
      description: "Análise profunda para reduzir seus impostos dentro da legalidade e aumentar sua margem.",
      icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Conta <span className="text-indigo-600">Ágil</span>
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-sm font-medium hover:text-indigo-600 transition-colors">Serviços</a>
              <a href="#sobre" className="text-sm font-medium hover:text-indigo-600 transition-colors">Sobre</a>
              <a href="#contato" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contato</a>
              <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200">
                Fale Conosco
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            <a href="#servicos" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>Serviços</a>
            <a href="#sobre" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>Sobre</a>
            <a href="#contato" className="block text-sm font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contato</a>
            <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold">
              Fale Conosco
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Contabilidade em Ji-Paraná
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                Sua empresa <br />
                <span className="text-indigo-600">Ágil e Digital</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Transformamos a burocracia em estratégia. Contabilidade moderna para empreendedores que buscam crescimento e segurança em Ji-Paraná.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-indigo-100">
                  Abrir Minha Empresa
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Ver Planos
                </button>
              </div>
              
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="Client" 
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500 font-medium">
                  <span className="text-slate-900 font-bold">+500 empresas</span> atendidas em Rondônia
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/accounting/800/600" 
                  alt="Escritório" 
                  className="rounded-[2rem] w-full h-auto object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60 -z-10"></div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-emerald-600 w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Satisfação</p>
                    <p className="text-xl font-bold text-slate-900">99.8% Clientes</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">O que fazemos</h2>
            <p className="text-4xl font-extrabold text-slate-900 mb-6">Soluções completas para o seu negócio prosperar</p>
            <p className="text-lg text-slate-600">Desde a abertura até a gestão contábil avançada, estamos ao seu lado em cada etapa da jornada empreendedora.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-indigo-50 transition-all"
              >
                <div className="mb-6 inline-block p-4 bg-white rounded-2xl shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section (Female Led) */}
      <section id="sobre" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-8">
                <Heart className="w-3 h-3 text-pink-500 fill-pink-500" />
                Empresa de Empreendedoras
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                Liderança feminina com foco em <span className="text-indigo-400">resultados reais</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                A Conta Ágil Soluções Contábeis e Empresariais se orgulha de ser uma empresa liderada por mulheres. Entendemos os desafios do mercado e oferecemos um atendimento humanizado, preciso e focado no sucesso do cliente.
              </p>
              <ul className="space-y-4">
                {[
                  "Atendimento personalizado e humanizado",
                  "Foco em inovação e tecnologia contábil",
                  "Compromisso com a ética e transparência",
                  "Especialistas em diversos nichos de mercado"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border-8 border-white/5">
                <img 
                  src="https://picsum.photos/seed/team/800/800" 
                  alt="Nossa Equipe" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-3xl shadow-2xl">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm font-medium opacity-80">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* Contact & Location Section (Using Data from Image) */}
      <section id="contato" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-[3rem] p-8 lg:p-16 border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-8">Onde nos encontrar</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <MapPin className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Endereço</p>
                      <p className="text-lg text-slate-900 font-medium">
                        R. Goiânia, 809 - Nova Brasília<br />
                        Ji-Paraná - RO, 76908-462
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Phone className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Telefone</p>
                      <p className="text-2xl text-slate-900 font-bold">(69) 3421-1908</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                      <Clock className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-1">Horário de Atendimento</p>
                      <p className="text-lg text-slate-900 font-medium">Segunda a Sexta: 08:00 às 18:00</p>
                      <p className="text-sm text-indigo-600 font-bold mt-1">Intervalo: 11:30 às 13:30</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 p-6 bg-indigo-600 rounded-3xl text-white">
                  <p className="text-lg font-bold mb-4">Envie uma mensagem</p>
                  <form 
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const data = Object.fromEntries(formData.entries());
                      try {
                        const response = await fetch('/api/contact', {
                          method: 'POST',
                          headers: { 'Content-Type': 'application/json' },
                          body: JSON.stringify(data),
                        });
                        if (response.ok) {
                          alert('Mensagem enviada com sucesso!');
                          (e.target as HTMLFormElement).reset();
                        }
                      } catch (error) {
                        console.error('Error sending message:', error);
                        alert('Erro ao enviar mensagem. Tente novamente.');
                      }
                    }}
                  >
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Seu Nome" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Seu E-mail" 
                      required 
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                    />
                    <textarea 
                      name="message" 
                      placeholder="Como podemos ajudar?" 
                      required 
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                    ></textarea>
                    <button 
                      type="submit"
                      className="w-full bg-white text-indigo-600 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                    >
                      Enviar Mensagem
                    </button>
                  </form>
                </div>
              </div>

              <div className="h-[400px] lg:h-auto min-h-[400px] rounded-[2rem] overflow-hidden border border-slate-200 shadow-inner bg-slate-200 relative">
                {/* Placeholder for Map */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 p-8 text-center">
                  <MapPin className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-2">Google Maps Plus Code</p>
                  <p className="text-lg font-mono bg-white/50 px-4 py-2 rounded-lg">438G+QW Nova Brasília, Ji-Paraná - RO</p>
                  <div className="mt-8 w-full h-full bg-[url('https://picsum.photos/seed/map/800/800')] bg-cover opacity-30 absolute inset-0 -z-10"></div>
                  <button className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg hover:bg-slate-50 transition-all">
                    Ver no Google Maps
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white w-5 h-5" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900">
                  Conta <span className="text-indigo-600">Ágil</span>
                </span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed">
                Soluções contábeis e empresariais modernas para o empreendedor de Ji-Paraná. Agilidade, tecnologia e confiança em um só lugar.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-slate-900 mb-6">Links Rápidos</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Início</a></li>
                <li><a href="#servicos" className="hover:text-indigo-600 transition-colors">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-indigo-600 transition-colors">Sobre Nós</a></li>
                <li><a href="#contato" className="hover:text-indigo-600 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-indigo-600 transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 flex flex-col md:row items-center justify-between gap-4">
            <p className="text-xs text-slate-400 font-medium">
              © 2026 Conta Ágil Soluções Contábeis e Empresariais. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs text-slate-400 font-bold uppercase tracking-widest">
                <Users className="w-4 h-4" />
                Empresa de Empreendedoras
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
