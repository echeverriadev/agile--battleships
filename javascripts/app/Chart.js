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
  behaveLikeLine: true,
  resize: true,
  pointFillColors:['#ffffff'],
  pointStrokeColors: ['black']
})

