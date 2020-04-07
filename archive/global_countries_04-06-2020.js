var globalData = [
	{ place: "Afghanistan", confirmed: 367, deaths: 11, recovered: 18, active: 338, coord:[33.939110,67.709953]},
	{ place: "Albania", confirmed: 377, deaths: 21, recovered: 116, active: 240, coord:[41.153332,20.168331]},
	{ place: "Algeria", confirmed: 1423, deaths: 173, recovered: 90, active: 1160, coord:[28.033886,1.659626]},
	{ place: "Andorra", confirmed: 525, deaths: 21, recovered: 31, active: 473, coord:[42.546245,1.601554]},
	{ place: "Angola", confirmed: 16, deaths: 2, recovered: 2, active: 12, coord:[-11.202692,17.873887]},
	{ place: "Antigua and Barbuda", confirmed: 15, deaths: 0, recovered: 0, active: 15, coord:[17.060816,-61.796428]},
	{ place: "Argentina", confirmed: 1554, deaths: 48, recovered: 325, active: 1181, coord:[-38.416097,-63.616672]},
	{ place: "Armenia", confirmed: 833, deaths: 8, recovered: 62, active: 763, coord:[40.069099,45.038189]},
	{ place: "Australia", confirmed: 5797, deaths: 40, recovered: 1080, active: 4677, coord:[-25.274398,133.775136]},
	{ place: "Austria", confirmed: 12297, deaths: 220, recovered: 3463, active: 8614, coord:[47.516231,14.550072]},
	{ place: "Azerbaijan", confirmed: 641, deaths: 7, recovered: 44, active: 590, coord:[40.143105,47.576927]},
	{ place: "Bahamas", confirmed: 29, deaths: 5, recovered: 4, active: 20, coord:[25.034280,-77.396280]},
	{ place: "Bahrain", confirmed: 756, deaths: 4, recovered: 458, active: 294, coord:[25.930414,50.637772]},
	{ place: "Bangladesh", confirmed: 123, deaths: 12, recovered: 33, active: 78, coord:[23.684994,90.356331]},
	{ place: "Barbados", confirmed: 60, deaths: 2, recovered: 6, active: 52, coord:[13.193887,-59.543198]},
	{ place: "Belarus", confirmed: 700, deaths: 13, recovered: 53, active: 634, coord:[53.709807,27.953389]},
	{ place: "Belgium", confirmed: 20814, deaths: 1632, recovered: 3986, active: 15196, coord:[50.503887,4.469936]},
	{ place: "Belize", confirmed: 7, deaths: 1, recovered: 0, active: 6, coord:[17.189877,-88.497650]},
	{ place: "Benin", confirmed: 26, deaths: 1, recovered: 5, active: 20, coord:[9.307690,2.315834]},
	{ place: "Bhutan", confirmed: 5, deaths: 0, recovered: 2, active: 3, coord:[27.514162,90.433601]},
	{ place: "Bolivia", confirmed: 183, deaths: 11, recovered: 2, active: 170, coord:[-16.290154,-63.588653]},
	{ place: "Bosnia and Herzegovina", confirmed: 674, deaths: 29, recovered: 47, active: 598, coord:[43.915886,17.679076]},
	{ place: "Botswana", confirmed: 6, deaths: 1, recovered: 0, active: 5, coord:[-22.328474,24.684866]},
	{ place: "Brazil", confirmed: 12161, deaths: 564, recovered: 127, active: 11470, coord:[-14.235004,-51.925280]},
	{ place: "Brunei", confirmed: 135, deaths: 1, recovered: 82, active: 52, coord:[4.535277,114.727669]},
	{ place: "Bulgaria", confirmed: 549, deaths: 22, recovered: 39, active: 488, coord:[42.733883,25.485830]},
	{ place: "Burkina Faso", confirmed: 364, deaths: 18, recovered: 108, active: 238, coord:[12.238333,-1.561593]},
	{ place: "Burma", confirmed: 22, deaths: 1, recovered: 0, active: 21, coord:[21.913965,95.956223]},
	{ place: "Burundi", confirmed: 3, deaths: 0, recovered: 0, active: 3, coord:[-3.373056,29.918886]},
	{ place: "Cabo Verde", confirmed: 7, deaths: 1, recovered: 1, active: 5, coord:[16.002082,-24.013197]},
	{ place: "Cambodia", confirmed: 114, deaths: 0, recovered: 53, active: 61, coord:[12.565679,104.990963]},
	{ place: "Cameroon", confirmed: 658, deaths: 9, recovered: 17, active: 632, coord:[7.369722,12.354722]},
	{ place: "Canada", confirmed: 16563, deaths: 339, recovered: 3256, active: 0, coord:[56.130366,-106.346771]},
	{ place: "Central African Republic", confirmed: 8, deaths: 0, recovered: 0, active: 8, coord:[6.611111,20.939444]},
	{ place: "Chad", confirmed: 9, deaths: 0, recovered: 0, active: 9, coord:[15.454166,18.732207]},
	{ place: "Chile", confirmed: 4815, deaths: 37, recovered: 728, active: 4050, coord:[-35.675147,-71.542969]},
	{ place: "China", confirmed: 82665, deaths: 3335, recovered: 77310, active: 2020, coord:[35.861660,104.195397]},
	{ place: "Colombia", confirmed: 1579, deaths: 46, recovered: 88, active: 1445, coord:[4.570868,-74.297333]},
	{ place: "Congo (Brazzaville)", confirmed: 45, deaths: 5, recovered: 2, active: 38, coord:[-0.228021,15.827659]},
	{ place: "Congo (Kinshasa)", confirmed: 161, deaths: 18, recovered: 5, active: 138, coord:[-4.038333,21.758664]},
	{ place: "Costa Rica", confirmed: 467, deaths: 2, recovered: 18, active: 447, coord:[9.748917,-83.753428]},
	{ place: "Cote d'Ivoire", confirmed: 323, deaths: 3, recovered: 41, active: 279, coord:[7.539989,-5.547080]},
	{ place: "Croatia", confirmed: 1222, deaths: 16, recovered: 130, active: 1076, coord:[45.100000,15.200000]},
	{ place: "Cuba", confirmed: 350, deaths: 9, recovered: 18, active: 323, coord:[21.521757,-77.781167]},
	{ place: "Cyprus", confirmed: 465, deaths: 9, recovered: 45, active: 411, coord:[35.126413,33.429859]},
	{ place: "Czechia", confirmed: 4822, deaths: 78, recovered: 121, active: 4623, coord:[49.817492,15.472962]},
	{ place: "Denmark", confirmed: 4875, deaths: 187, recovered: 1489, active: 3199, coord:[56.263920,9.501785]},
	{ place: "Djibouti", confirmed: 90, deaths: 0, recovered: 9, active: 81, coord:[11.825138,42.590275]},
	{ place: "Dominica", confirmed: 15, deaths: 0, recovered: 1, active: 14, coord:[15.414999,-61.370976]},
	{ place: "Dominican Republic", confirmed: 1828, deaths: 86, recovered: 33, active: 1709, coord:[18.735693,-70.162651]},
	{ place: "Ecuador", confirmed: 3747, deaths: 191, recovered: 100, active: 3456, coord:[-1.831239,-78.183406]},
	{ place: "Egypt", confirmed: 1322, deaths: 85, recovered: 259, active: 978, coord:[26.820553,30.802498]},
	{ place: "El Salvador", confirmed: 69, deaths: 4, recovered: 5, active: 60, coord:[13.794185,-88.896530]},
	{ place: "Equatorial Guinea", confirmed: 16, deaths: 0, recovered: 3, active: 13, coord:[1.650801,10.267895]},
	{ place: "Eritrea", confirmed: 31, deaths: 0, recovered: 0, active: 31, coord:[15.179384,39.782334]},
	{ place: "Estonia", confirmed: 1108, deaths: 19, recovered: 62, active: 1027, coord:[58.595272,25.013607]},
	{ place: "Eswatini", confirmed: 10, deaths: 0, recovered: 4, active: 6, coord:[-26.522503,31.465866]},
	{ place: "Ethiopia", confirmed: 44, deaths: 2, recovered: 4, active: 38, coord:[9.145000,40.489673]},
	{ place: "Fiji", confirmed: 14, deaths: 0, recovered: 0, active: 14, coord:[-16.578193,179.414413]},
	{ place: "Finland", confirmed: 2176, deaths: 27, recovered: 300, active: 1849, coord:[61.924110,25.748151]},
	{ place: "France", confirmed: 98963, deaths: 8926, recovered: 17428, active: 72609, coord:[46.227638,2.213749]},
	{ place: "Gabon", confirmed: 24, deaths: 1, recovered: 1, active: 22, coord:[-0.803689,11.609444]},
	{ place: "Gambia", confirmed: 4, deaths: 1, recovered: 2, active: 1, coord:[13.443182,-15.310139]},
	{ place: "Georgia", confirmed: 188, deaths: 2, recovered: 39, active: 147, coord:[42.315407,43.356892]},
	{ place: "Germany", confirmed: 103374, deaths: 1810, recovered: 28700, active: 72864, coord:[51.165691,10.451526]},
	{ place: "Ghana", confirmed: 214, deaths: 5, recovered: 31, active: 178, coord:[7.946527,-1.023194]},
	{ place: "Greece", confirmed: 1755, deaths: 79, recovered: 269, active: 1407, coord:[39.074208,21.824312]},
	{ place: "Grenada", confirmed: 12, deaths: 0, recovered: 0, active: 12, coord:[12.262776,-61.604171]},
	{ place: "Guatemala", confirmed: 70, deaths: 3, recovered: 15, active: 52, coord:[15.783471,-90.230759]},
	{ place: "Guinea", confirmed: 128, deaths: 0, recovered: 5, active: 123, coord:[9.945587,-9.696645]},
	{ place: "Guinea-Bissau", confirmed: 18, deaths: 0, recovered: 0, active: 18, coord:[11.803749,-15.180413]},
	{ place: "Guyana", confirmed: 31, deaths: 4, recovered: 8, active: 19, coord:[4.860416,-58.930180]},
	{ place: "Haiti", confirmed: 24, deaths: 1, recovered: 0, active: 23, coord:[18.971187,-72.285215]},
	{ place: "Holy See", confirmed: 7, deaths: 0, recovered: 0, active: 7, coord:[41.902916,12.453389]},
	{ place: "Honduras", confirmed: 298, deaths: 22, recovered: 6, active: 270, coord:[15.199999,-86.241905]},
	{ place: "Hungary", confirmed: 744, deaths: 38, recovered: 67, active: 639, coord:[47.162494,19.503304]},
	{ place: "Iceland", confirmed: 1562, deaths: 6, recovered: 460, active: 1096, coord:[64.963051,-19.020835]},
	{ place: "India", confirmed: 4778, deaths: 136, recovered: 375, active: 4267, coord:[20.593684,78.962880]},
	{ place: "Indonesia", confirmed: 2491, deaths: 209, recovered: 192, active: 2090, coord:[-0.789275,113.921327]},
	{ place: "Iran", confirmed: 60500, deaths: 3739, recovered: 24236, active: 32525, coord:[32.427908,53.688046]},
	{ place: "Iraq", confirmed: 1031, deaths: 64, recovered: 344, active: 623, coord:[33.223191,43.679291]},
	{ place: "Ireland", confirmed: 5364, deaths: 174, recovered: 25, active: 5165, coord:[53.412910,-8.243890]},
	{ place: "Israel", confirmed: 8904, deaths: 57, recovered: 585, active: 8262, coord:[31.046051,34.851612]},
	{ place: "Italy", confirmed: 132547, deaths: 16523, recovered: 22837, active: 93187, coord:[41.871940,12.567380]},
	{ place: "Jamaica", confirmed: 58, deaths: 3, recovered: 8, active: 47, coord:[18.109581,-77.297508]},
	{ place: "Japan", confirmed: 3654, deaths: 85, recovered: 575, active: 2994, coord:[36.204824,138.252924]},
	{ place: "Jordan", confirmed: 349, deaths: 6, recovered: 126, active: 217, coord:[30.585164,36.238414]},
	{ place: "Kazakhstan", confirmed: 662, deaths: 6, recovered: 46, active: 610, coord:[48.019573,66.923684]},
	{ place: "Kenya", confirmed: 158, deaths: 6, recovered: 4, active: 148, coord:[-0.023559,37.906193]},
	{ place: "Korea, South", confirmed: 10284, deaths: 186, recovered: 6598, active: 3500, coord:[35.907757,127.766922]},
	{ place: "Kosovo", confirmed: 145, deaths: 1, recovered: 23, active: 121, coord:[42.602636,20.902977]},
	{ place: "Kuwait", confirmed: 665, deaths: 1, recovered: 103, active: 561, coord:[29.311660,47.481766]},
	{ place: "Kyrgyzstan", confirmed: 216, deaths: 4, recovered: 33, active: 179, coord:[41.204380,74.766098]},
	{ place: "Laos", confirmed: 12, deaths: 0, recovered: 0, active: 12, coord:[19.856270,102.495496]},
	{ place: "Latvia", confirmed: 542, deaths: 1, recovered: 16, active: 525, coord:[56.879635,24.603189]},
	{ place: "Lebanon", confirmed: 541, deaths: 19, recovered: 60, active: 462, coord:[33.854721,35.862285]},
	{ place: "Liberia", confirmed: 14, deaths: 3, recovered: 3, active: 8, coord:[6.428055,-9.429499]},
	{ place: "Libya", confirmed: 19, deaths: 1, recovered: 1, active: 17, coord:[26.335100,17.228331]},
	{ place: "Liechtenstein", confirmed: 77, deaths: 1, recovered: 55, active: 21, coord:[47.166000,9.555373]},
	{ place: "Lithuania", confirmed: 843, deaths: 15, recovered: 8, active: 820, coord:[55.169438,23.881275]},
	{ place: "Luxembourg", confirmed: 2843, deaths: 41, recovered: 500, active: 2302, coord:[49.815273,6.129583]},
	{ place: "Madagascar", confirmed: 82, deaths: 0, recovered: 2, active: 80, coord:[-18.766947,46.869107]},
	{ place: "Malawi", confirmed: 5, deaths: 0, recovered: 0, active: 5, coord:[-13.254308,34.301525]},
	{ place: "Malaysia", confirmed: 3793, deaths: 62, recovered: 1241, active: 2490, coord:[4.210484,101.975766]},
	{ place: "Maldives", confirmed: 19, deaths: 0, recovered: 13, active: 6, coord:[3.202778,73.220680]},
	{ place: "Mali", confirmed: 47, deaths: 5, recovered: 9, active: 33, coord:[17.570692,-3.996166]},
	{ place: "Malta", confirmed: 241, deaths: 0, recovered: 5, active: 236, coord:[35.937496,14.375416]},
	{ place: "Mauritania", confirmed: 6, deaths: 1, recovered: 2, active: 3, coord:[21.007890,-10.940835]},
	{ place: "Mauritius", confirmed: 244, deaths: 7, recovered: 7, active: 230, coord:[-20.348404,57.552152]},
	{ place: "Mexico", confirmed: 2143, deaths: 94, recovered: 633, active: 1416, coord:[23.634501,-102.552784]},
	{ place: "Moldova", confirmed: 965, deaths: 19, recovered: 37, active: 909, coord:[47.411631,28.369885]},
	{ place: "Monaco", confirmed: 77, deaths: 1, recovered: 4, active: 72, coord:[43.750298,7.412841]},
	{ place: "Mongolia", confirmed: 15, deaths: 0, recovered: 2, active: 13, coord:[46.862496,103.846656]},
	{ place: "Montenegro", confirmed: 233, deaths: 2, recovered: 1, active: 230, coord:[42.708678,19.374390]},
	{ place: "Morocco", confirmed: 1120, deaths: 80, recovered: 81, active: 959, coord:[31.791702,-7.092620]},
	{ place: "Mozambique", confirmed: 10, deaths: 0, recovered: 1, active: 9, coord:[-18.665695,35.529562]},
	{ place: "Namibia", confirmed: 16, deaths: 0, recovered: 3, active: 13, coord:[-22.957640,18.490410]},
	{ place: "Nepal", confirmed: 9, deaths: 0, recovered: 1, active: 8, coord:[28.394857,84.124008]},
	{ place: "Netherlands", confirmed: 18926, deaths: 1874, recovered: 258, active: 16794, coord:[52.132633,5.291266]},
	{ place: "New Zealand", confirmed: 1106, deaths: 1, recovered: 176, active: 929, coord:[-40.900557,174.885971]},
	{ place: "Nicaragua", confirmed: 6, deaths: 1, recovered: 0, active: 5, coord:[12.865416,-85.207229]},
	{ place: "Niger", confirmed: 253, deaths: 10, recovered: 26, active: 217, coord:[17.607789,8.081666]},
	{ place: "Nigeria", confirmed: 238, deaths: 5, recovered: 35, active: 198, coord:[9.081999,8.675277]},
	{ place: "North Macedonia", confirmed: 570, deaths: 23, recovered: 30, active: 517, coord:[41.608635,21.745275]},
	{ place: "Norway", confirmed: 5865, deaths: 76, recovered: 32, active: 5757, coord:[60.472024,8.468946]},
	{ place: "Oman", confirmed: 331, deaths: 2, recovered: 61, active: 268, coord:[21.512583,55.923255]},
	{ place: "Pakistan", confirmed: 3766, deaths: 53, recovered: 259, active: 3454, coord:[30.375321,69.345116]},
	{ place: "Panama", confirmed: 1988, deaths: 54, recovered: 13, active: 1921, coord:[8.537981,-80.782127]},
	{ place: "Papua New Guinea", confirmed: 2, deaths: 0, recovered: 0, active: 2, coord:[-6.314993,143.955550]},
	{ place: "Paraguay", confirmed: 113, deaths: 5, recovered: 12, active: 96, coord:[-23.442503,-58.443832]},
	{ place: "Peru", confirmed: 2561, deaths: 92, recovered: 997, active: 1472, coord:[-9.189967,-75.015152]},
	{ place: "Philippines", confirmed: 3660, deaths: 163, recovered: 73, active: 3424, coord:[12.879721,121.774017]},
	{ place: "Poland", confirmed: 4413, deaths: 107, recovered: 162, active: 4144, coord:[51.919438,19.145136]},
	{ place: "Portugal", confirmed: 11730, deaths: 311, recovered: 140, active: 11279, coord:[39.399872,-8.224454]},
	{ place: "Qatar", confirmed: 1832, deaths: 4, recovered: 131, active: 1697, coord:[25.354826,51.183884]},
	{ place: "Romania", confirmed: 4057, deaths: 176, recovered: 406, active: 3475, coord:[45.943161,24.966760]},
	{ place: "Russia", confirmed: 6343, deaths: 47, recovered: 406, active: 5890, coord:[61.524010,105.318756]},
	{ place: "Rwanda", confirmed: 105, deaths: 0, recovered: 4, active: 101, coord:[-1.940278,29.873888]},
	{ place: "Saint Kitts and Nevis", confirmed: 10, deaths: 0, recovered: 0, active: 10, coord:[17.357822,-62.782998]},
	{ place: "Saint Lucia", confirmed: 14, deaths: 0, recovered: 1, active: 13, coord:[13.909444,-60.978893]},
	{ place: "Saint Vincent and the Grenadines", confirmed: 7, deaths: 0, recovered: 1, active: 6, coord:[12.984305,-61.287228]},
	{ place: "San Marino", confirmed: 266, deaths: 32, recovered: 35, active: 199, coord:[43.942360,12.457777]},
	{ place: "Saudi Arabia", confirmed: 2605, deaths: 38, recovered: 551, active: 2016, coord:[23.885942,45.079162]},
	{ place: "Senegal", confirmed: 226, deaths: 2, recovered: 92, active: 132, coord:[14.497401,-14.452362]},
	{ place: "Serbia", confirmed: 2200, deaths: 58, recovered: 0, active: 2142, coord:[44.016521,21.005859]},
	{ place: "Seychelles", confirmed: 11, deaths: 0, recovered: 0, active: 11, coord:[-4.679574,55.491977]},
	{ place: "Sierra Leone", confirmed: 6, deaths: 0, recovered: 0, active: 6, coord:[8.460555,-11.779889]},
	{ place: "Singapore", confirmed: 1375, deaths: 6, recovered: 344, active: 1025, coord:[1.352083,103.819836]},
	{ place: "Slovakia", confirmed: 534, deaths: 2, recovered: 8, active: 524, coord:[48.669026,19.699024]},
	{ place: "Slovenia", confirmed: 1021, deaths: 30, recovered: 102, active: 889, coord:[46.151241,14.995463]},
	{ place: "Somalia", confirmed: 7, deaths: 0, recovered: 1, active: 6, coord:[5.152149,46.199616]},
	{ place: "South Africa", confirmed: 1686, deaths: 12, recovered: 95, active: 1579, coord:[-30.559482,22.937506]},
	{ place: "Spain", confirmed: 136675, deaths: 13341, recovered: 40437, active: 82897, coord:[40.463667,-3.749220]},
	{ place: "Sri Lanka", confirmed: 178, deaths: 5, recovered: 38, active: 135, coord:[7.873054,80.771797]},
	{ place: "Sudan", confirmed: 12, deaths: 2, recovered: 2, active: 8, coord:[12.862807,30.217636]},
	{ place: "Suriname", confirmed: 10, deaths: 1, recovered: 0, active: 9, coord:[3.919305,-56.027783]},
	{ place: "Sweden", confirmed: 7206, deaths: 477, recovered: 205, active: 6524, coord:[60.128161,18.643501]},
	{ place: "Switzerland", confirmed: 21657, deaths: 765, recovered: 8056, active: 12836, coord:[46.818188,8.227512]},
	{ place: "Syria", confirmed: 19, deaths: 2, recovered: 2, active: 15, coord:[34.802075,38.996815]},
	{ place: "Taiwan*", confirmed: 373, deaths: 5, recovered: 57, active: 311, coord:[23.697810,120.960515]},
	{ place: "Tanzania", confirmed: 24, deaths: 1, recovered: 3, active: 20, coord:[-6.369028,34.888822]},
	{ place: "Thailand", confirmed: 2220, deaths: 26, recovered: 793, active: 1401, coord:[15.870032,100.992541]},
	{ place: "Timor-Leste", confirmed: 1, deaths: 0, recovered: 0, active: 1, coord:[-8.874217,125.727539]},
	{ place: "Togo", confirmed: 58, deaths: 3, recovered: 23, active: 32, coord:[8.619543,0.824782]},
	{ place: "Trinidad and Tobago", confirmed: 105, deaths: 8, recovered: 1, active: 96, coord:[10.691803,-61.222503]},
	{ place: "Tunisia", confirmed: 596, deaths: 22, recovered: 5, active: 569, coord:[33.886917,9.537499]},
	{ place: "Turkey", confirmed: 30217, deaths: 649, recovered: 1326, active: 28242, coord:[38.963745,35.243322]},
	{ place: "Uganda", confirmed: 52, deaths: 0, recovered: 0, active: 52, coord:[1.373333,32.290275]},
	{ place: "Ukraine", confirmed: 1319, deaths: 38, recovered: 28, active: 1253, coord:[48.379433,31.165580]},
	{ place: "United Arab Emirates", confirmed: 2076, deaths: 11, recovered: 167, active: 1898, coord:[23.424076,53.847818]},
	{ place: "United Kingdom", confirmed: 52279, deaths: 5385, recovered: 287, active: 46607, coord:[55.378051,-3.435973]},
	{ place: "Uruguay", confirmed: 406, deaths: 6, recovered: 104, active: 296, coord:[-32.522779,-55.765835]},
	{ place: "US", confirmed: 366614, deaths: 10783, recovered: 19581, active: 0, coord:[37.090240,-95.712891]},
	{ place: "Uzbekistan", confirmed: 457, deaths: 2, recovered: 30, active: 425, coord:[41.377491,64.585262]},
	{ place: "Venezuela", confirmed: 165, deaths: 7, recovered: 65, active: 93, coord:[6.423750,-66.589730]},
	{ place: "Vietnam", confirmed: 245, deaths: 0, recovered: 95, active: 150, coord:[14.058324,108.277199]},
	{ place: "West Bank and Gaza", confirmed: 254, deaths: 1, recovered: 24, active: 229, coord:[31.952200,35.233200]},
	{ place: "Western Sahara", confirmed: 4, deaths: 0, recovered: 0, active: 4, coord:[24.215527,-12.885834]},
	{ place: "Zambia", confirmed: 39, deaths: 1, recovered: 5, active: 33, coord:[-13.133897,27.849332]},
	{ place: "Zimbabwe", confirmed: 10, deaths: 1, recovered: 0, active: 9, coord:[-19.015438,29.154857]}
];