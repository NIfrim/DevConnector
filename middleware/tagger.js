const pos = require('pos');
const tagger = new pos.Tagger();

module.exports = function(req, res, next) {
  let words = new pos.Lexer().lex(
    'Gasoline (American English), or petrol (British English), is a colorless petroleum-derived flammable liquid that is used primarily as a fuel in spark-ignited internal combustion engines. It consists mostly of organic compounds obtained by the fractional distillation of petroleum, enhanced with a variety of additives. On average, a 42-U.S.-gallon (160-liter) barrel of crude oil yields about 19 U.S. gallons (72 liters) of gasoline (among other refined products) after processing in an oil refinery, though this varies based on the crude oil assay.'
  );

  let taggedWords = tagger.tag(words);
  taggedWords.forEach((wordWithTag, index) => {
    const word = wordWithTag[0];
    const tag = wordWithTag[1];
    if (tag === 'NN' || tag === 'NNS') {
      console.log(word + ' /' + tag);
    }
  });
};
