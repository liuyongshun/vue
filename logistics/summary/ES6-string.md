### String
> JavaScript字符以UTF-16的格式储存，每个字符固定为2个字节。对于那些需要4个字节储存的字符（Unicode码点大于0xFFFF的字符），JavaScript会认为它们是两个字符。

**NOTE:** 对于四个字节的特殊字，charAt()无法使用，且length

// 1.确定一个字符串是否包含在另一个字符串中，通常indexOf();
/**
 * [ new method of string by ES6 ]
 * @type {String}
 * includes(): 是否找到了参数字符串
 * startsWith(): 参数字符串是否在源字符串的头部
 * endsWith(): 参数字符串是否在源字符串的尾部
 * 上面都有第二个参数: 表示开始搜索的位置。endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
 * repeat(): 重复。
 */
let str = 'hello world';
console.log(str.includes('wor'));
console.log(str.endsWith('wor'));
console.log(str.endsWith('ld'));
console.log(str.startsWith('wor'));
console.log(str.startsWith('he'));
console.log('x'.repeat(3));

// 字符串补全长度的功能,第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

// padStart(): 在开始处补全
console.log('x'.padStart(5, 'ab'));  // 'ababx'
// padEnd():在结尾处补全
console.log('x'.padEnd(5, 'ab'));  // 'xabab'
