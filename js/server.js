const horoscope1 = ['you will meet the love of your life', 'is a good day to work on a long term goal', 'is a good day to work on your relationships', 'you will come in to a windfall of money', 'the promotion you are looking for is near', 'is a good day to improve your health'];
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
const updateHoroscope = () => {
    let month = document.getElementById('month').value;
    let day = document.getElementById('day').value;
    let zodiac = '';
    switch (month) {
        case 'january':
            if (day <= 19) {
                zodiac = 'Capricorn'
            } else {
                zodiac = 'Aquarius'
            }
            break;
        case 'february':
            if (day <= 18) {
                zodiac = 'Aquarius'
            } else {
                zodiac = 'Pisces'
            }
            break;
        case 'march':
            if (day <= 20) {
                zodiac = 'Pisces'
            } else {
                zodiac = 'Aries'
            }
            break;
        case 'april':
            if (day <= 19) {
                zodiac = 'Aries'
            } else {
                zodiac = 'Taurus'
            }
            break;
        case 'may':
            if (day <= 20) {
                zodiac = 'Taurus'
            } else {
                zodiac = 'Gemini'
            }
            break;
        case 'june':
            if (day <= 21) {
                zodiac = 'Gemini'
            } else {
                zodiac = 'Cancer'
            }
            break;
        case 'july':
            if (day <= 22) {
                zodiac = 'Cancer'
            } else {
                zodiac = 'Leo'
            }
            break;
        case 'august':
            if (day <= 22) {
                zodiac = 'Leo'
            } else {
                zodiac = 'Virgo'
            }
            break;
        case 'september':
            if (day <= 22) {
                zodiac = 'Virgo'
            } else {
                zodiac = 'Libra'
            }
            break;
        case 'october':
            if (day <= 23) {
                zodiac = 'Libra'
            } else {
                zodiac = 'Scorpio'
            }
            break;
        case 'november':
            if (day <= 21) {
                zodiac = 'Scorpio'
            } else {
                zodiac = 'Saggitarius'
            }
            break;
        case 'december':
            if (day <= 21) {
                zodiac = 'Saggitarius'
            } else {
                zodiac = 'Capricorn'
            }
            break;
    }
    let message = document.getElementById('message');
    message.setAttribute('display', 'block');
    message.innerHTML = randomHoroscope(zodiac);
    return false;
}