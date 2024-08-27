// howto.js V1.1 27.08.2024
// Autor: Adrian Boehlen
//
// Script gibt die Funktionsweise der Berechnung aus
// (anschliessend an den Inhalt der aufrufenden Seite)

function howto() {
  document.getElementById("dok").innerHTML = "<hr noshade=\"noshade\" />\
  <h2>How it works</h2>\
  <p> This calculation is made by means of the side cosine theorem, since a spherical (Eulerian) triangle can be formed with place 1, place 2 and the north pole. The distance between place 1 and place 2 is therefore the great circle arc g. So the formula is:</p>\
  <p>cos g = sin &#966;1 sin &#966;2 + cos &#966;1 cos &#966;2 cos &#916;&#955;</p>\
  <p>(&#966;: Latitude / &#916;&#955;: Difference of longitudes)</p>\
  <p>From this the kilometre value can be calculated using the following formula: </p>\
  <p>Distance in kilometres = r g 2 &#960; / 360&deg;</p>\
  <p>where the radius r is assumed to be the mean radius of the Earth, 6371 km. <sup>1</sup></p>\
  <p>The given coordinates are converted into decimal degrees by means of the function <i>min2dec</i> and then converted into radians by means of the function <i>deg2rad</i>, because the methods sin and cos of the JavaScript object Math expect the data in radians. The method acos (arc cos), on the other hand, returns the result in radians, which is converted back into degrees via the function <i>rad2deg</i>. Finally, the result is rounded to an integer value using the round method of the Math object.</p>\
  <h3>Example</h3>\
  <p>Bern, CH: 7&deg; 27&rsquo; / 46&deg; 57&rsquo; (or 7.45&deg; / 46.95&deg;)<br />\
  Avarua, CK: -159&deg; 47&rsquo; / -21&deg; 12&rsquo; (or -159.78&deg; / -21.20&deg;)</p>\
  <p>The result should be: 16929 km</p>\
  <p>18.11.2004, Adrian B&ouml;hlen</p>\
  <p>Based on: Bartsch, Hans-Jochen: Mathematische Formeln, 1967, pp. 225 et seq.</p>\
  <p><sup>1</sup> <a target=\"_blank\" href=\"https://en.wikipedia.org/wiki/Earth_radius#Mean_radius\">https://en.wikipedia.org/wiki/Earth_radius#Mean_radius </a></p>\
  <hr noshade=\"noshade\" />\
  <p><a href=\"\">Close description</a></p>";
}