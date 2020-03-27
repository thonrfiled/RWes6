const ary = [1, 5, 9, [1, 5, [4, 6, [34, 4], 99], 7], 5, 55, [1, 64], 3, 4];
/* 方法零：falt */
ary = ary.falt(Infinity);
/* 方法一：递归调用 */
function flatArr(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) { // 判断数组元素是否还是数组对象
      result = result.concat(flatArr(arr[i])); // 递归
    } else {
      result.push(arr[i]); //  追加元素
    }
  }
  return result;
}
/* 方法二：扩展运算符 */
function faltArr2(arr) {
  while (arr.some((value) => Array.isArray(value))) { // 箭头函数当前元素判断是否为数组
    arr = [].concat(...arr); // 将还是数组的元素展开,添加
  }
  return arr;
}
/* 方法三：reduce */
function faltArr3(arr) {
  return arr.reduce((prev, item) => prev.concat(Array.isArray(item) ? faltArr3(item) : item), // 本质上还是递归调用
    0);
}
