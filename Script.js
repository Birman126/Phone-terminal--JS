console.log(1)
var operator ='Оператор';
var text = 'Би';
var sucess = true;
const operatorW = (text) => {operator = text; console.log('функция - ', operator)}
document.getElementById('id_operator').innerHTML=operator;
console.log(operator)
const isValid = () => {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = document.getElementById('phone').value;
        var valid = re.test(myPhone);
        if (valid) output = 'Номер телефона введен правильно!';
        else output = 'Номер телефона введен неправильно!';
        document.getElementById('message').innerText = output;
}
const isValidSum = () => {
        var mySum = document.getElementById('Sum').value;
        var valid = (mySum<=1000)&&(mySum>=1);
        if (valid) sumOutput = 'Сумма введена правильно!';
        else sumOutput = 'Введите сумму от 1 до 1000!';
        document.getElementById('messageSum').innerHTML = sumOutput;
}
const isSucess = () => {
        if (sucess) {return ("Пополнение счета " + myPhone + "на сумму" + mySum + "выполненно успешно")}
        else {return ('Полнение счета не выполнено, попробуйте снова')}  
}