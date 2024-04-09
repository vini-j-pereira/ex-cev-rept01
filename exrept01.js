let ini = document.getElementById('txtcontI')
let fim = document.getElementById('txtcontF')
let pas = document.getElementById('textpass')
res = document.getElementById('res')



function contar(){

    let iniR = Number(txtcontI.value)
    let fimR = Number(txtcontF)

    for (ini = iniR; ini <= fimR; ini++){
       console.log(ini) 
    }
}