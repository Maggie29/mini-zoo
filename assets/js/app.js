var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
select.onchange= function(){
  if(select.value == "original"){
    for(i=0; i<img.length; i++){
      img[i].classList.remove("sepia");
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.add("original");
    }
  }
  if(select.value == "sepia"){
    for(j=0; j<img.length; j++){
      img[j].classList.remove("blanco-negro");
      img[j].classList.remove("original");
      img[j].classList.remove("invertir-colores");
      img[j].classList.add("sepia");
    }
  }
  if(select.value == "blanco-negro"){
    for(l=0; l<img.length; l++){
      img[l].classList.remove("sepia");
      img[l].classList.remove("original");
      img[l].classList.remove("invertir-colores");
      img[l].classList.add("blanco-negro");
    }
  }
  if(select.value == "invertir-colores"){
    for(m=0; m<img.length; m++){
      img[m].classList.remove("sepia");
      img[m].classList.remove("blanco-negro");
      img[m].classList.remove("original");
      img[m].classList.add("invertir-colores");
    }
  }
}
