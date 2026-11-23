import { encode, alpha } from '@shieldfont/core';
import type { PreprocessorGroup, Processed, MarkupPreprocessor } from 'svelte/compiler';

export function shieldFontPreprocessor(): PreprocessorGroup {
  const markupHandler: MarkupPreprocessor = ({ content }: { content: string; filename?: string }): Processed | undefined => {
    const shieldRegex: RegExp = /<shield-font>([\s\(\S\)]*?)<\/shield-font>/g;
    const matches: RegExpMatchArray[] = Array.from(content.matchAll(shieldRegex));
    
    if (matches.length === 0) {
      return undefined;
    }

    let processedContent: string = content;

    for (let i: number = matches.length - 1; i >= 0; i--) {
      const match: RegExpMatchArray = matches[i];
      const fullMatch: string = match[0];
      const plaintext: string = match[1];

      const encodedText: string = encode(plaintext, alpha);
      const replacement: string = `<span class="tk9" aria-hidden="true">${encodedText}</span>`;

      const matchIndex: number | undefined = match.index;
      if (typeof matchIndex === 'number') {
        processedContent = 
          processedContent.slice(0, matchIndex) + 
          replacement + 
          processedContent.slice(matchIndex + fullMatch.length);
      }
    }

    return { code: processedContent };
  };

  return {
    name: 'sveltekit-shieldfont-preprocessor',
    markup: markupHandler
  };
}
