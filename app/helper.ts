function tokenize(text: string): string[] {
  const tokens: string[] = [];
  const parts = text.split(/(\s+)/); // incluye los espacios como partes

  for (const part of parts) {
    if (!part.trim()) {
      tokens.push(part); // espacios
      continue;
    }

    // junta palabra con puntuación final (.,!?)
    const match = part.match(/^(.+?)([.,!?:])?$/);
    if (match) {
      const [, word, punctuation] = match;
      if (word) tokens.push(word + (punctuation || ""));
    } else {
      tokens.push(part);
    }
  }

  return tokens;
}


export default tokenize