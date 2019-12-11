function checkPrime(n){
  // checks whether a number is a prime
  if (n < 2){
    return false
  }
  for (var i = 2;i <= Math.sqrt(n);i ++){
    if (n % i == 0){
      return false
    }
  }
  return true
};

function listPrimes(n){
  // lists all of the primes up to a given number
  primes = []
  for (var i = 0;i <= n;i ++){
    if (checkPrime(i) == true){
      primes.push(i)
    }
  }
  return primes
};
