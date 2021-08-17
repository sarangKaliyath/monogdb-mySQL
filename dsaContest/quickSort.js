var input = `6
1 5 2 8 3 9`;
// var input = `5
// 3 5 0 9 8`;

var input = input.split("\n");

var cases = +input[0];

var data = input[1].split(" ").map(Number);

let p =0;
let r = cases-1;

function quickSort(arr, p, r) {
    
    if (p < r) {

        q = partition(arr, p, r);
        console.log('q:', q)
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }

}

quickSort(data, p, r);

function print() {
    var str = "";
    for (x of data) {
        str+= x + " ";
    }
    console.log(str);
}

print();


function partition(arr, p, r) {

    let x = arr[r];
    console.log('x:', x)
    let i = p - 1;
    console.log('i:', i)
    
    for (let j = p; j <= r-1 ; j++){
        
        if (arr[j] <= x) {
            i++;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = arr[j];
        }
    }
    let temp = arr[i + 1];
    arr[i + 1] = arr[r];
    arr[r] = temp;

    console.log("arr:", arr);
    // console.log("i+1:", i + 1);
    let index = i + 1;
    console.log('index:', index)
    // return (i + 1);
    return (index);
    
}
