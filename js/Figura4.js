// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("figura4", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"municipio": "Caratinga",
"2010": 0.24,
"2017": 0.26
}, {
"municipio": "Raul Soares",
"2010": 0.13,
"2017": 0.13
}, {
"municipio": "Inhapim",
"2010": 0.12,
"2017": 0.10
}, {
"municipio": "Bom Jesus do Galho",
"2010": 0.10,
"2017": 0.08
}, {
"municipio": "São Domingos do Prata",
"2010": 0.07,
"2017": 0.08
}, {
"municipio": "Antônio Dias",
"2010": 0.08,
"2017": 0.08
}, {
"municipio": "Piedade de Caratinga",
"2010": 0.06,
"2017": 0.07
}, {
"municipio": "Rio Piracicaba",
"2010": 0.02,
"2017": 0.06
}, {
"municipio": "Ubaporanga",
"2010": 0.07,
"2017": 0.06
}, {
"municipio": "Bugre",
"2010": 0.02,
"2017": 0.06
}, {
"municipio": "Dionísio",
"2010": 0.04,
"2017": 0.06
}, {
"municipio": "São Sebastião do Anta",
"2010": 0.04,
"2017": 0.06
}, {
"municipio": "Imbé de Minas",
"2010": 0.05,
"2017": 0.05
}, {
"municipio": "Açucena",
"2010": 0.04,
"2017": 0.05
}, {
"municipio": "Nova Era",
"2010": 0.02,
"2017": 0.05
}, {
"municipio": "Demais",
"2010": 0.66,
"2017": 0.55
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