/*Faça um Programa que mostre a mensagem "Alo mundo" na tela.*/
let greet = "Hello world";
alert(greet);

/*Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]"*/
let numberChoice = prompt("Digite um número");
alert("O número informado foi " + numberChoice);

/*Faça um Programa que peça dois números e imprima a soma.*/
let numberOne = 1*prompt('Digite um número');
let numberTwo = 1*prompt('Digite um número');

alert(numberOne + numberTwo);

/*Faça um Programa que peça as 4 notas bimestrais e mostre a média.*/

let firstGrade = 1*prompt('Digite a nota do primeiro bimestre');
let secondGrade = 1*prompt('Digite a nota do segundo bimestre');
let thirdGrade = 1*prompt('Digite a nota do terceiro bimestre');
let fourthGrade = 1*prompt('Digite a nota do quarto bimestre');
let grade = 4;

alert("A média dos 4 bimestres é "+ (firstGrade + secondGrade + thirdGrade + fourthGrade) / grade);

/*Faça um Programa que peça um número e então mostre o antecessor e o sucessor deste.*/
let number = 1*prompt('Digite um número'); 
alert("O número antecessor é " + (number - 1));
alert ("O número sucessor é " + (number + 1));

/*Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
Calcule e mostre o total do seu salário no referido mês.*/
let costHour = prompt('Quanto você ganha por hora?');
let hourMonth = prompt('Quantas horas você trabalha no mês?');

alert("Você ganha por mês um total de " + costHour * hourMonth);

/*Faça um programa que peça o tamanho de um arquivo para download (em MB) e a velocidade de um link de Internet 
(em Mbps), calcule e informe o tempo aproximado de download do arquivo usando este link (em minutos).*/
let file = prompt('Digite o tamanho de um arquivo para download em MB');
let speed = prompt('Digite a velocidade de um link de internet em Mbps');

alert('O tempo aproximado de download do arquivo usando este link é de ' + file * 8 * speed * 60 + " minutos");

/*Faça um programa que peça um nome e mostre a mensagem "Boa noite [nome]"*/
let whatsName = prompt('Digite um nome');

alert('Boa noite ' + whatsName);