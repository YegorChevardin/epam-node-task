'use strict';

/**
 * You must return a date that comes in a predetermined number of seconds after 01.06.2020 00:00:002020
 * @param {number} seconds
 * @returns {Date}
 *
 * @example
 *      31536000 -> 01.06.2021
 *      0 -> 01.06.2020
 *      86400 -> 02.06.2020
 */
function secondsToDate(seconds) {
    const startDate = new Date("2020-06-01T00:00:00.202020Z");
    const millisecondsToAdd = seconds * 1000;
    const targetDate = new Date(startDate.getTime() + millisecondsToAdd);
    return targetDate;
}

/**
 * You must create a function that returns a base 2 (binary) representation of a base 10 (decimal) string number
 * ! Numbers will always be below 1024 (not including 1024)
 * ! You are not able to use parseInt
 * @param {number} decimal
 * @return {string}
 *
 * @example
 *      5 -> "101"
 *      10 -> "1010"
 */
function toBase2Converter(decimal) {
    if (decimal === 0) {
        return "0";
    }

    let binary = "";
    let quotient = decimal;

    while (quotient > 0) {
        const remainder = quotient % 2;
        binary = remainder + binary;
        quotient = Math.floor(quotient / 2);
    }

    return binary;
}

/**
 * You must create a function that takes two strings as arguments and returns the number of times the first string
 * is found in the text.
 * @param {string} substring
 * @param {string} text
 * @return {number}
 *
 * @example
 *      'a', 'test it' -> 0
 *      't', 'test it' -> 2
 *      'T', 'test it' -> 2
 */
function substringOccurrencesCounter(substring, text) {
    const regex = new RegExp(substring, "gi");
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

/**
 * You must create a function that takes a string and returns a string in which each character is repeated once.
 *
 * @param {string} string
 * @return {string}
 *
 * @example
 *      "Hello" -> "HHeelloo"
 *      "Hello world" -> "HHeello  wworrldd" // o, l is repeated more then once. Space was also repeated
 */
function repeatingLetters(string) {
    let result = '';
    for (const char of string) {
        result += char + char;
    }
    return result;
}

/**
 * You must write a function redundant that takes in a string str and returns a function that returns str.
 * ! Your function should return a function, not a string.
 *
 * @param {string} str
 * @return {function}
 *
 * @example
 *      const f1 = redundant("apple")
 *      f1() ➞ "apple"
 *
 *      const f2 = redundant("pear")
 *      f2() ➞ "pear"
 *
 *      const f3 = redundant("")
 *      f3() ➞ ""
 */
function redundant(str) {
    return function () {
        return str;
    };
}

/**
 * https://en.wikipedia.org/wiki/Tower_of_Hanoi
 *
 * @param {number} disks
 * @return {number}
 */
function towerHanoi(disks) {
    if (disks === 1) {
        return 1;
    } else {
        // Move `disks-1` from source to auxiliary peg
        const steps1 = towerHanoi(disks - 1);

        // Move the largest disk from source to destination peg
        const steps2 = 1;

        // Move `disks-1` from auxiliary to destination peg
        const steps3 = towerHanoi(disks - 1);

        // Total steps required = steps1 + steps2 + steps3
        return steps1 + steps2 + steps3;
    }
}

/**
 * You must create a function that multiplies two matricies (n x n each).
 *
 * @param {array} matrix1
 * @param {array} matrix2
 * @return {array}
 *
 */
function matrixMultiplication(matrix1, matrix2) {
    const n = matrix1.length;
    const result = [];

    for (let i = 0; i < n; i++) {
        result[i] = [];
        for (let j = 0; j < n; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            result[i][j] = sum;
        }
    }

    return result;
}

/**
 * Create a gather function that accepts a string argument and returns another function.
 * The function calls should support continued chaining until order is called.
 * order should accept a number as an argument and return another function.
 * The function calls should support continued chaining until get is called.
 * get should return all of the arguments provided to the gather functions as a string in the order specified in the order functions.
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *      gather("a")("b")("c").order(0)(1)(2).get() ➞ "abc"
 *      gather("a")("b")("c").order(2)(1)(0).get() ➞ "cba"
 *      gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get()  ➞ "hello"
 */
function gather(str) {
    let characters = [str];

    function gatherFunction(char) {
        characters.push(char);
        return gatherFunction;
    }

    function order(index) {
        let orderedCharacters = [];
        orderedCharacters.push(characters[index]);

        function orderFunction(index) {
            orderedCharacters.push(characters[index]);
            return orderFunction;
        }

        orderFunction.get = function () {
            return orderedCharacters.join('');
        };

        return orderFunction;
    }

    gatherFunction.order = order;
    return gatherFunction;
}

function programOutput() {
    console.log("First task");
    console.log(secondsToDate(31536000));
    console.log(secondsToDate(0));
    console.log(secondsToDate(86400));
    console.log("----------");
    console.log("Second task");
    console.log(toBase2Converter(5));
    console.log(toBase2Converter(10));
    console.log("----------");
    console.log("Third task");
    console.log(substringOccurrencesCounter('a', 'test it'));
    console.log(substringOccurrencesCounter('t', 'test it'));
    console.log(substringOccurrencesCounter('T', 'test it'));
    console.log(substringOccurrencesCounter('it', 'test it it'));
    console.log("----------");
    console.log("Forth task");
    console.log(repeatingLetters("Hello"));
    console.log(repeatingLetters("Hello world"));
    console.log("----------");
    console.log("Fifth task");
    const f1 = redundant("apple");
    console.log(f1());
    const f2 = redundant("pear");
    console.log(f2());
    const f3 = redundant("");
    console.log(f3());
    console.log("----------");
    console.log("Sixth task");
    console.log(towerHanoi(1));
    console.log(towerHanoi(2));
    console.log(towerHanoi(3));
    console.log(towerHanoi(4));
    console.log("----------");
    console.log("Seventh task");
    const matrix1 = [
        [1, 2],
        [3, 4]
    ];
    const matrix2 = [
        [5, 6],
        [7, 8]
    ];
    const resultMatrix = matrixMultiplication(matrix1, matrix2);
    console.log(resultMatrix);
    console.log("----------");
    console.log("Eightth task");
    console.log(gather("a")("b")("c").order(0)(1)(2).get());
    console.log(gather("a")("b")("c").order(2)(1)(0).get());
    console.log(gather("e")("l")("o")("l")("!")("h").order(5)(0)(1)(3)(2)(4).get());
    console.log("----------");
}

programOutput();