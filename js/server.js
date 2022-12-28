const horoscope1 = ['you will meet the love of your life','is a good day to work on a long term goal','is a good day to work on your relationships','you will come in to a windfall of money','the promotion you are looking for is near','is a good day to improve your health'];
const horoscope2 = ['romance', 'money', 'your career goals', 'family bonding', 'friendships', 'personal goals', 'your health'];

const randomArrayItem = array => {
    let length = array.length;
    let random = Math.floor(Math.random() * length);
    return array[random];
}

const randomHoroscope = (zodiac) => {
    let first = randomArrayItem(horoscope1);
    let second = randomArrayItem(horoscope2);
    return `${zodiac}: Today ${first}. It will also be a good day for ${second}.`;
}

export default randomHoroscope;