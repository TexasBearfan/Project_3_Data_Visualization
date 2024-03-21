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





1:55
