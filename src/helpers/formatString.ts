function splitString(text: string) {
  if (text.length > 50) {
    return `${text.substring(0, 50)}...`;
  }
  return text;
}

export { splitString };
