const form = document.querySelector(".form");
const firstName = document.getElementById('name');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const enviar=document.getElementById('enviar');



enviar.addEventListener('click',e=>{
    if(!validateEmail(email.value)|| !validarNombreApellido(firstName.value) || !validarNombreApellido(lastName.value) || !validarPassword(password.value)){
        form.classList.add('error');
    }else{
        form.classList.remove('error');
        firstName.value="";
        lastName.value="";
        email.value="";
        password.value="";
        
    }
    
})

//validar first name and last name
const validarNombreApellido=(nombreApellido)=>{
    //First capital letter 
  let valinApp= new RegExp("^[A-Z]{1}[a-z]+[^0-9]+$");
        return valinApp.test(nombreApellido);
}


//validar email
const  validateEmail =(email)=> {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

//validar password
const validarPassword=(password)=>{
    let valiPass= new RegExp("\.+");
    return valiPass.test(password);
}

