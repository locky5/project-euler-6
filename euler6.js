function difference(n) {
  let sumOfSquares = 0
  let squareOfSums = 0

  for (let i = 1; i < n + 1; i++) {
    let square = i * i
    sumOfSquares += square
  }

  for (let i = 1; i < n + 1; i++) {
    squareOfSums += i
  }
  let finalSquareOfSums = squareOfSums * squareOfSums

  let difference = finalSquareOfSums - sumOfSquares

  console.log(difference)
}

difference(100)
