import { useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileCheck2,
  Landmark,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  X,
} from 'lucide-react';
import { buildWhatsAppUrl, WHATSAPP_NUMBER } from './contact';

const services = [
  {
    icon: Building2,
    title: 'Abertura de empresa em Ji-Paraná',
    description: 'Orientação para abrir seu CNPJ com enquadramento adequado e menos burocracia desde o início.',
  },
  {
    icon: ReceiptText,
    title: 'Contabilidade para empresas',
    description: 'Rotinas contábeis, fiscais e empresariais com acompanhamento próximo para você decidir com segurança.',
  },
  {
    icon: Calculator,
    title: 'Contabilidade para MEI',
    description: 'Apoio com DAS, declaração anual, regularização e orientação para o crescimento do seu negócio.',
  },
  {
    icon: Landmark,
    title: 'Planejamento tributário',
    description: 'Análise do regime e da operação para buscar eficiência tributária dentro da legislação.',
  },
  {
    icon: FileCheck2,
    title: 'Troca de contador',
    description: 'Acompanhamento da transição contábil para sua empresa mudar de escritório com organização.',
  },
  {
    icon: Smartphone,
    title: 'Atendimento local e digital',
    description: 'Proximidade de um escritório em Ji-Paraná com a praticidade do atendimento pelo WhatsApp.',
  },
];

const faq = [
  {
    question: 'A Conta Ágil atende empresas em Ji-Paraná?',
    answer: 'Sim. A Conta Ágil está em Ji-Paraná e atende empresas, MEIs e profissionais com suporte contábil local e digital.',
  },
  {
    question: 'Vocês fazem abertura de empresa em Ji-Paraná?',
    answer: 'Sim. O atendimento inclui orientação para abertura do CNPJ e definição do enquadramento mais adequado à atividade da empresa.',
  },
  {
    question: 'Posso trocar de contador e ir para a Conta Ágil?',
    answer: 'Sim. A equipe pode orientar a transição e a documentação necessária para que a mudança seja organizada.',
  },
  {
    question: 'A Conta Ágil atende MEI?',
    answer: 'Sim. O atendimento contempla rotinas do MEI, incluindo DAS, declaração anual e orientações sobre regularização e crescimento.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer: 'Os dois formatos são possíveis. Você pode falar pelo WhatsApp e também encontrar a Conta Ágil na Rua Goiânia, 809, Nova Brasília, Ji-Paraná.',
  },
];

