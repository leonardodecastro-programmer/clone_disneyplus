document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]') 


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(butao) {
            const abAlvo = butao.target.dataset.tabButton;
        })
    }
})

function escondeTodasAbas