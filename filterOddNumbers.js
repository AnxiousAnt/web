function filterOddNumbers(A)
{
    const oddNUmbersArray = A.filter(number => number%2!==0);
    return oddNUmbersArray;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = filterOddNumbers(numbers);
console.log(oddNumbers);

function sort(Array)
{
    const B = Array.sort((a,b) => a-b);
    return B;
}

const arr = [3,1,4,1,5,9,2,6,5,3,5];
const b = sort(arr);
console.log(b);