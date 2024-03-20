// let fruits = [ "banana", "mango", "coconut", "grape", "orange"]

// let fstr = fruits.toString()
// let upper = fstr.toUpperCase()
// let nfstr = Array (upper)
// console.log (nfstr);


// let upperFr = []
// fruits.

// let nuha ={
//     hairColor: "black",
//     eyeColoe: "black",
//     noseSize: "large",
//     height: "200cm",
//     sleeping: function () {
//         console.log( "current state is sleeping");
//     },
//     relStatus: fun
// }




let store = [
    {brand: "infinix Hot 13", price: 20},
    {brand: "Techno Camon 30", price: 40},
    {brand: "Samsung note 10", price: 200},
    {brand: "iphone XR", price: 150},
    {brand: "iphone XR", price: 150},
]

store.forEach((item)=>{
    console.log((item.brand));
})

// so we use the reduce method to get total Value.

let cart = store.reduce ((currentTotal, item)=>{
    return item.price + currentTotal
}, 0)

console.log(cart);

// the more you add to the cart, the higher the SVGAnimatedEnumeration.