const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(makeBig);
}

function makeBig(string) {
  const words = string.split(" ");
  let newString = ""
 for (let i = 0; i < words.length; i++) {
   
  newString += words[i].charAt(0).toUpperCase() + words[i].slice(1);
  if (i !== words.length - 1) {
    newString += " "
  }
}
  return newString
}

// makeBig(titleCased()[0])

// const array = titleCased().map(makeBig);