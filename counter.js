function counter()
{
    let count = 0;

    function increment()
    {
        count += 1;
    }
    function decrement()
    {
        count -= 1;
    }
    function getCount()
    {
        return count;
    }

    return {
        increment: increment,
        decrement: decrement,
        getCount: getCount
    };
}

const myC = counter();
myC.increment();
myC.increment();
console.log(myC.getCount());
myC.decrement();
console.log(myC.getCount());
for (let i = 0; i <= 4; i++)
{
    myC.increment();
}
console.log("final: " + myC.getCount());
