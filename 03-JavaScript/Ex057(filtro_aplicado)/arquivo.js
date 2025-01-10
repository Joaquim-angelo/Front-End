function selecionar(){
    const radios=[...document.querySelectorAll("input[type=radio]")]
    let rad_select=radios.filter((valor)=>{return valor.checked})
    const curso=rad_select.parentNode.previousSibling.textContent
    alert(curso)
}