function remDup(A)
{
    const b = [...new Set(A)];
    return b;
}

const a = ['amrut', 'amrut', 'k', 'k', 'amrut', 'pioo', 'notcool', 'notcool'];
b = remDup(a);
console.log(b);

function cap(A)
{
    const b = A.map(str => str.charAt(0).toUpperCase() + str.slice(1));
    return b;
}

const s = ['amrut', 'amrut', 'k', 'k', 'amrut', 'pioo', 'notcool', 'notcool'];
snew = cap(s);
console.log(snew);