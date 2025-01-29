const selected = document.querySelector('.select-selected');
const items = document.querySelector('.select-items');

selected.addEventListener('click', () => {
    items.style.display = items.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const langText = item.textContent.trim();
        selected.innerHTML = `<img src="${imgSrc}" alt=""> ${langText}`;
        items.style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    if (!selected.contains(e.target) && !items.contains(e.target)) {
        items.style.display = 'none';
    }
});

function Uzbek() {
    window.location="/Uzbekcha.html"
}
function Russian() {
    window.location="/index.html"
}


function openmenu() {
    document.querySelector(".media-menu-navabr").style="top:0;"
}
function closemenu() {
    document.querySelector(".media-menu-navabr").style="top:-1000000px;"
}