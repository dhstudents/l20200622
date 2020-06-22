//https://www.youtube.com/watch?v=IbqCWoFO410

let a = 1;
let b = 2;
let o = {a , b , show() { log(this)}}
console.log(o)
console.log(this)
const log = console.log;
log(this)
o.show()



function Car(id) {
    var secret
    function secretIt(n) {
        secret = n / 2 * 1000; 
    }
// this = undefined !!!!
    // const secretIt = (n) => {
    //     secret = n / 2 * 1000; 
    // }
    secretIt(id);
    this.id = id;
    Object.defineProperty(this, 'show', {
        get() {
            return secret;
        } ,
        set(value) {
            secretIt(value);
            //this.id = value;
        }
    });
}
//const oCar = new Car(24)
//oCar.show = 45;
// log(oCar.show)
// oCar.show = 450;
// log(oCar.show)

// Object.defineProperty(Car, 'show', {
//     get: function () {
//       return interID;
//     }
//   });


// Object.defineProperty(person, 'fullName', {
//     set: function (value) {
//       var names = value.split(' ');
//       this.firstName = names[0];
//       this.lastName = names[1];
//     }
//   });



// getter setter
const gs = {
    get show() {
        return Math.floor(Math.random() * 100);
    }
}
//log(gs.show);

const stam = {
    _val : 100,
    get prop10() {
        return this._val;
    },
    set prop10(value) {
        this._val = value;
    }
}

log(stam.prop10)
stam.prop10 = 300;
log(stam.prop10)




