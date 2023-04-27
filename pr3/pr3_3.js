str = prompt('Введите число n: ', '0')
n = parseInt(str)
k = 0;
for(i = 1; i<=n; i++){
    if( (i%3)==0)
    k++
}
alert('Колличество делителей кратных 3: '+k)