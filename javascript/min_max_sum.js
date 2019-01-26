function miniMaxSum(arr) {
    const numbers = new Array;

    for (let i = 1; i <= arr.length; i++) {
        const newArr = arr.slice(0, i - 1).concat(arr.slice(i, arr.length))
        const add = (accumulator, currentValue) => accumulator + currentValue;
        numbers.push(newArr.reduce(add));
    };
    console.log(`${Math.min(...numbers)} ${Math.max(...numbers)}`);
}