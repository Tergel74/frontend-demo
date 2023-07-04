const links = document.querySelectorAll('.link');
const path = window.location.pathname;

links.forEach(link => {
    if (link.href.includes(path)) {
        link.classList.add('active')
    }
})

