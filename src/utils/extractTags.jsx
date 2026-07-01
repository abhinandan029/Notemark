export function extractTags(text){
  if (!text) {
    return [];
  }

  const matches = text.match(/#[a-zA-Z0-9_]+/g);
  return matches || [];
} 