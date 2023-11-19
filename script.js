
function nfibonacci(n){

    if(n === 0) return 0;
    if(n === 1) return 1;

    return nfibonacci( n - 1) + nfibonacci(n - 2);
   
} 

nfibonacci(3)     +     nfibonacci(2)

nfibonacci(2) + nfibonacci(1)  +  nfibonacci(1) + nfibonacci(0)

nfibonacci(1) + nfibonacci(1) + nfibonacci(1)

console.log(nfibonacci(4))

