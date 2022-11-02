

// https://www.instrumentationtoolbox.com/2011/05/converting-thermocouple-milivolts-to.html

// Tm = TL + [(Vm - Vl)/(Vh - Vl)](Th - Tl);
// Vm = Volt
// vH = Høy Volt fra tabell
// Vl = Lav volt fra tabell
// Tm = Kalkulert temperatur
// Th = Høy temperatur fra tabell
// Tl = Lav temperatur fra tabell

document.getElementById("varmt").style.visibility = "hidden";
document.getElementById("output").style.visibility = "hidden";
  document.getElementById("mVinput").addEventListener("input", function(e){
   document.getElementById("output").style.visibility = "visible";
      document.getElementById("varmt").style.visibility = "visible";
   let mV = e.target.value;
   document.getElementById("CelsiusOutput").innerHTML = Math.round(mV/0.35).toFixed(2) + ("°C");
   document.getElementById("FahrenheitOutput").innerHTML = Math.round(mV*5).toFixed(2) + ("°F");
   document.getElementById("KelvinOutput").innerHTML = Math.round(mV/1.4).toFixed(2) + (" K"); 
 });