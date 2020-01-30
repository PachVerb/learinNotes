//宽松相等（==） 和严格相等 （===）
// 都用于对值的判断，而 === 还会进行类型判断， 如此并不准确， == 还会进行类型转换， ===不允许。
console.log(42 == true) //false
console.log(1 == '1');  //true

//比较特点
/*
    1. Two strings are strictly equal when they have the same sequence of characters, 
    same length, and same characters in corresponding positions.
    当两个字符串具有相同的字符序列、相同的长度和相应位置的相同字符时，它们是严格相等的。
    2. Two numbers are strictly equal when they are numerically equal (have the same number value). NaN is not equal to anything, including NaN. 
    Positive and negative zeros are equal to one another.
    两个数字在数值上相等时是严格相等的（具有相同的数值）。NaN不等于任何东西，包括NaN。正零和负零彼此相等。
    3.Two Boolean operands are strictly equal if both are true or both are false.
    如果两个布尔操作数均为真或均为假，则两个布尔操作数严格相等。
    4.Two distinct objects are never equal for either strict or abstract comparisons.
    无论是严格的还是抽象的比较，两个不同的对象都不相等。
    5.An expression comparing Objects is only true if the operands reference the same Object.
    仅当操作数引用同一对象时，比较对象的表达式才为真。
    6.Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.
    空类型和未定义类型严格地等于它们自己，并且在抽象上彼此相等。
    null === null
    undfined === undfined
    null == undfined

*/