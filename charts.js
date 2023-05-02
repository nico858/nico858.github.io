var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Python', 'JavaScript', 'HTML', 'Node.js', 'CSS'],
    datasets: [{
      data: [25, 20, 15, 10, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    pieceLabel: {
      render: 'percentage',
      fontColor: 'white',
      precision: 2
    }
  }
});
