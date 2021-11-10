// Random Astrology Generator
//lists of Arrays
const signs = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];
const feeling = [
  "lucky",
  "unlucky",
  "dead",
  "happy",
  "sad",
  "miserable",
  "fortunate",
  "missing",
];
const happening = [
  "avoid trees",
  "trust noone",
  "go underground",
  "leave your room",
  "go to work",
  "have a takeaway",
  "fly abroad",
];

function randomArr(array) {
  return Math.floor(Math.random() * (array.length - 1));
}
function sentanceConstructor() {
  const rand1 = randomArr(signs);
  const rand2 = randomArr(feeling);
  const rand3 = randomArr(happening);
  return `your sign is: ${signs[rand1]} \n you are ${feeling[rand2]} \n you should ${happening[rand3]} today.`;
}
console.log(sentanceConstructor());
