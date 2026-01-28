document.addEventListener('DOMContentLoaded', () => {
    filterTabs();
    darkMode();
});

/*=============== FILTERS TABS ===============*/
function filterTabs() {
    const tabs = document.querySelectorAll("[data-target]");
    const tabContents = document.querySelectorAll("[data-content]");

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.target);

            tabContents.forEach(tc => { /* tc = tabcontent */
                tc.classList.remove("filters__active");
            })
            target.classList.add('filters__active');

            tabs.forEach(t => {
                t.classList.remove('filter-tab-active');
            })
            tab.classList.add('filter-tab-active');
        })
    })
}

/*=============== DARK - LIGHT THEME ===============*/
function darkMode() {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    const themeButton = document.getElementById('theme-button');
    const sunIcon = 'ri-sun-line';
    const moonIcon = 'ri-moon-line';

    // Leer preferencias del usuario
    if (prefersDarkMode.matches) {
        document.body.classList.add('dark-theme');
        themeButton.classList.add(sunIcon);
    } else {
        document.body.classList.remove('dark-theme');
        themeButton.classList.add(moonIcon);
    }

    // Escuchar si el usuario cambia la preferencia de dark mode
    prefersDarkMode.addEventListener('change', () => {
        if (prefersDarkMode.matches) {
            document.body.classList.add('dark-theme');
            themeButton.classList.remove(moonIcon);
            themeButton.classList.add(sunIcon);
        } else {
            document.body.classList.remove('dark-theme');
            themeButton.classList.remove(sunIcon);
            themeButton.classList.add(moonIcon);
        }
    });

    // Activar - Desactivar manualmente Dark Mode
    themeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        themeButton.classList.toggle(sunIcon);
    });
}


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1500,
    delay: 400,
})

sr.reveal(`.profile__border`)
sr.reveal(`.profile__name`, { delay: 500 })
sr.reveal(`.profile__profession`, { delay: 550 })
sr.reveal(`.profile__social`, { delay: 600 })
sr.reveal(`.profile__info-group`, { interval: 100, delay: 500 })
sr.reveal(`.profile__buttons`, { delay: 800 })
sr.reveal(`.filters__content`, { delay: 900 })
sr.reveal(`.filters`, { delay: 1000 })