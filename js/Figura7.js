// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("figura7", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"municipio": "Ipatinga",
"2010": 1.38,
"2017": 1.18
}, {
"municipio": "Coronel Fabriciano",
"2010": 0.44,
"2017": 0.46
}, {
"municipio": "Timóteo",
"2010": 0.48,
"2017": 0.40
}, {
"municipio": "João Monlevade",
"2010": 0.41,
"2017": 0.39
}, {
"municipio": "Caratinga",
"2010": 0.38,
"2017": 0.38
}, {
"municipio": "Santana do Paraíso",
"2010": 0.12,
"2017": 0.14
}, {
"municipio": "Belo Oriente",
"2010": 0.14,
"2017": 0.14
}, {
"municipio": "São Gonçalo do Rio Abaixo",
"2010": 0.10,
"2017": 0.13
}, {
"municipio": "Inhapim",
"2010": 0.10,
"2017": 0.11
}, {
"municipio": "Raul Soares",
"2010": 0.11,
"2017": 0.10
}, {
"municipio": "Nova Era",
"2010": 0.09,
"2017": 0.09
}, {
"municipio": "Ipaba",
"2010": 0.07,
"2017": 0.08
}, {
"municipio": "São Domingos do Prata",
"2010": 0.08,
"2017": 0.08
}, {
"municipio": "Rio Piracicaba",
"2010": 0.07,
"2017": 0.07
}, {
"municipio": "Bom Jesus do Galho",
"2010": 0.07,
"2017": 0.06
}, {
"municipio": "Demais",
"2010": 0.97,
"2017": 0.93
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