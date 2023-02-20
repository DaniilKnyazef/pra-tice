str = prompt('Введите число X: ', '0')
x = parseInt(str)

str = prompt('Введите число Y: ', '0')
y = parseInt(str)

if( (x%y) == 0)
alert('Да')
else alert('Нет')