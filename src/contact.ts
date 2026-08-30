export type ContactData = {
  nome: string;
  telefone: string;
  email?: string;
  mensagem: string;
};

export const WHATSAPP_NUMBER = '556934211908';

export function buildWhatsAppUrl({ nome, telefone, email, mensagem }: ContactData) {
  const lines = [
    'Olá! Vim pelo site da Conta Ágil.',
    '',
    `Nome: ${nome.trim()}`,
    `Telefone: ${telefone.trim()}`,
    email?.trim() ? `E-mail: ${email.trim()}` : null,
    '',
    `Como posso ser ajudado: ${mensagem.trim()}`,
  ].filter(Boolean);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`;
}
