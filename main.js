//jika tombol diklik maka akan?
function mesin(){
    //1.harus mengambil nilai dari inputan
    let inputan = document.getElementById ("input").value;
    //2.membuat elementbaru untuk elemen ul
    let baru = document.createElement("li");
    //3.target untuk element baru
    let listbaru = document.querySelector ("ul");
    listbaru.appendChild(baru);
    //4.listbaru akan membuat konten hasil dari inputan
    baru.textContent=inputan;  
    if (inputan.length <= 1) {
        alert ("tulislah dengan benar blog");
    }
    else {
        alert ("selamat anda benar memasukan data");
    }
}