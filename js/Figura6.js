// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("figura6", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"municipio": "Ipatinga",
"2010": 1.80,
"2017": 1.55
}, {
"municipio": "João Monlevade",
"2010": 0.41,
"2017": 0.41
}, {
"municipio": "Timóteo",
"2010": 0.45,
"2017": 0.38
}, {
"municipio": "Coronel Fabriciano",
"2010": 0.36,
"2017": 0.37
}, {
"municipio": "Caratinga",
"2010": 0.32,
"2017": 0.34
}, {
"municipio": "São Gonçalo do Rio Abaixo",
"2010": 0.27,
"2017": 0.26
}, {
"municipio": "Belo Oriente",
"2010": 0.10,
"2017": 0.18
}, {
"municipio": "Santana do Paraíso",
"2010": 0.05,
"2017": 0.08
}, {
"municipio": "Nova Era",
"2010": 0.07,
"2017": 0.06
}, {
"municipio": "Rio Piracicaba",
"2010": 0.07,
"2017": 0.05
}, {
"municipio": "Inhapim",
"2010": 0.04,
"2017": 0.05
}, {
"municipio": "Raul Soares",
"2010": 0.04,
"2017": 0.05
}, {
"municipio": "São Domingos do Prata",
"2010": 0.03,
"2017": 0.04
}, {
"municipio": "Bela Vista de Minas",
"2010": 0.03,
"2017": 0.02
}, {
"municipio": "Ipaba",
"2010": 0.02,
"2017": 0.02
}, {
"municipio": "Demais",
"2010": 0.32,
"2017": 0.24
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