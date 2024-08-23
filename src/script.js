var i = 0
$('.parallax-window').parallax();

function carregou(){
    var load = document.getElementById('loading')
    var con = document.getElementById('conteudo')

    load.style.display = 'none'
    con.style.display = 'block'
}

function mudouT(){
    let menuT = document.querySelector('menu > div')
    if(window.innerWidth > 800){
        menuT.style.display = 'inline-block'
        menuT.style.backgroundColor = 'transparent'
    }
    else{
        menuT.style.display = 'none'
        i = 0
    }
}

function clicou(){
    let menudiv = document.querySelector('menu > div')
    if(i == 0){
        menudiv.style.display = 'block'
        menudiv.style.backgroundColor = 'black'
        i = 1
    }
    else{
        menudiv.style.display = 'none'
        menudiv.style.backgroundColor = 'transparent'
        i = 0
    }
}

window.addEventListener("scroll", function(){
    var header = document.getElementById('header-top')
    if(window.scrollY > 0){
        header.style.backgroundColor = "#0d06007e"
    }
    else{
        header.style.backgroundColor = "transparent"
    }
})