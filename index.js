document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn')
    const menuIcon = document.getElementById('menu-icon')
    const MenuLinks = document.getElementById('menu-links')

    if(menuBtn && menuIcon && MenuLinks){
        menuBtn.addEventListener('click', () => {
            MenuLinks.classList.toggle('hidden')
            MenuLinks.classList.toggle('flex')

            if(MenuLinks.classList.contains('hidden')){
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
            }else {
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12')
            }
        })

        const individualLink = MenuLinks.querySelectorAll('a')
        individualLink.forEach(link => {
            link.addEventListener('click', () => {
                if(window.innerWidth < 768){
                    MenuLinks.classList.add('hidden')
                    MenuLinks.classList.remove('flex')
                    menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16')
                }
            })
        })
    }
})