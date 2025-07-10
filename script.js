<!DOCTYPE html>
<html>
<head>
  <title>Text Translator</title>
</head>
<body>
  <h2>Standard Translation</h2>
  <textarea id="inputText" placeholder="Enter text..."></textarea><br>
  <button onclick="translateText()">Translate</button>
  <p><strong>Output:</strong> <span id="outputText"></span></p>

  <h2>Mushmellow Translation</h2>
  <textarea id="mushmellowText" placeholder="Enter mushmellow text..."></textarea><br>
  <button onclick="translateMushmellow()">Mushmellow Translate</button>
  <p><strong>Mushmellow Output:</strong> <span id="mushmellowOutput"></span></p>

  <script>
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

    function translateMushmellow() {
      const mushMap = {
        a: 'UGH UGH, WRONGGGG', b: 'v', c: 'x', d: 's', e: 'w', f: 'd',
        g: 'f', h: 'g', i: 'u', j: 'h', k: 'j', l: 'k', m: 'n', n: 'b',
        o: 'i', p: 'o', q: 'ALSO WRONNGGG', r: 'e', s: 'a', t: 'r',
        u: 'y', v: 'c', w: 'q', x: 'z', y: 't', z: 'WHY KEEP WRONG'
      };

      let input = document.getElementById('mushmellowText').value;
      let output = '';

      for (let char of input) {
        let lower = char.toLowerCase();
        if (mushMap.hasOwnProperty(lower)) {
          let translated = mushMap[lower];
          output += (char === char.toUpperCase()) ? translated.toUpperCase() : translated;
        } else {
          output += char;
        }
      }

      document.getElementById('mushmellowOutput').innerText = output;
    }
  </script>
</body>
</html>
