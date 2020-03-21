module.exports = function check(str, brConfig) {
  for (let i = 0; i < brConfig.length; i++) {
    let br = brConfig[i].join('');
    if (str.includes(br)) {
        str = str.replace(br, '');
        i = -1;
    } 
}


return str ? false : true;
}