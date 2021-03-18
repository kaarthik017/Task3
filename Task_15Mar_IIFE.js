// ODD Number in an array using IIFE
var odd = (function(data){
    var temp = [];
    for(var i=0;i<data.length;i++){
        if(data[i]%2!==0){
            temp.push(data[i]);
        }
    }
    return temp;
})([1,2,3,4,5,6,7,8,9,10])

console.log(odd);

//ODD number in an array using Anonymus Function
function oddPrint(data){
    var temp = [];
    for(var i=0;i<data.length;i++){
        if(data[i]%2!==0){
            temp.push(data[i]);
        }
    }
    return temp;
}

var res = oddPrint([1,2,3,4,5,6,7])
console.log(res);

//First letter Capitalisation in an array using IIFE

var capitalisation = (function(name){
    let temp = [];
    for(var i=0;i<name.length;i++){
        temp.push(name[i].charAt(0).toUpperCase() + name[i].slice(1));
    }
    return temp;
})(['kaarthik','krishna','maheswaran'])

console.log(capitalisation);

//First letter Capitalisation using Anonymus function

function initCap(data){
    let temp = [];
    for(var i=0;i<data.length;i++){
        temp.push(data[i].charAt(0).toUpperCase() + data[i].slice(1));
    }
    return temp;
}

var res = initCap(['kaarthik','krishna','maheswaran']);
console.log(res);

//Sum of numbers in an array using IIFE

var sum = (function(num){
    let dummy = 0;
    for(var i of num){
        dummy += i;
    }
    return dummy;
})([1,2,3,4,5,6])

console.log(sum);

//Sum of numbers in an array using Anonymus function

function sum(num){
    let dummy = 0;
    for(var i of num){
        dummy += i;
    }
    return dummy;
}

var res = sum([1,2,3,4,5,6,7,8,9,10]);

console.log(res);

// Palindrome using IIFE Function

var palindrome = (function(data){
    var dummy = [];
    res = [];
    for(var i=0;i<data.length;i++){
        dummy.push(data[i].split("").reverse().join(""));
        if(data[i] === dummy[i]){
            res.push(data[i]);
        }
    }
    return res;
    
})(['racecar','civic','radar','kaarthik'])

console.log(palindrome);

//Palindrome using Anonymus function

function palindrome(data){
    var dummy = [];
    res = [];
    for(var i=0;i<data.length;i++){
        dummy.push(data[i].split("").reverse().join(""));
        if(data[i] === dummy[i]){
            res.push(data[i]);
        }
    }
    return res;
    
}

var arr = palindrome(['racecar','civic','kaarthik'])
console.log(arr);

//Sorting two array of same size and finding the median using IIFE:

let sorted = (function(arr1,arr2){
    let dummy = [];
    for(var i=0;i<arr1.length;i++){
        dummy.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
        dummy.push(arr2[j]);
    }
    let sort = dummy.sort(function(a,b){
        return a-b;
    })
    console.log(sort)
    let mid = Math.ceil(sort.length/2);
    console.log(mid);
    let median = sort.length %2 === 0 ? (sort[mid] + sort[mid-1]) : sort[mid-1]
    return median;
    
    
    
})([1,3],[2,4,6])

console.log(sorted);

//Sorting two array of same size and finding the median using Anonymus function

function sorted(arr1,arr2){
    let dummy = [];
    for(var i=0;i<arr1.length;i++){
        dummy.push(arr1[i]);
    }
    for(var j=0;j<arr2.length;j++){
        dummy.push(arr2[j]);
    }
    let sort = dummy.sort(function(a,b){
        return a-b;
    })
    console.log(sort)
    let mid = Math.ceil(sort.length/2);
    console.log(mid);
    let median = sort.length %2 === 0 ? (sort[mid] + sort[mid-1]) : sort[mid-1]
    return median;
    
    
    
}

var res = sorted([1,3,5],[2,4,6]);

console.log(res);

//Remove Duplicates in an array using IIFE

let removeDuplicates = (function(data){
    let dummy = new Set();
    for(let i=0;i<data.length;i++){
        dummy = dummy.add(data[i]);
    }
    return dummy
})([1,2,2,2,3,3,4,5,6,6,7,8,9,9])

console.log(removeDuplicates);

//Remove duplicates in an array using Anonymus Function

function removeDuplicates(data){
    let dummy = new Set();
    for(let i=0;i<data.length;i++){
        dummy = dummy.add(data[i]);
    }
    return dummy
}

var res = removeDuplicates([1,2,2,2,3,3,4,5,6,6,7,8,9,9]);

console.log(res);

//Rotate array by k elements and return the value using IIFE

var rotate = (function(num,k){
    let i=0;
    while(i<k){
        num.unshift(num.pop())
        i++;
    }
    return num;
})([1,2,3,4,5,6],3)

console.log(rotate);

//Rotate array by k elements and return the value using Anonymus function

function rotate(num,k){
    let i=0;
    while(i<k){
        num.unshift(num.pop())
        i++;
    }
    return num;
}

var res = rotate([1,2,3,4,5,6,7],3);
console.log(res);

//Prime number from an array using Anonymus function


function primenum(num){
    var res = [];
    for(var i=0;i<num.length;i++){
        let temp = num[i];
        if(temp === 1){}
        else if(temp === 2){
            res.push(temp);
        }
        else{
            let flag = 0;
        for(var j=2;j<=parseInt(temp/2);j++){
            if(temp%j ===0){
               flag = 1;
               break;
            }
        }
        if(flag===0){
            res.push(temp);
        }
    }    
}
    return res;
}

var isPrime = primenum([1,2,3,4,5,6,7,8,9,10]);
console.log(isPrime);

//Prime number from an array using IIFE

var isPrime = (function(num){
    var res = [];
    for(var i=0;i<num.length;i++){
        let temp = num[i];
        if(temp === 1){}
        else if(temp === 2){
            res.push(temp);
        }
        else{
            let flag = 0;
        for(var j=2;j<=parseInt(temp/2);j++){
            if(temp%j ===0){
               flag = 1;
               break;
            }
        }
        if(flag===0){
            res.push(temp);
        }
    }    
}
    return res;
}) ([1,2,3,4,5,6,7,8,9,10])

console.log(isPrime);

