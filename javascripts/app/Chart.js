var Chart = new Morris.Area({
  element: 'myfirstchart',
  data: [{x: '0', y: 0}],
  xkey: 'x',
  ykeys: ['y'],
  labels: ['Ganancias/Pérdidas'],
  parseTime: false,
  integerYLabels: true,
  lineColors: ['#31708f']
})

