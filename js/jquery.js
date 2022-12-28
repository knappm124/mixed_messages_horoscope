jQuery(()=> {
    let month = document.getElementById('month');
    let day = document.getElementById('day');
    month.addEventListener('change', () => {
        switch ($('#month').val) {
            case 'february':
                day.attr('max','28');
                break;
            case 'april':
                day.attr('max', '30');
                break;
            case 'june':
                day.attr('max', '30');
                break;
            case 'september':
                day.attr('max', '30');
                break;
            case 'november':
                day.attr('max', '30');
                break;
            default:
                day.attr('max', '31');
                break;
        }
    })
})