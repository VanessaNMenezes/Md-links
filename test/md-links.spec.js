const mdLinks = require('../index');

describe('mdLinks', () => {
  describe('when the file does not have Markdown format', () => {
    it('should reject the promise with an error message', () => {
      const path = '.otherformat.html';
      const options = {};
      const result = mdLinks(path, options);

      return expect(result).rejects.toThrowError('❌ O arquivo ".otherformat.html" não é um arquivo em formato Markdown! ❌');
    });
  });

  test('Should reject promise if error reading file', () => {
    expect(mdLinks('./nonexistent-folder/file.md')).rejects.toThrow(/O arquivo ".+" não existe ou está vazio!/);
  });

it('should return an array of objects with href, text, and file properties when validate option is false and the file contains valid links', () => {
  const pathFile = 'files/texts.md';
  const options = { validate: false };

  return mdLinks(pathFile, options).then((links) => {
    expect(links).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          href: expect.any(String),
          text: expect.any(String),
          file: pathFile,
        }),
      ])
    );
  });
});
});

test('Should return an array with objects containing href, text, file, status and ok properties when validate option is true and file has valid links', () => {
  return mdLinks('files/texts.md', { validate: true })
    .then((result) => {
      expect(Array.isArray(result)).toBe(true);
      expect(result).toHaveLength(7);
      expect(result[0]).toHaveProperty('file'); // toHaveProperty para verificar se a propriedade fornecida na referênci existe para um objeto. 
      expect(result[0]).toHaveProperty('href');
      expect(result[0]).toHaveProperty('ok');
      expect(result[0]).toHaveProperty('status');
      expect(result[0]).toHaveProperty('text');
    });
});

test('Should reject promise if file has no links', () => {
  expect(mdLinks('./nolinks.md')).rejects.toThrow(/O arquivo não contém links/);
});

  test('Should return a formatted table with the links found and validated if the validate option is true', () => {
    mdLinks('files/texts.md', { validate: true })
      .then((result) => {
        expect(result).toMatch(/HREF\sTexto\sArquivo\sStatus\sOK/);
        expect(result).toMatch(/https:\/\/hostinger.com.br\/tutoriais\/o-que-e-npm\sNode.js\s.*?\/files\/texts\.md\s200\sOK/);
        expect(result).toMatch(/https:\/\/esselinkestaquebrado.naofunciona.com\sLink inválido\s.*?\/files\/texts\.md\s404\sFAIL/);
      });
  });