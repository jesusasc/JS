function Comprobar() {
    if (document.getElementById("nombre").value=="") {
    alert("Debes rellenar el nombre"); 
    return false;
    }
    if (document.getElementById("nombre").value.length<5) {
    alert("El nombre debe tener al menos 5 caracteres"); 
    return false;
    }
    if (document.getElementById("email").value=="") {
    alert("Debes poner un email");
    return false;
    }
    if (document.getElementById("Tel").value=="") {
        alert("Debes de rrellenar el campo de telefono")
        return false;
    }
    if (document.getElementById("Sugerencias").value=="") {
        alert("Debe de rellenar el campo de Sugerencias")
        return false;
    }
    //return true;
    alert(getElementById("nombre").value + getElementById("email").value)
    
}

//Validar Solo letras
function Nombre() {
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
     event.returnValue = false;
   }

//Validar solo numeros en la caja de texto Tel
function soloNumeros(e){
    var key = window.Event ? e.which : e.keyCode
    return (key >= 48 && key <= 57)
}