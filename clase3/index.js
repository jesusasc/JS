function enviar(f){
    var select = document.getElementById("Edad").value;
    //Mensaje
   
    //Radio Button
    if (document.getElementById('M').checked) {
        var selectS = document.getElementById('M').value;
        //alert("Se selecciono el radio: "+selectS);
    }
    if (document.getElementById('F').checked) {
        var selectS = document.getElementById('F').value;
    }
    const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[name="color"]:checked');
            let values = [];
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.value);
            });
            alert("\n Sus Hobbies son: " + values);
        });
    //Mostrar Mensaje
    alert("Su nombre es: "+document.getElementById("Nombre").value+"\ntiene: "+(select)+" años"+"\nTipo de Sexo: "+(selectS))

    
}


