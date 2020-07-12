// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("figura3", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"municipio": "São Gonçalo do Rio Abaixo",
"2010": 1113.4,
"2017": 1062.7
}, {
"municipio": "Belo Oriente",
"2010": 291.9,
"2017": 289.5
}, {
"municipio": "Ipatinga",
"2010": 175.5,
"2017": 135.6
}, {
"municipio": "Rio Piracicaba",
"2010": 170.4,
"2017": 128.0
}, {
"municipio": "João Monlevade",
"2010": 128.9,
"2017": 119.3
}, {
"municipio": "Timóteo",
"2010": 140.1,
"2017": 118.6
}, {
"municipio": "Bela Vista de Minas",
"2010": 64.2,
"2017": 76.9
}, {
"municipio": "Jaguaraçu",
"2010": 74.2,
"2017": 75.4
}, {
"municipio": "Antônio Dias",
"2010": 44.7,
"2017": 72.9
}, {
"municipio": "Braúnas",
"2010": 78.6,
"2017": 68.0
}, {
"municipio": "Nova Era",
"2010": 87.0,
"2017": 65.5
}, {
"municipio": "Caratinga",
"2010": 56.2,
"2017": 64.2
}, {
"municipio": "Joanésia",
"2010": 70.8,
"2017": 56.6
}, {
"municipio": "Coronel Fabriciano",
"2010": 49.5,
"2017": 54.8
}, {
"municipio": "Santana do Paraíso",
"2010": 56.5,
"2017": 54.7
}, {
"municipio": "Demais",
"2010": 30.4,
"2017": 37.5
}];

//console.log('chart', chart);

// -------EIXOS--------

// Eixo X
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "municipio";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;

// Labels
categoryAxis.renderer.labels.template.horizontalCenter = "right";
categoryAxis.renderer.labels.template.verticalCenter = "middle";
categoryAxis.renderer.labels.template.rotation = 270;

// Eixo Y
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "%";

// -------SÉRIES--------

// Série 2010
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "2010";
series.dataFields.categoryX = "municipio";
series.name = "2010";
series.tooltipText = "{name}: [bold]{valueY}[/]";

// Série 2017
var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "2017";
series2.dataFields.categoryX = "municipio";
series2.name = "2017";
series2.tooltipText = "{name}: [bold]{valueY}[/]";

// Cursor
chart.cursor = new am4charts.XYCursor();