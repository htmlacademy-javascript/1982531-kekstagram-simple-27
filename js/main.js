const MIN_RANDOM_NUMBER = 6;
const MAX_RANDOM_NUMBER = 9;
const NUMBERS_AFTER_COMMA = 4;
const MIN_RANDOM_LIKES = 15;
const MAX_RANDOM_LIKES = 200;
const MIN_RANDOM_COMMENTS = 0;
const MAX_RANDOM_COMMENTS = 200;
const LIST_DESCRIPTION = [
  'Поездка на море ничего не исправит, поездка в другой город ничего не исправит, выпивка ничего не исправит, всё исправишь только ты сам',
  'Мелочи в жизни имеют огромное значение. Если для вас это мелочь, для другого это может многое значить',
  'Каждый день вспоминай о том, как ты счастлив, и каждый твой день будет лучше предыдущего',
  'Я верю только в себя, в сегодняшний день и свои возможности',
  'Меня трудно найти, легко потерять и невозможно забыть',
  'Самая красивая звезда сияет ярче всех остальных'
];

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min < 0 || max <= min) {
    return NaN;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomInteger(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);

function getRandomFloat(min, max, comma = 2) {
  const random = Math.random().toFixed(comma) * (max - min) + min;
  if (min >= 0 && max >= min) {
    return random;
  }
  return NaN;
}
getRandomFloat(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, NUMBERS_AFTER_COMMA);


const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: LIST_DESCRIPTION[getRandomInteger(0, LIST_DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_RANDOM_LIKES, MAX_RANDOM_LIKES),
  comments: getRandomInteger(MIN_RANDOM_COMMENTS, MAX_RANDOM_COMMENTS)
});
const similarPost = () => Array.from({length: 25}, (_, idIndex) => createPost(idIndex + 1));

console.log(similarPost());
