var btnV = document.getElementById("btn_verificar");
btnV.addEventListener("click", botaoListener);
var btnG = document.getElementById("btn_gerar");
btnG.addEventListener("click", gerarListener);



function botaoListener(){
	var imput = document.getElementById("cpf");
	var cpf = imput.value;
	var valido = verificaCPF(cpf);
	if(valido){
         document.getElementById("output").innerHTML = "CPF VÁLIDO";
         document.getElementById("divOutout").setAttribute("class","w3-panel w3-green");

         document.getElementById("divOutout").style.visibility = "visible";
	}else{
         document.getElementById("output").innerHTML = "CPF INVÁLIDO";
         document.getElementById("divOutout").setAttribute("class","w3-panel w3-red");
	}
         document.getElementById("divOutout").style.visibility = "visible";
}

function gerarListener(){
	var randomCPF = "";
	for(var i=0; i<9;i++){
		randomCPF = randomCPF + Math.trunc((Math.random()*10));
	}
	randomCPF = randomCPF + calculaDV1(randomCPF);
	randomCPF = randomCPF + calculaDV2(randomCPF);
	document.getElementById("cpf").value = randomCPF;
	document.getElementById("output").innerHTML = "CPF GERADO";
	document.getElementById("divOutout").setAttribute("class","w3-panel w3-green");
	document.getElementById("divOutout").style.visibility = "visible";
}

function verificaCPF(cpf) {
	var dv1 = calculaDV1(cpf);
	var dv2 = calculaDV2(cpf);
	if(dv1 == cpf[9] && dv2==cpf[10]){
		return true;
	}else{
		return false;
	}
}
function calculaDV1(cpf) {
	var pesos = [10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<9;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}
function calculaDV2(cpf) {
	var pesos = [11,10,9,8,7,6,5,4,3,2];
	var soma = 0;
	for(var i = 0; i<10;i++){
		soma = soma + (pesos[i]* Number(cpf[i]) );
	}
	var resto = soma%11;
	if(resto < 2){
		return 0;
	}else{
		return 11 - resto;
	}
}
