function hitung() {
  // Ambil nilai bobot
  let k1 = parseFloat(document.getElementById("k1").value);
  let k2 = parseFloat(document.getElementById("k2").value);
  let k3 = parseFloat(document.getElementById("k3").value);

  // Ambil nilai alternatif
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

  // Hitung nilai S
  let s1 = Math.pow(a11, k1) * Math.pow(a12, k2) * Math.pow(a13, k3);
  let s2 = Math.pow(a21, k1) * Math.pow(a22, k2) * Math.pow(a23, k3);
  let s3 = Math.pow(a31, k1) * Math.pow(a32, k2) * Math.pow(a33, k3);
  let s4 = Math.pow(a41, k1) * Math.pow(a42, k2) * Math.pow(a43, k3);
  let s5 = Math.pow(a51, k1) * Math.pow(a52, k2) * Math.pow(a53, k3);

  // Hitung nilai V
  let totalS = s1 + s2 + s3 + s4 + s5;
  let v1 = s1 / totalS;
  let v2 = s2 / totalS;
  let v3 = s3 / totalS;
  let v4 = s4 / totalS;
  let v5 = s5 / totalS;

  // Tampilkan hasil
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

  // Show the result table
  document.getElementById("table-preferensi").style.display = "table";
}
