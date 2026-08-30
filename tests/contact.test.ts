import test from 'node:test';
import assert from 'node:assert/strict';
import { buildWhatsAppUrl } from '../src/contact';

test('buildWhatsAppUrl encodes contact details for Conta Ágil WhatsApp', () => {
  const url = buildWhatsAppUrl({
    nome: 'João da Silva',
    telefone: '(69) 99999-0000',
    email: 'joao@example.com',
    mensagem: 'Quero abrir uma empresa em Ji-Paraná',
  });

  assert.match(url, /^https:\/\/wa\.me\/556934211908\?text=/);
  const text = decodeURIComponent(url.split('text=')[1]);
  assert.match(text, /João da Silva/);
  assert.match(text, /\(69\) 99999-0000/);
  assert.match(text, /joao@example\.com/);
  assert.match(text, /abrir uma empresa em Ji-Paraná/);
});
