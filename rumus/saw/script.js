function hitung() {
  // Ambil nilai matriks dari input
  let a11 = parseFloat(document.querySelector("#a1k1").value);
  let a12 = parseFloat(document.querySelector("#a1k2").value);
  let a13 = parseFloat(document.querySelector("#a1k3").value);

  let a21 = parseFloat(document.querySelector("#a2k1").value);
  let a22 = parseFloat(document.querySelector("#a2k2").value);
  let a23 = parseFloat(document.querySelector("#a2k3").value);

  let a31 = parseFloat(document.querySelector("#a3k1").value);
  let a32 = parseFloat(document.querySelector("#a3k2").value);
  let a33 = parseFloat(document.querySelector("#a3k3").value);

  let a41 = parseFloat(document.querySelector("#a4k1").value);
  let a42 = parseFloat(document.querySelector("#a4k2").value);
  let a43 = parseFloat(document.querySelector("#a4k3").value);

  let a51 = parseFloat(document.querySelector("#a5k1").value);
  let a52 = parseFloat(document.querySelector("#a5k2").value);
  let a53 = parseFloat(document.querySelector("#a5k3").value);

  // Ambil nilai bobot dari input
  let w1 = parseFloat(document.querySelector("#k1").value);
  let w2 = parseFloat(document.querySelector("#k2").value);
  let w3 = parseFloat(document.querySelector("#k3").value);

  // Menghitung nilai minimal pada kolom pertama (atr cost)
  let minimalKolom1 = Math.min(a11, a21, a31, a41, a51);

  // Menghitung nilai minimal pada kolom kedua dan ketiga (atr benefit)
  let maksimalKolom2 = Math.max(a12, a22, a32, a42, a52);
  let maksimalKolom3 = Math.max(a13, a23, a33, a43, a53);

  //melakukan normalisasi data
  let n11 = a11 / minimalKolom1;
  let n12 = a12 / maksimalKolom2
  let n13 = a13 / maksimalKolom3

  let n21 = a21 / minimalKolom1;
  let n22 = a22 / maksimalKolom2;
  let n23 = a23 / maksimalKolom3;

  let n31 = a31 / minimalKolom1;
  let n32 = a32 / maksimalKolom2;
  let n33 = a33 / maksimalKolom3;

  let n41 = a41 / minimalKolom1;
  let n42 = a42 / maksimalKolom2;
  let n43 = a43 / maksimalKolom3;

  let n51 = a51 / minimalKolom1;
  let n52 = a52 / maksimalKolom2;
  let n53 = a53 / maksimalKolom3;

  // Menghitung nilai preferensi tiap alternatif
  let v1 = (w1*n11) + (w2*n12) + (w3*n13);
  let v2 = (w1*n21) + (w2*n22) + (w3*n23);
  let v3 = (w1*n31) + (w2*n32) + (w3*n33);
  let v4 = (w1*n41) + (w2*n42) + (w3*n43);
  let v5 = (w1*n51) + (w2*n52) + (w3*n53);

  // Tampilkan hasil riil
  let hasil1 = document.querySelector("#v1");
  let hasil2 = document.querySelector("#v2");
  let hasil3 = document.querySelector("#v3");
  let hasil4 = document.querySelector("#v4");
  let hasil5 = document.querySelector("#v5");

  hasil1.innerHTML = v1.toFixed(4);
  hasil2.innerHTML = v2.toFixed(4);
  hasil3.innerHTML = v3.toFixed(4);
  hasil4.innerHTML = v4.toFixed(4);
  hasil5.innerHTML = v5.toFixed(4);

document.getElementById("table-preferensi").style.display = "table";
}
