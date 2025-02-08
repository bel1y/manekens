function toggleOptions(event) {
    const select = event.currentTarget;
    select.classList.toggle('open');
}

function selectOption(event, page) {
    const select = document.querySelector('.select');
    select.textContent = event.currentTarget.textContent;
    select.classList.remove('open');
    if (page) {
        window.location = `/${page}`;
    }
}

// Закрытие списка при клике вне селекта
document.addEventListener('click', function(event) {
    const selectWrapper = document.querySelector('.select-wrapper');
    if (!selectWrapper.contains(event.target)) {
        const select = document.querySelector('.select');
        select.classList.remove('open');
    }
});

function openmenu() {
    document.querySelector(".media-menu-navabr").style = "top:0;";
}

function closemenu() {
    document.querySelector(".media-menu-navabr").style = "top:-1000000px;";
}