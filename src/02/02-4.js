const arr2 = [];
arr2.push(1);
arr2.splice(0, 0, 0); //arr2 = [0,1]
arr2.pop(); //arr2 = [1]
const obj2 = {};
obj2['name'] = '내이름'; //obj2 = {name:'내이름'}
Object.assign(obj2, { name: '새이름' }); //obj2 = {name:'새이름'}
