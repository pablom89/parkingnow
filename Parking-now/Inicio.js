var registro = document.getElementById("ingresar");
var ingreso = document.getElementById("nuevaCuenta");
var formRegistro = document.querySelector('.register-form');
var formInicio = document.querySelector('.login-form');
registro.addEventListener('click', mostrar(registro, ingreso));
ingreso.addEventListener('click', mostrar(ingreso, registro));
function mostrar(x, y){
x.style.display = none;
y.style.display = block;
}
