function translateText() {
  const map = {
    a: 'o', b: 'p', c: 'k', d: 't', e: 'u', f: 'v',
    g: 'k', h: 'h', i: 'y', j: 'd', k: 'g', l: 'r',
    m: 'n', n: 'm', o: 'a', p: 'b', q: 'q', r: 'l',
    s: 'z', t: 'd', u: 'e', v: 'f', w: 'v', x: 'x',
    y: 'i', z: 's'
  };

  let input = document.getElementById('inputText').value;
  let output = '';

  for (let char of input) {
    let lower = char.toLowerCase();
    if (map[lower]) {
      let translated = map[lower];
      output += (char === char.toUpperCase()) ? translated.toUpperCase() : translated;
    } else {
      output += char;
    }
  }

  document.getElementById('outputText').innerText = output;
}
