function ValidarInfoPaciente(){

    const nameRegex = /^[A-Za-z\s]+$/; 
    const cedulaRegex = /^\d{10}$/; 
    const ageRegex = /^\d+$/;
    const telephoneRegex = /^\d{10}$/; 
      
 
    const pacienteName = document.getElementById("Nombre").value;
    const pacienteLastName = document.getElementById("Apellidos").value;
    const pacienteCedula = document.getElementById("Cedula").value;
    const pacienteSpecialty = document.getElementById("Especialidad").value;
    const pacienteAge = document.getElementById("Edad").value;
    const pacienteTelephone = document.getElementById("Telefono").value;

    if (!nameRegex.test(pacienteName)) {
        alert("El nombre del paciente es inválido.");
        return;
    }
        
    if (!nameRegex.test(pacienteLastName)) {
        alert("El apellido del paciente es inválido.");
        return;
    }
        
    if (!cedulaRegex.test(pacienteCedula)) {
        alert("El número de cédula del paciente es inválido. Debe contener 9 dígitos.");
        return;
    }

    if (!ageRegex.test(pacienteAge)) {
        alert("La edad del paciente es inválido.");
        return;
    }

    if (!telephoneRegex.test(pacienteTelephone)) {
        alert("El número de telefono del paciente es inválido.");
        return;
    }
    captaInforPaciente(pacienteName,pacienteLastName,pacienteCedula,pacienteSpecialty,pacienteAge,pacienteTelephone);
    
}

function captaInforPaciente (pacienteName,pacienteLastName,pacienteCedula,pacienteSpecialty,pacienteAge,pacienteTelephone){
    let paciente = {
        nombre : pacienteName,
        apellidos : pacienteLastName,
        cedula : pacienteCedula,
        especialidad : pacienteSpecialty,
        edad : pacienteAge,
        telefono : pacienteTelephone,
    }

    const JSONObject2 = JSON.stringify(paciente)

    let table = document.createElement('table');
     table.setAttribute("border", "2");
     let tbody = document.createElement('tbody');
     table.appendChild(tbody);
     document.getElementById('body2').appendChild(table);

     let row_1 = document.createElement('tr');
     let heading_1 = document.createElement('th');
     heading_1.innerHTML = "Nombre";
     let heading_2 = document.createElement('td');
     heading_2.innerHTML = pacienteName;
    
     row_1.appendChild(heading_1);
     row_1.appendChild(heading_2);
     tbody.appendChild(row_1);

     let row_2 = document.createElement('tr');
     let heading_3 = document.createElement('th');
     heading_3.innerHTML = "Apellidos";
     let heading_4 = document.createElement('td');
     heading_4.innerHTML = pacienteLastName;
    
     row_2.appendChild(heading_3);
     row_2.appendChild(heading_4);
     tbody.appendChild(row_2);

     let row_3 = document.createElement('tr');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Cédula";
    let heading_6 = document.createElement('td');
    heading_6.innerHTML = pacienteCedula;
   
    row_3.appendChild(heading_5);
    row_3.appendChild(heading_6);
    tbody.appendChild(row_3);

    let row_4 = document.createElement('tr');
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "Especialidad";
    let heading_8 = document.createElement('td');
    heading_8.innerHTML = pacienteSpecialty;
   
    row_4.appendChild(heading_7);
    row_4.appendChild(heading_8);
    tbody.appendChild(row_4);

    let row_5 = document.createElement('tr');
    let heading_9 = document.createElement('th');
    heading_9.innerHTML = "Edad";
    let heading_10 = document.createElement('td');
    heading_10.innerHTML = pacienteAge;
   
    row_5.appendChild(heading_9);
    row_5.appendChild(heading_10);
    tbody.appendChild(row_5);

    let row_6 = document.createElement('tr');
    let heading_11 = document.createElement('th');
    heading_11.innerHTML = "Teléfono";
    let heading_12 = document.createElement('td');
    heading_12.innerHTML = pacienteTelephone;
   
    row_6.appendChild(heading_11);
    row_6.appendChild(heading_12);
    tbody.appendChild(row_6);

}