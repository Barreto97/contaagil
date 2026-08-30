import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');

test('homepage targets local accounting intent in Ji-Paraná', () => {
  assert.match(html, /<html lang="pt-BR">/);
  assert.match(html, /<title>[^<]*Contabilidade em Ji-Paraná[^<]*<\/title>/i);
  assert.match(html, /name="description"[^>]*Ji-Paraná/i);
  assert.match(html, /property="og:title"/i);
  assert.match(html, /name="robots" content="index, follow/i);
  assert.match(html, /application\/ld\+json/i);
  assert.match(html, /AccountingService/i);
  assert.match(html, /R\. Goiânia, 809/i);
  assert.match(html, /\+55 69 3421-1908/i);
});
