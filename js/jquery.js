import randomHoroscope from "./server.js";

jQuery(()=> {
    let month = document.getElementById('month');
    let day = document.getElementById('day');
    month.addEventListener('change', () => {
        if(month.value == 'february'){
            alert('month has changed');
            day.setAttribute('max','28');           
        } else if(month.value == 'april' || month.value == 'june' || month.value == 'september' || month.value == 'november'){
            day.setAttribute('max', '30');
        }else {
            day.setAttribute('max', '31');
        }
    });
    let submit = document.getElementById('submit');
    submit.onsubmit((month, day) => {
        let zodiac = '';
        switch (month) {
            case 'january':
                if(day<=19){
                    zodiac = 'Capricorn'
                }else {
                    zodiac = 'Aquarius'
                }
                break;
            case 'february':
                if(day<=18){
                    zodiac = 'Aquarius'
                }else {
                    zodiac = 'Pisces'
                }
                break;
            case 'march':
                if(day<=20){
                    zodiac = 'Pisces'
                }else {
                    zodiac = 'Aries'
                }
                break;
            case 'april':
                if(day<=19){
                    zodiac = 'Aries'
                }else {
                    zodiac = 'Taurus'
                }
                break;
            case 'may':
                if(day<=20){
                    zodiac = 'Taurus'
                }else {
                    zodiac = 'Gemini'
                }
                break;
            case 'june':
                if(day<=21){
                    zodiac = 'Gemini'
                }else {
                    zodiac = 'Cancer'
                }
                break;
            case 'july':
                if(day<=22){
                    zodiac = 'Cancer'
                }else {
                    zodiac = 'Leo'
                }
                break;
            case 'august':
                if(day<=22){
                    zodiac = 'Leo'
                }else {
                    zodiac = 'Virgo'
                }
                break;
            case 'september':
                if(day<=22){
                    zodiac = 'Virgo'
                }else {
                    zodiac = 'Libra'
                }
                break;
            case 'october':
                if(day<=23){
                    zodiac = 'Libra'
                }else {
                    zodiac = 'Scorpio'
                }
                break;
            case 'november':
                if(day<=21){
                    zodiac = 'Scorpio'
                }else {
                    zodiac = 'Saggitarius'
                }
                break;
            case 'december':
                if(day<=21){
                    zodiac = 'Saggitarius'
                }else {
                    zodiac = 'Capricorn'
                }
                break;
        }
        let message = document.createElement('p');
        message.innerHTML = randomHoroscope(zodiac);
        document.body.append(message);
    })
})