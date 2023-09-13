// calculator.js V1.2 11.09.2023
// Autor: Adrian Boehlen
//
// Script berechnet die Distanz zweier Punkte auf der Erdoberflaeche
// unter Annahme, die Erde sei eine Kugel mit r = 6371.0088 km

function main() {
  var x1 = document.calculator.xdeg1.value * 1;
  if (x1 < 0) {
    var x1m = neg2pos(min2dec(document.calculator.xmin1.value));
  } else {
    var x1m = min2dec(document.calculator.xmin1.value);
  }
  x1 = deg2rad(x1 + x1m);
  var y1 = document.calculator.ydeg1.value * 1;
  if (y1 < 0) {
    var y1m = neg2pos(min2dec(document.calculator.ymin1.value));
  } else {
    var y1m = min2dec(document.calculator.ymin1.value);
  }
  y1 = deg2rad(y1 + y1m);
  var x2 = document.calculator.xdeg2.value * 1;
  if (x2 < 0) {
    var x2m = neg2pos(min2dec(document.calculator.xmin2.value));
  } else {
    var x2m = min2dec(document.calculator.xmin2.value);
  }
  x2 = deg2rad(x2 + x2m);
  var y2 = document.calculator.ydeg2.value * 1;
  if (y2 < 0) {
    var y2m = neg2pos(min2dec(document.calculator.ymin2.value));
  } else {
    var y2m = min2dec(document.calculator.ymin2.value);
  }
  y2 = deg2rad(y2 + y2m);

  var delta_l = x1 - x2;
  if (delta_l < 0) {
    delta_l = neg2pos(delta_l);
  }

  var cos_e = Math.sin(y1) * Math.sin(y2) + Math.cos(y1) * Math.cos(y2) * Math.cos(delta_l);
  var r = 6371.0088; // mean Earth radius
  var dist = r * rad2deg(Math.acos(cos_e)) * 2 * Math.PI / 360;
  dist = Math.round(dist);
  document.calculator.erg.value = dist;
}

function deg2rad(input) {
  var output = Math.PI * input / 180;
  return output;
}
function rad2deg(input) {
  var output = 180 * input / Math.PI;
  return output;
}
function min2dec(input) {
  var output = input / 60;
  return output;
}
function neg2pos(input) {
  var output = input * -1;
  return output;
}