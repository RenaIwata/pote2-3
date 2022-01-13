document.addEventListener('DOMContentLoaded', function () {

    const valInput = document.getElementById('js-val-input');
    const valKey = document.querySelectorAll('.js-val-key');
    let textKey = "";

    for (let i = 0; i < valKey.length; i++) {
        valInput.addEventListener('input', (e) => {
            textKey = valKey[i].textContent;
            if(textKey.includes(valInput.value)) {
                valKey[i].closest('li').style.display = 'block';       
            } else {
                valKey[i].closest('li').style.display = 'none';  
            }
        });
    }
});