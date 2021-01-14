const numberManager = (num) => {
  let strNum = num.toString();
  let hk = parseInt(strNum.slice(3, 4));
  let tk = parseInt(strNum.slice(2, 3));
  let k = parseInt(strNum.slice(1, 2));
  if (num >= 1100000) return `${strNum.slice(0, 1)}${k === 0 ? "" : "." + k}m`;
  else if (num >= 1000000) return `${strNum.slice(0, 1)}m`;
  if (num >= 100100) return `${strNum.slice(0, 3)}${hk === 0 ? "" : "." + hk}k`;
  else if (num >= 100000) return `${strNum.slice(0, 3)}k`;
  if (num >= 10100) return `${strNum.slice(0, 2)}${tk === 0 ? "" : "." + tk}k`;
  else if (num >= 10000) return `${strNum.slice(0, 2)}k`;
  if (num >= 1100) return `${strNum.slice(0, 1)}${k === 0 ? "" : "." + k}k`;
  else if (num >= 1000) return `${strNum.slice(0, 1)}k`;
  else return strNum;
};

//console.log(numberManager(5000));
export default numberManager;
