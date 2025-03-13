const btnDarkMode = document.querySelector(".dark_mode-btn"); /* находим кнопку */

// Проверка темной темы на уровне системы

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.add("dark_mode-btn__active");
    document.body.classList.add("dark");
}


//Проверка темной темы в localStorage

if (localStorage.getItem('darkMode') === 'dark') {
    btnDarkMode.classList.add("dark_mode-btn__active"); 
    document.body.classList.add('dark'); 
} else if (localStorage.getItem('darkMode') === 'ligth') {
    btnDarkMode.classList.remove("dark_mode-btn__active"); 
    document.body.classList.remove('dark');
}



//Если меняются системные настройки, меняем тему

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', () => {
    const newColorScheme = event.matches ? "dark" : "ligth";

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add("dark_mode-btn__active");
        document.body.classList.add("dark");
        localStorage.setItem("darkMode", "dark");
    } else {
        btnDarkMode.classList.remove("dark_mode-btn__active");
        document.body.classList.remove("dark");
        localStorage.setItem("darkMode", "ligth");
    }
})

// Включение темной темы

btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle("dark_mode-btn__active"); 
    const isDark = document.body.classList.toggle("dark"); 

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'ligth');
    }
}