'use strict'

git//задание1
let name = prompt('как тебя зовут?');
alert(name);

//задание2
let x = prompt('введите первое число');
let y = prompt('введите второе число');
alert(+x + +y);

//задание3
let name2 = prompt('как тебя зовут?');
let age = prompt('сколько тебе лет?');
if(age >= 18){
  alert('добро пожаловать, '+name2);
}else{
  alert('простите,'+name2+' доступ закрыт');
}

//задание4
let block = confirm('хотите ввести название блока?');

if(block == false){
  alert('название блока не введено');
}
if(block==true){
  block = prompt('введите название блока');
}
let element = confirm('хотите ввести название элемента?');

if(element == false){
  alert('название элемента не введено');
}
if(element==true){
  element = prompt('введите название элемента');
}

let modif = confirm('хотите ввести название модификатора?');

if(modif == false){
  alert('название модификатора не введено');
  alert(block+element)
}
if(modif==true){
  modif = prompt('введите название модификатора');
  alert(block+element+modif)
}
//задание5
let enterNumFirst = +prompt('enter your first number')
let enterNumSecond = +prompt('enter your second number')
let mult = enterNumFirst * enterNumSecond;
let div = enterNumFirst / enterNumSecond;
let plus = enterNumFirst + enterNumSecond;
let minus = enterNumFirst - enterNumSecond;

if(enterNumFirst && enterNumSecond){
    
    let res = prompt('enter your operator plus, minus, div, mult')
    if(res === 'mult') {
    alert(mult)
  } if(res === 'div') {
    alert(div)
  } if(res === 'plus') {
    alert(plus)
  } if(res === 'minus') {
    alert(minus)
  }
}
let a1
