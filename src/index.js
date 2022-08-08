const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let string = [];
    let sentence = [];
        for (i = 0; i<expr.length; i+=10){
            let char = expr.slice(i, i+10);
            string.push(char);
        }   
        for(index in string){
            let splited = string[index].split('').reverse().join('').replace(/01/g, '.').replace(/11/g, '-').replace(/0/g, '').split('').reverse().join('');
            splited == '**********' ? sentence.push(' ') : sentence.push(MORSE_TABLE[splited]);
        }
        return sentence.join('');
}

module.exports = {
    decode
}