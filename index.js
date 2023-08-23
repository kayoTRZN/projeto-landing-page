var setae = document.getElementById("seta-esquerda")
var leo = document.getElementById("leo")
var sam = document.getElementById("sam")
var bru = document.getElementById("bru")
var setad = document.getElementById("seta-direita")

function rolarPdireita() {
    leo.style = "display:none"
    bru.style = "display:flex"
    setad.style = "display:none"
    setae.style = "display:flex; margin-top: 55px"

}
function rolarPesquerda(){
    bru.style = "display:none"
    leo.style = "display:flex"
    setad.style = "display:flex;margin-top: 55px"
    setae.style = "display:none"

}
