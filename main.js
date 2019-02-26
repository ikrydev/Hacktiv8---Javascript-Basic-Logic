// Session 3
// Javascript Development

function cetak() {
    console.log("Hallo");
}

// Function

function cetakReturn() {
    return "Hallo";
}

function cetakHasil() {
    var result = 2 * 2;

    return result;
}

function kaliKali(angkaSatu = 1, angkaDua = 1) {
    return angkaSatu * angkaDua;
}

console.log(kaliKali(5, 3));
cetak();
var text = cetakReturn();
console.log(cetakHasil());

//Array

var nama = ['Fikri', 'Afif', 'Agil', 'Rangga'];
console.log(nama['0']);

nama.push("Jhon");
nama.pop();
nama.shift();
nama.unshift("Mayer");

// Objects

var obj = {
    nama: 'Fikri',
    yearOfBrith: 1999,
    country: 'Indonesia',
    age: function () {
        return 2019 - this.yearOfBrith;
    }
}

var car = {
    name: 'flat',
    weight: 850,
    model: 500,
    color: 'white'
}

console.log(obj.nama);
console.log(obj.age());
console.log(car.name);
console.log(car.color);

//