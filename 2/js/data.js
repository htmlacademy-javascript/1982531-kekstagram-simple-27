import {getRandomInteger} from './util.js';
const MIN_RANDOM_LIKES = 15;
const MAX_RANDOM_LIKES = 200;
const MIN_RANDOM_COMMENTS = 0;
const MAX_RANDOM_COMMENTS = 200;
const SIMILAR_POST_COUNT = 25;
const LIST_DESCRIPTION = [
  'Поездка на море ничего не исправит, поездка в другой город ничего не исправит, выпивка ничего не исправит, всё исправишь только ты сам',
  'Мелочи в жизни имеют огромное значение. Если для вас это мелочь, для другого это может многое значить',
  'Каждый день вспоминай о том, как ты счастлив, и каждый твой день будет лучше предыдущего',
  'Я верю только в себя, в сегодняшний день и свои возможности',
  'Меня трудно найти, легко потерять и невозможно забыть',
  'Самая красивая звезда сияет ярче всех остальных'
];

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: LIST_DESCRIPTION[getRandomInteger(0, LIST_DESCRIPTION.length - 1)],
  likes: getRandomInteger(MIN_RANDOM_LIKES, MAX_RANDOM_LIKES),
  comments: getRandomInteger(MIN_RANDOM_COMMENTS, MAX_RANDOM_COMMENTS)
});
const createPosts = () => Array.from({length: SIMILAR_POST_COUNT}, (_, idIndex) => createPost(idIndex + 1));

export {createPosts};
