function parse(qs) {
  const queryString = qs.substr(1);
  const chunks = qs.split('&');
  const result = chunks.map((chunk) => {
    const [key, value] = chunk.split('=');
    return { key: key, value: value };
  });
  return result;
}

console.log(parse('banana=10&apple=20&orange=30'));
