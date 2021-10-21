console.log(1)
var operator ='s'
var text = 'Би'

const operatorW = (text) => {operator = text; console.log('функция - ', operator)}
document.getElementById('id_operator').innerHTML=operator;
console.log(operator)
const isValid = () => {
        var re = /^\d[\d\(\)\ -]{4,14}\d$/;
        var myPhone = document.getElementById('phone').value;
        var valid = re.test(myPhone);
        if (valid) output = 'Номер телефона введен правильно!';
        else output = 'Номер телефона введен неправильно!';
        document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+'<br />'+output;
        
}