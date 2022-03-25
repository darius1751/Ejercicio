//Nota: Usar los campos ya creados (code,name,age,phone) que hacen referencia a cada campo del formulario

// Realizar validaciones (Funciones)

// -code debe tener 9 caracteres (3 Letras,1 guion y 5 Numeros luego) example: ABS-12345

// -name debe tener minimo 5 caracteres, solo se admiten letras

// -age debe ser mayor o igual a 16

// -phone si inicia con 3 debe tener 10 digitos y si inicia con otro numero debe tener 8 digitos

//

//Mostrar la informacion con la funcion ui.message creada en el archivo formulario.js

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    ui.message('Title','Message of the application, for write in the UI');
    /*
        Mostrar la informacion
    */
})
const validateCode = (code)=>{
    
}
const validateName = (name)=>{

}
const validateAge = function(age){
    return parseInt(age) >= 16;
}
function validatePhone(phone){

}