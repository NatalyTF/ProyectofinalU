function validarInfoDoctor(){

    const nameRegex = /^[A-Za-z\s]+$/; 
    const cedulaRegex = /^\d{10}$/; 
    const consultorioRegex = /^\d{3}$/; 
    const emailRegex = /^\S+@\S+\.\S+$/;
 
    const doctorName = document.getElementById("Nombre").value;
    const doctorLastName = document.getElementById("Apellidos").value;
    const doctorCedula = document.getElementById("identificacion").value;
    const doctorSpecialty = document.getElementById("Especialidad").value;
    const doctorOffice = document.getElementById("Consultorio").value;
    const doctorEmail = document.getElementById("email").value;

    if (!nameRegex.test(doctorName)) {
        alert("El nombre del doctor es inválido.");
        return;
    }
        
    if (!nameRegex.test(doctorLastName)) {
        alert("El apellido del doctor es invalido.");
        return;
    }
        
    if (!cedulaRegex.test(doctorCedula)) {
        alert("El número de cédula del doctor es inválido. Debe contener 9 dígitos.");
        return;
    }

    if (!consultorioRegex.test(doctorOffice)) {
        alert("El número del consultorio del doctor es inválido. Debe contener 3 dígitos.");
        return;
    }

    if (!emailRegex.test(doctorEmail)) {
        alert("El número de cédula del doctor es inválido.");
        return;
    }
    captaInfor(doctorName,doctorLastName,doctorCedula,doctorSpecialty,doctorOffice,doctorEmail);
    
}

function captaInfor (doctorName,doctorLastName,doctorCedula,doctorSpecialty,doctorOffice,doctorEmail){
    let doctor = {
        nombre : doctorName,
        apellidos : doctorLastName,
        cedula : doctorCedula,
        especialidad : doctorSpecialty,
        consultorio : doctorOffice,
        Email : doctorEmail,
    }

    const JSONObject = JSON.stringify(doctor)

    

   


     let table = document.createElement('table');


     table.setAttribute("border", "2");
     //let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    //table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById('body2').appendChild(table);
    //Ce
    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Nombre";
    let heading_2 = document.createElement('td');
    heading_2.innerHTML = doctorName;
   
    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    tbody.appendChild(row_1);


    let row_2 = document.createElement('tr');
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = "Apellidos";
    let heading_4 = document.createElement('td');
    heading_4.innerHTML = doctorLastName;
   
    row_2.appendChild(heading_3);
    row_2.appendChild(heading_4);
    tbody.appendChild(row_2);

    let row_3 = document.createElement('tr');
    let heading_5 = document.createElement('th');
    heading_5.innerHTML = "Cédula";
    let heading_6 = document.createElement('td');
    heading_6.innerHTML = doctorCedula;
   
    row_3.appendChild(heading_5);
    row_3.appendChild(heading_6);
    tbody.appendChild(row_3);

    let row_4 = document.createElement('tr');
    let heading_7 = document.createElement('th');
    heading_7.innerHTML = "Especialidad";
    let heading_8 = document.createElement('td');
    heading_8.innerHTML = doctorSpecialty;
   
    row_4.appendChild(heading_7);
    row_4.appendChild(heading_8);
    tbody.appendChild(row_4);

    let row_5 = document.createElement('tr');
    let heading_9 = document.createElement('th');
    heading_9.innerHTML = "Consultorio";
    let heading_10 = document.createElement('td');
    heading_10.innerHTML = doctorOffice;
   
    row_5.appendChild(heading_9);
    row_5.appendChild(heading_10);
    tbody.appendChild(row_5);

    let row_6 = document.createElement('tr');
    let heading_11 = document.createElement('th');
    heading_11.innerHTML = "Email";
    let heading_12 = document.createElement('td');
    heading_12.innerHTML = doctorEmail;
   
    row_6.appendChild(heading_11);
    row_6.appendChild(heading_12);
    tbody.appendChild(row_6);






}




