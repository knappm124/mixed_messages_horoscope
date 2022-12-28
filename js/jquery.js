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
    })
})