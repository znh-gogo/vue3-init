/*
 * @Description: 工具函数
 * @Author: znh
 * @Date: 2022-03-29 14:01:57
 */

export const transPriceFunc = (price) => {
  if(!price) return '0.00';
  let afterPrice = String(Math.round(price)/10000);
  let isDot = afterPrice.indexOf('.');
  let lastIndex = afterPrice.length - 1;
  if(~isDot) {
    let distance = lastIndex - isDot
    return distance > 1 ? afterPrice : (afterPrice + '0')
  } else return (afterPrice + '.00')
}