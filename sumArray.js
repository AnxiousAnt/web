function sumArray(arr)
{
    let sum = 0;
    for(let i = 0; i<arr.length; i++)
    {
        sum += arr[i];
    }
    return sum;
}

const a = [4, 2, 46, 23, 6, 2, 6];
s = sumArray(a);
console.log(s);