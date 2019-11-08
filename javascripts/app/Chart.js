var Chart = new Morris.Area({
  element: 'myfirstchart',
  data: [{x: '0', y: 0}],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Disparo'],
  parseTime: false,
  integerYLabels: true,
  fillOpacity: 0.6,
  hideHover: 'auto',
  resize: true,
  pointSize:3,
  smooth: false,
  behaveLikeLine:true,
  pointFillColors:['#ffffff'],
  pointStrokeColors: ['black']
})

