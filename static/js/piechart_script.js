var myPieChart; // Declare myPieChart outside of the function scope

$(document).ready(function() {
    var chartData = [
        {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple', 'orange']
        },
        {
            labels: ['A', 'B', 'C', 'D', 'E', 'F'],
            data: [10, 20, 5, 15, 25, 30],
            backgroundColor: ['lightblue', 'lightgreen', 'lightyellow', 'lightpink', 'lightcyan', 'lightcoral']
        },
        // Add more chart data as needed
    ];

    // Initialize the first chart
    createPieChart(0);

    // Dropdown change event listener
    $('#chartSelector').change(function() {
        var selectedChart = parseInt($(this).val());
        createPieChart(selectedChart);
    });

    // Function to create a pie chart
    function createPieChart(index) {
        var ctx = document.getElementById('myPieChart').getContext('2d');
        var data = chartData[index];

        // Destroy previous chart instance
        if (myPieChart) {
            myPieChart.destroy();
        }

        // Create new pie chart
        myPieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: data.labels,
                datasets: [{
                    data: data.data,
                    backgroundColor: data.backgroundColor
                }]
            }
        });
    }
});