str = prompt('Введите число n: ', '0')
n = parseInt(str)
k = 0;
max = n/2
for(i = 1; i<=n; i++){
    if( (n%i)==0 && (i%3)==0)
    k++
}
alert('Колличество делителей кратных 3: '+k)