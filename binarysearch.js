// Create an array of ordered data
const data = [2, 4, 6, 8, 10, 11, 12, 20, 30, 100];

// Create a binary search algorithm function
function binarySeach(data, num){
    let length = data.length;
    let left = 0;
    let right = length - 1;
    let index;
    let attempt = 0;

    while(left <= right){
        // Update the attempt counter
        attempt ++;

        // Create a middle pointer
        const middle = left + Math.floor((right - left) / 2);

        // If num is equal to middle
        if(num == data[middle]){
            index = middle;
            return `${num} is found at index ${index} with ${attempt} attempt(s)`;
        }

        // Update the left and right counter
        if(num < data[middle]){
            right = middle - 1; // Update only the right value
        } else{
            left = middle + 1; // Update only the left value
        }

    }

    return `${num} is not found with ${attempt} attempt(s)`
}

console.log(binarySeach(data, 1000));
console.log(binarySeach(data, 10));
console.log(binarySeach(data, 11));