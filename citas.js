function Captura(){

    const cedulaRegex = /^\d{10}$/;     
    const PaCedula = document.getElementById("identificacion").value;
    const Especialidad = document.getElementById("Especialidad").value;

    if(PaCedula==""){
        alert("El número de cédula es obligatorio")
        Document.getElementById("identificacion").focus();
    }else{
        if(Especialidad==""){
            alert("Debe seleccionar una especilidad")
            Document.getElementById("Especialidad").focus();
        }else {
            console.log(PaCedula +" "+Especialidad);
            document.getElementById("identificacion").value="";
            document.getElementById("Especialidad").value="";
            document.getElementById("identificacion").focus();
        }
    }
    if (!cedulaRegex.test(PaCedula)) {
        alert("El número de cédula del paciente es inválido. Debe contener 9 dígitos.");
        return;
    }
    console.log(PaCedula +" "+Especialidad);        
}


