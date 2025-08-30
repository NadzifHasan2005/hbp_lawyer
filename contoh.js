let teks = "Hello, World!"; //STRING
let angka = 42; //NUMBER
let isTrue = true; //BOOLEAN
let kosong = null; //NULL
let tidakTerdefinisi; //UNDEFINED
let daftar = [1, 2, 3]; //ARRAY
let objek = { nama: "John", umur: 30 }; //OBJECT

console.log(typeof teks);
console.log(typeof angka);
console.log(typeof isTrue);
console.log(typeof kosong);
console.log(typeof tidakTerdefinisi);
console.log(typeof daftar);
console.log(typeof objek);

const PI = 3.14; //KONSTANTA


// ARRAY
let buah = ["apel", "jeruk", "pisang"]; //ARRAY
buah.push("mangga"); //Menambahkan elemen ke array
buah.splice(1, 1); //Menghapus elemen kedua
console.log(buah.length); // 3
console.log(buah.includes("jeruk")); // true
console.log(buah.includes("mangga")); // false


// OPERATOR
let a = 10;
let b = 5;

console.log(a + b); // Penjumlahan
console.log(a - b); // Pengurangan
console.log(a * b); // Perkalian
console.log(a / b); // Pembagian
console.log(a % b); // Sisa bagi

//CONDITIONAL
// percabangan if, ifelse, else
if (a > b) {
    console.log("a lebih besar dari b");
} else if (a < b) {
    console.log("a lebih kecil dari b");
} else {
    console.log("a sama dengan b");
}
// Contoh
let nilai = 70;

if (nilai >= 90) {
    console.log("A");
} else if (nilai >= 80) {
    console.log("B");
} else if (nilai >= 70) {
    console.log("C");
} else {
    console.log("D");
}

//Percabangan switch
switch (a) {
    case 1:
        console.log("a adalah 1");
        break;
    case 2:
        console.log("a adalah 2");
        break;
    default:
        console.log("a bukan 1 atau 2");
}
//contoh
let nilaiUjian = 78;

switch (nilaiUjian) {
    case 90:
        console.log("Nilai A");
        break;
    case 80:
        console.log("Nilai B");
        break;
    case 70:
        console.log("Nilai C");
        break; 
    default:
        break;
}


//LOOPING
// PENGULANGAN FOR
for (let i = 0; i < 5; i++) {
    console.log("Perulangan ke-" + i);
}
// PENGULANGAN WHILE
let count = 0;
while (count < 8) {
    console.log("Perulangan ke-" + count);
    count++};
//PENGULANGAN FOR OF
let hitung = [1, 2, 3, 4, 5];
for (const a of hitung) {
    console.log("Perulangan ke-" + a);
}


//FUNGSI
function tampilkanPesan() {
    console.log("Hello, World!");
}
tampilkanPesan();

function jumlahkan(a, b) {
    return a + b;
}
console.log(jumlahkan(5, 10));
//CONTOH
function tambah(a, b) {
    return a + b;
}

// DOM adalah singkatan dari Document Object Model. interface yang memungkinkan developer
// untuk berinteraksi dengan elemen-elemen HTML dan CSS pada halaman web.

//EVENT HANDLING
//event handling adalah proses menangani interaksi pengguna dengan elemen-elemen pada halaman web.
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});