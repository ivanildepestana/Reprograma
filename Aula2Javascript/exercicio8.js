var nome = prompt("Qual é o seu nome?:, *Preenchimento obrigatório")
var sexo = prompt("Qual é o seu sexo?:")
 

if ( sexo == "feminino"){
	alert("Bem Vinda," + nome)
} else if (sexo == "masculino"){
	alert("Bem Vindo," + nome)
} else if ( sexo == "") {
	alert("Olá!," + nome)
};
