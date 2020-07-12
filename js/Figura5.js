// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("figura5", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"municipio": "Ipatinga",
"2010": 3.12,
"2017": 2.72
}, {
"municipio": "São Gonçalo do Rio Abaixo",
"2010": 1.47,
"2017": 1.77
}, {
"municipio": "Belo Oriente",
"2010": 0.91,
"2017": 0.93
}, {
"municipio": "Timóteo",
"2010": 0.86,
"2017": 0.92
}, {
"municipio": "João Monlevade",
"2010": 0.61,
"2017": 0.69
}, {
"municipio": "Rio Piracicaba",
"2010": 0.28,
"2017": 0.22
}, {
"municipio": "Caratinga",
"2010": 0.11,
"2017": 0.13
}, {
"municipio": "Coronel Fabriciano",
"2010": 0.12,
"2017": 0.11
}, {
"municipio": "Bela Vista de Minas",
"2010": 0.05,
"2017": 0.07
}, {
"municipio": "Santana do Paraíso",
"2010": 0.11,
"2017": 0.07
}, {
"municipio": "Nova Era",
"2010": 0.08,
"2017": 0.05
}, {
"municipio": "Antônio Dias",
"2010": 0.00,
"2017": 0.04
}, {
"municipio": "Braúnas",
"2010": 0.04,
"2017": 0.04
}, {
"municipio": "Joanésia",
"2010": 0.04,
"2017": 0.03
}, {
"municipio": "Jaguaraçu",
"2010": 0.01,
"2017": 0.02
}, {
"municipio": "Demais",
"2010": 0.10,
"2017": 0.14
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