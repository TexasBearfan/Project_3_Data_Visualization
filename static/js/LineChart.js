<<<<<<< HEAD
// Define data for different national parks
var parksData = {
    "Yellowstone": [5, 8, 7, 10, 12, 9, 11, 15, 18, 16, 14, 13, 10, 9, 8],
    "Yosemite": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    "Grand Canyon": [2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5, 4],
    "Zion": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 9, 8, 7, 6, 5],
    "Glacier": [0, 1, 2, 3, 4, 5, 6, 7, 8, 7, 6, 5, 4, 3, 2]
};
// Create initial line chart
var ctx = document.getElementById('lineChart').getContext('2d');
var initialPark = "Yellowstone";
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 17}, (_, i) => 2007 + i),
        datasets: [{
            label: 'Number of Deaths',
            data: parksData[initialPark],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
// Event listener for dropdown menu change
document.getElementById('parkSelect').addEventListener('change', function() {
    var selectedPark = this.value;
    updateChart(selectedPark);
});
// Function to update the chart based on selected park
function updateChart(selectedPark) {
    myChart.data.datasets[0].data = parksData[selectedPark];
    myChart.update();
}






=======
$(document).ready(function() {
    var ctx = document.getElementById('myLineChart').getContext('2d');
    var lineChart;

    // Define chart data for each dataset
    var chartData = [
      {
        label: 'Lake Mead National Recreation Area',
        data: []
      },
      {
        label: 'Grand Canyon National Park',
        data: [10, 15, 6, 8, 5, 9, 12]
      },
      {
        label: 'Yosemite National Park',
        data: [5, 8, 12, 15, 18, 20, 22]
      },
      {
        label: 'Natchez Trace Parkway',
        data: [8, 10, 7, 12, 15, 11, 9]
      },
      {
        label: 'Golden Gate National Recreation Area',
        data: [15, 20, 18, 22, 25, 30, 28]
      }
    ];

    // Initialize the first chart
    createLineChart(0);

    // Dropdown change event listener
    $('#parkSelect').change(function() {
      var selectedDataset = parseInt($(this).val());
      createLineChart(selectedDataset);
    });

    // Function to create a line chart
    function createLineChart(index) {
      if (lineChart) {
        lineChart.destroy();
      }

      lineChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [{
            label: chartData[index].label,
            data: chartData[index].data,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  });
>>>>>>> bc8a105b2b12c8659f10243a6eef461efda76fd0
