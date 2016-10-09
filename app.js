/*
(function () {
    // var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();

function randArr() {
    var a = [];
    var rArr = Math.ceil(Math.random() * 30);
    var rNum = null;

    for (var i = 0; i < rArr; i++) {
        rNum = Math.ceil(Math.random() * 30);
        a[i] = rNum;
    }

  /!*  for (var j = 0; j < a.length; j++) {
        console.log('arr - ' + a[j]);
    }*!/
console.log('random array - '+ a);
    return a;
}


function sum(arr) {
    var temp = +'';
    for (var i = 0; i < arr.length; i++) {
        temp += arr[i];
    }
    console.log('---' + temp + ' --- sum result');
}
sum(randArr());


function max(arr) {
    var temp = '';
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            if (temp < arr[i]) {
                temp = arr[i]
            }
        }
    }
    console.log('---' + temp + ' --- max result');
}
max(randArr());

function min(arr) {
    var temp = null;
    for (var i = 0; i < arr.length; i++) {

        if (temp == null) {
            temp = arr[i];
            i++;
            // console.log(temp + 'first num')
        }
        if (temp < arr[i]) {
            continue;
        }
        temp = arr[i]
    }
    console.log('---' + temp + ' --- min result');
}

min(randArr());


function QuickSort(A)
{
    if (A.length == 0) return [];
    var a = [], b = [], p = A[0];
    for (var i = 1; i < A.length; i++)
    { if (A[ i ] < p) a[a.length] = A[ i ];
    else b[b.length] = A[ i ];
    }
    return QuickSort(a).concat( p,QuickSort(b) );
}

console.log('sorted array - ' + QuickSort(randArr()));*/



function randArr() {
    var a = [];
    var rArr = Math.ceil(Math.random() * 30);
    var rNum = null;

    for (var i = 0; i < rArr; i++) {
        rNum = Math.ceil(Math.random() * 30);
        a[i] = rNum;
    }

  for (var j = 0; j < a.length; j++) {
        console.log('arr - ' + a[j]);
    }
    console.log('random array - '+ a);
    return a;
}

var arr = randArr();
Array.prototype.min = function () {
    console.log(this);
    return Math.min.apply(null, this);


};

Array.prototype.max = function () {
    console.log(this);

    return Math.max.apply(null, this);

};
console.log(arr.min());
console.log(arr.max());



var f = function (x, y, z, a, b, c) {
    console.log(
        this, x, y, z, a, b, c
    )
}.bind(arr, 8, '8', 0, 8, 8, 8);

f(5);