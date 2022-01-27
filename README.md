# calculate_distances

## Purpose
calculate_distances is a simple JavaScript which can be included in any html page and calculates the average distance between two places on Earth.

This tool is used for the "Geomatikausbildung" (education of the geomatic trainees) at the "Bundesamt für Landestopografie swisstopo".

## Background
Since the Earth is a geoid, calculating distances is very complex if the results have to be accurate. But for lower accuracy requirements, the Earth can be assumed to be a sphere, which greatly simplifies the calculation. The necessary formulas are described e.g. here \[1\]. Earth's mean radius is 6,371.0088 km \[2\].

## System requirements
None, except for a web browser with JavaScript enabled.

## Installation
Download the repository into your desired directory:

```
cd <directory>
git clone https://github.com/ABoehlen/calculate_distances
```

From the new directory open then index.html with your preferred web browser.

## Usage

Clicking on the "Start here" link opens a new small window where the geographic coordinates of two different locations have to be given. It's possible to enter degrees and minutes in the corresponding fields or just use decimal degrees (in the field °). In this case, the "minutes" field remains empty. West longitude and south latitude require negative values.

After clicking on the button "Calculate the distance in km" the result will be given in the field below.

### Example
Bern: 7° 27' / 46° 57' (or 7.45° / 46.95°)

Avarua: -159° 47' / -21° 12' (or -159.78° / -21.20°)

The result should be: 16929 km

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Literature
\[1\] Bartsch, Hans-Jochen: Mathematische Formeln, 1967, pp. 225 et seq.

\[2\] https://en.wikipedia.org/wiki/Earth_radius#Mean_radius