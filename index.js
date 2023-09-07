const PI = 3.141592654;

let radius;
let umfang;
let fläche;
let durchmesser;

console.log("Was hast du in der Konsole vor? 🤨")
console.log("Bei Kritik/Bugreporting mich kontaktieren")

document.addEventListener("keydown", (event) => {
  event.key == "Enter" && document.getElementById("berechnen").click();
});
document.getElementById("berechnen").addEventListener("click", () => {
  // Berechnung, wenn Radius eingegeben wurde
  if (document.getElementById("typen").value === "Radius") {
    // Umfangsberechnung
    radius = document.getElementById("werteingabe").value;
    umfang = Number(umfang);
    umfang = Math.round(2 * PI * radius * 100) / 100;
    document.getElementById("ergebnis-umfang").classList.add("bold");
    document.getElementById("ergebnis-umfang").innerHTML = umfang;

    // Radiusanzeige
    radius = Number(radius);
    document.getElementById("ergebnis-radius").classList.add("bold");
    document.getElementById("ergebnis-radius").innerHTML = radius;

    // Flächenberechnung
    fläche = Math.round(PI * Math.pow(radius, 2) * 100) / 100;
    document.getElementById("ergebnis-fläche").classList.add("bold");
    document.getElementById("ergebnis-fläche").innerHTML = fläche;

    // Durchmesserberechnung
    durchmesser = Math.round(Math.pow(radius, 2) * 100) / 100;
    document.getElementById("ergebnis-durchmesser").classList.add("bold");
    document.getElementById("ergebnis-durchmesser").innerHTML = durchmesser;

    // Berechnung, wenn Fläche eingegeben wurde
  } else if (document.getElementById("typen").value === "Fläche") {
    // Radiusberechnung
    fläche = document.getElementById("werteingabe").value;
    fläche = Number(fläche);
    radius = Math.round(Math.sqrt(fläche / PI) * 100) / 100;
    document.getElementById("ergebnis-radius").classList.add("bold");
    document.getElementById("ergebnis-radius").innerHTML = radius;

    // Fläche
    document.getElementById("ergebnis-fläche").classList.add("bold");
    document.getElementById("ergebnis-fläche").innerHTML = fläche;

    // Umfangsberechnung
    umfang = Math.round(2 * PI * radius * 100) / 100;
    document.getElementById("ergebnis-umfang").classList.add("bold");
    document.getElementById("ergebnis-umfang").innerHTML = umfang;

    // Durchmesserberechnung
    durchmesser = Math.round(2 * radius * 100) / 100;
    document.getElementById("ergebnis-durchmesser").classList.add("bold");
    document.getElementById("ergebnis-durchmesser").innerHTML = durchmesser;

    // Berechnung, wenn Umfang eingegeben wurde
  } else if (document.getElementById("typen").value === "Umfang") {
    // Radiusberechnung
    umfang = document.getElementById("werteingabe").value;
    umfang = Number(umfang);
    radiusb = umfang / (2 * PI);
    radius = Math.round((umfang / (2 * PI)) * 100) / 100;
    document.getElementById("ergebnis-radius").classList.add("bold");
    document.getElementById("ergebnis-radius").innerHTML = radius;

    // Flächenberechnung
    fläche = Math.round(PI * Math.pow(radiusb, 2) * 100) / 100;
    document.getElementById("ergebnis-fläche").classList.add("bold");
    document.getElementById("ergebnis-fläche").innerHTML = fläche;

    // Umfangsberechnung
    document.getElementById("ergebnis-umfang").classList.add("bold");
    document.getElementById("ergebnis-umfang").innerHTML = umfang;

    // Durchmesserberechnung
    durchmesser = Math.round(2 * radiusb * 100) / 100;
    document.getElementById("ergebnis-durchmesser").classList.add("bold");
    document.getElementById("ergebnis-durchmesser").innerHTML = durchmesser;

    // Berechnung, wenn Durchmesser eingegeben wurde
  } else if (document.getElementById("typen").value === "Durchmesser") {
    // Radiusberechnung
    durchmesser = document.getElementById("werteingabe").value;
    durchmesser = Number(durchmesser);
    radius = Math.round((durchmesser / 2) * 100) / 100;
    document.getElementById("ergebnis-radius").classList.add("bold");
    document.getElementById("ergebnis-radius").innerHTML = radius;

    // Flächenberechnung
    fläche = Math.round(PI * Math.pow(radius, 2) * 100) / 100;
    document.getElementById("ergebnis-fläche").classList.add("bold");
    document.getElementById("ergebnis-fläche").innerHTML = fläche;

    // Umfangberechnung
    umfang = Math.round(2 * PI * radius * 100) / 100;
    document.getElementById("ergebnis-umfang").classList.add("bold");
    document.getElementById("ergebnis-umfang").innerHTML = umfang;

    // Durchmesseranzeige
    document.getElementById("ergebnis-durchmesser").classList.add("bold");
    document.getElementById("ergebnis-durchmesser").innerHTML = durchmesser;
  }
});
