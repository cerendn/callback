// function calculate(num1,num2,num3,num4,callback) {
//     let value = calculation (num1,num2,num3,num4)
//     callback(value);
// }
// calculate(10,25,35,40)

//function getPositiveNums(element){
    //const newArr = [];
    //for(let i = 0; i< arr.length; i++) {
        if(element[i] >= 0 && !(element[i] % 2)) //{
            //newArr.push(arr[i]);
        //}
    //}
    //return true ;
//}
console.log(getPositiveNums([0,2,-4,4,5,7,8,10]));

function getNegativeNums(element){
    //const newArr = [];
    //for(let i = 0; i< arr.length; i++) {
        if(element[i] < 0 && !(element[i] % 2)) //{
            //newArr.push(arr[i]);
        //}
        return false;
    }
    
//}
console.log(getNegativeNums([0,1,3,-6,7]));

//üstteki fonksiyonları callback olarak düzenleyip kod fazlalıgından 
function getNums(arr,callback) { //high order function
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            newArr.push(arr[i])
        }
        
    }
    return newArr;
}
const nums =[0,1,2,3,4,5,-6,-7,-8,9,-10]
console.log(getNums(nums,(element) => element <0 ));//arrow function yazımı

//Callbackte kullanılan array metodları
//forEach undefined döndürür sonuc döndürmüyor aldıgı parametreler element,index,arr 2 si optional) loops görevi görüyor
nums.array.forEach((element) => console.log(element +2));

//map (aldıgı parametreler element,index,arr 2 si optional)
const filteredByMapArr = nums.map((element) => element * 3);//implicit return oldugu için return yazılmadan sonuc : arrow func. sag taraf exp. oldgnda return yazılmaz,statement oldugunda normal funct. gibi yazılır.
console.log(filteredByMapArr)

//filter içine sart kosabiliyoruz element index arr (2 si optional)
const filteredNums = nums.filter((element) => element % 2 === 0)
console.log(filteredNums);