function WhatsAppLink({ children, className = '' }: { children: ReactNode; className?: string }) {
  const message = encodeURIComponent('Olá! Vim pelo site da Conta Ágil e gostaria de falar com um contador em Ji-Paraná.');
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', mensagem: '' });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const url = buildWhatsAppUrl(form);
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl bg-emerald-700 p-6 text-white shadow-xl sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">Atendimento rápido</p>
      <h3 className="mt-2 text-2xl font-bold">Fale com a Conta Ágil pelo WhatsApp</h3>
      <p className="mt-2 text-sm leading-6 text-emerald-100">Preencha os dados e continue a conversa diretamente no WhatsApp.</p>

      <div className="mt-6 space-y-4">
        <input
          name="nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          placeholder="Seu nome"
          autoComplete="name"
          required
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-emerald-100/70 focus:border-white focus:ring-2 focus:ring-white/30"
        />
        <input
          name="telefone"
          value={form.telefone}
          onChange={(e) => setForm({ ...form, telefone: e.target.value })}
          placeholder="Seu telefone"
          autoComplete="tel"
          required
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-emerald-100/70 focus:border-white focus:ring-2 focus:ring-white/30"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Seu e-mail (opcional)"
          autoComplete="email"
          className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-emerald-100/70 focus:border-white focus:ring-2 focus:ring-white/30"
        />
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
          placeholder="Ex.: quero abrir uma empresa, trocar de contador..."
          rows={4}
          required
          className="w-full resize-none rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-white outline-none placeholder:text-emerald-100/70 focus:border-white focus:ring-2 focus:ring-white/30"
        />
      </div>

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 font-bold text-emerald-800 transition hover:bg-emerald-50"
      >
        Continuar no WhatsApp <MessageCircle className="h-5 w-5" />
      </button>
    </form>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button onClick={() => scrollTo('inicio')} className="flex items-center gap-3" aria-label="Ir para o início">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-100">
              <TrendingUp className="h-6 w-6" />
            </span>
            <span className="text-xl font-extrabold tracking-tight">Conta <span className="text-emerald-600">Ágil</span></span>
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
            <button onClick={() => scrollTo('servicos')} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">Serviços</button>
            <button onClick={() => scrollTo('contabilidade-ji-parana')} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">Ji-Paraná</button>
            <button onClick={() => scrollTo('faq')} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">Dúvidas</button>
            <button onClick={() => scrollTo('contato')} className="text-sm font-semibold text-slate-600 hover:text-emerald-700">Contato</button>
            <WhatsAppLink className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-700">
              Falar no WhatsApp
            </WhatsAppLink>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-slate-200 p-2.5 md:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-slate-100 bg-white px-4 py-4 md:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {[
                ['servicos', 'Serviços'],
                ['contabilidade-ji-parana', 'Contabilidade em Ji-Paraná'],
                ['faq', 'Dúvidas'],
                ['contato', 'Contato'],
              ].map(([id, label]) => (
                <button key={id} onClick={() => scrollTo(id)} className="rounded-lg px-3 py-3 text-left font-semibold text-slate-700 hover:bg-slate-50">
                  {label}
                </button>
              ))}
              <WhatsAppLink className="mt-2 rounded-xl bg-emerald-600 px-5 py-3 text-center font-bold text-white">
                Falar no WhatsApp
              </WhatsAppLink>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-emerald-50 via-white to-slate-50 py-20 sm:py-28">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-100/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-800 shadow-sm">
                <MapPin className="h-4 w-4" /> Contabilidade em Ji-Paraná • Rondônia
              </div>
              <h1 className="mt-7 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Contabilidade em Ji-Paraná para sua empresa crescer com mais segurança
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Abertura de empresa, MEI, troca de contador, planejamento tributário e rotinas contábeis com atendimento local e digital em Ji-Paraná.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-4 font-bold text-white shadow-lg shadow-emerald-100 transition hover:bg-emerald-700">
                  Falar com um contador <ArrowRight className="h-5 w-5" />
                </WhatsAppLink>
                <button onClick={() => scrollTo('servicos')} className="rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-slate-800 transition hover:border-emerald-300 hover:text-emerald-700">
                  Ver serviços contábeis
                </button>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-3">
                {['Atendimento em Ji-Paraná', 'Suporte pelo WhatsApp', 'Soluções para MEI e empresas'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-2xl shadow-emerald-100/60 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Conta Ágil em Ji-Paraná</p>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-950">Contabilidade próxima quando você precisa</h2>
              <p className="mt-4 leading-7 text-slate-600">Tenha orientação contábil para cuidar da rotina da empresa e das decisões que impactam impostos, regularidade e crescimento.</p>

              <div className="mt-7 space-y-4">
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">Rua Goiânia, 809</p><p className="text-sm text-slate-600">Nova Brasília • Ji-Paraná/RO • 76908-462</p></div>
                </div>
                <a href="tel:+556934211908" className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4 transition hover:bg-emerald-50">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">(69) 3421-1908</p><p className="text-sm text-slate-600">Telefone e atendimento comercial</p></div>
                </a>
                <div className="flex items-start gap-4 rounded-2xl bg-slate-50 p-4">
                  <Clock3 className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">Segunda a sexta</p><p className="text-sm text-slate-600">08:00 às 18:00 • intervalo 11:30 às 13:30</p></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Serviços contábeis</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Soluções contábeis para empresas e MEIs de Ji-Paraná</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Do primeiro CNPJ à rotina fiscal e tributária, a Conta Ágil ajuda você a organizar o negócio e tomar decisões com mais clareza.</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map(({ icon: Icon, title, description }) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contabilidade-ji-parana" className="bg-slate-950 py-20 text-white sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">Contador em Ji-Paraná</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Por que ter uma contabilidade que conhece sua realidade local?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">Ter um contador em Ji-Paraná facilita o contato, a troca de documentos e o acompanhamento da empresa. A Conta Ágil combina essa proximidade com atendimento digital para tornar a rotina mais simples.</p>
              <p className="mt-5 leading-7 text-slate-300">O objetivo é ajudar sua empresa a manter obrigações organizadas, entender melhor sua situação tributária e ter apoio para decisões como abertura, mudança de regime ou troca de contador.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Empresas locais', 'Contabilidade para comércio, serviços e outros negócios de Ji-Paraná.'],
                ['MEI', 'Orientação para rotina, regularização e evolução do microempreendedor.'],
                ['Novos negócios', 'Apoio para começar com CNPJ e enquadramento organizados.'],
                ['Empresas em mudança', 'Suporte para quem quer trocar de contador e revisar a rotina contábil.'],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <ShieldCheck className="h-6 w-6 text-emerald-400" />
                  <h3 className="mt-4 text-lg font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 sm:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Perguntas frequentes</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Dúvidas sobre contabilidade em Ji-Paraná</h2>
            </div>

            <div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
              {faq.map((item) => (
                <details key={item.question} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-emerald-600 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 max-w-3xl leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="bg-slate-50 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start lg:px-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Contato</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Procura um escritório de contabilidade em Ji-Paraná?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Conte o que sua empresa precisa. A conversa começa pelo WhatsApp e você já envia as principais informações para agilizar o atendimento.</p>

              <div className="mt-8 space-y-4">
                <a href="https://maps.google.com/?q=R.+Goiânia,+809+-+Nova+Brasília+Ji-Paraná+RO" target="_blank" rel="noreferrer" className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200">
                  <MapPin className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">Endereço</p><p className="mt-1 text-slate-600">R. Goiânia, 809 - Nova Brasília, Ji-Paraná - RO, 76908-462</p></div>
                </a>
                <a href="tel:+556934211908" className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200">
                  <Phone className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">Telefone</p><p className="mt-1 text-slate-600">(69) 3421-1908</p></div>
                </a>
                <a href="mailto:contato@contaagil.com.br" className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-emerald-200">
                  <Mail className="mt-1 h-6 w-6 shrink-0 text-emerald-600" />
                  <div><p className="font-bold">E-mail</p><p className="mt-1 text-slate-600">contato@contaagil.com.br</p></div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 text-sm text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <p className="font-bold text-slate-900">Conta Ágil Soluções Contábeis e Empresariais</p>
            <p className="mt-1">Contabilidade em Ji-Paraná • Rondônia</p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <button onClick={() => scrollTo('servicos')} className="hover:text-emerald-700">Serviços</button>
            <button onClick={() => scrollTo('faq')} className="hover:text-emerald-700">Dúvidas</button>
            <button onClick={() => scrollTo('contato')} className="hover:text-emerald-700">Contato</button>
          </div>
          <p>© 2026 Conta Ágil. Todos os direitos reservados.</p>
        </div>
      </footer>

      <WhatsAppLink className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition hover:scale-105 hover:bg-emerald-700">
        <MessageCircle className="h-7 w-7" />
        <span className="sr-only">Falar com a Conta Ágil no WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}
