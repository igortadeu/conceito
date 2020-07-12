// -------TEMA-------
am4core.useTheme(am4themes_animated);

// -------INSTÂNCIA--------
var chart = am4core.create("grafico1", am4charts.XYChart);

// -------DADOS--------
chart.data = [{
"setor": "Administração Pública",
"2010": 13.9,
"2017": 16.7
}, {
"setor": "Serviços Privados",
"2010": 36.2,
"2017": 41.4
}, {
"setor": "Indústria",
"2010": 48.1,
"2017": 39.8
}, {
"setor": "Agropecuária",
"2010": 1.8,
"2017": 2.0
}];

//console.log('chart', chart);

// -------EIXOS--------

// Eixo Y
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "setor"

// Eixo X
var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());

// -------SÉRIES--------

// Série 2010
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueX = "2010";
series.dataFields.categoryY = "setor";
series.name = "2010";
series.tooltipText = "{name}: [bold]{valueX}[/]";

// Série 2017
var series2 = chart.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueX = "2017";
series2.dataFields.categoryY = "setor";
series2.name = "2017";
series2.tooltipText = "{name}: [bold]{valueX}[/]";

// Cursor
chart.cursor = new am4charts.XYCursor();