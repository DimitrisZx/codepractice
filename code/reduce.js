const reduce = (array, callback, initialValue = null) => {
  if (!initialValue) {initialValue = array[0]}
  for (let i = initialValue ? 0 : 1; i < array.length; i++) {
    initialValue = callback(array[i], initialValue)
  }
  return initialValue
}

console.log(reduce([1,1,2 ,2], (a,b) => a - b, 0))