function doubleValues(arr) {
    const double = [];
    arr.forEach(function (num) {
        double.push(num * 2);
    });
    return double;
}


function onlyEvenValues(arr) {
    const even = arr.filter(function (num) {
        return num % 2 === 0;
    })
    return even;
}


function showFirstAndLast(arr) {
    const firstLast = arr.map(function (name) {
        return name[0] + name[name.length - 1];
    })
    return firstLast;
}


function addKeyAndValue(arr, key, value) {
    const newArray = arr.map(function (person) {
        person[key] = value;
        return person;
    })
    return newArray;
}


function vowelCount(str) {
    const vowels = 'aeiou';
    const arr = Array.from(str);
    const obj = {};
    let count = 0;
    const vowCount = [];
    const newArray = [];
    arr.filter(function (char) {
        if (vowels.indexOf(char.toLowerCase()) !== -1) {
            newArray.push(char.toLowerCase());
        }
    });
    for (let el of newArray) {
        if (!vowCount.includes(el)) {
            vowCount.push(el);
            for (let char of newArray) {
                if (el === char) {
                    count++
                }
            }
            obj[el] = count;
            count = 0;
        }
    }
    return obj;
}


function doubleValuesWithMap(arr) {
    const double = arr.map(function (num) {
        return num * 2;
    })
    return double;
}


function valTimesIndex(arr) {
    const result = arr.map(function (num, i) {
        return num * i;
    })
    return result;
}


function extractKey(arr, key) {
    const result = arr.map(function (val) {
        return val[key];
    })
    return result;
}


function extractFullName(arr) {
    const extract = arr.map(function (el) {
        return Object.values(el);
    })
    const firstLast = extract.map(function (el) {
        return el[0] + ' ' + el[1];
    })
    return firstLast;
}


function filterByValue(arr, key) {
    const filtered = arr.filter(function (person) {
        return person[key];
    })
    return filtered;
}


function find(arr, searchValue) {
    const first = arr.filter(function (num) {
        return num === searchValue;
    })
    return first[0];
}


function findInObj(arr, key, searchValue) {
    const filtered = arr.filter(function (el) {
        return el[key] === searchValue;
    })
    return filtered[0];
}


function removeVowels(str) {
    const vowels = 'aeiou';
    const arr = [];
    let string = '';
    Array.from(str).filter(function (char) {
        if (!vowels.includes(char.toLowerCase())) {
            arr.push(char.toLowerCase());
        }
    })
    for (let el of arr) {
        string += el;
    }
    return string;
}


function doubleOddNumbers(arr) {
    const oddNums = arr.filter(function (num) {
        return num % 2 !== 0;
    })
    const doubled = oddNums.map(function (num) {
        return num * 2;
    })
    return doubled;
}
