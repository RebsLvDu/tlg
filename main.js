const btn = document.getElementById('btn')
const macaco = document.getElementById('macaco')

btn.addEventListener('click', function() {
    if (macaco.style.display === 'none') {
        macaco.style.display = 'block';
    }
    else {
        macaco.style.display = 'none';
    }
});
