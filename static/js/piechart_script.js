var myPieChart; // Declare myPieChart outside of the function scope

$(document).ready(function() {
    var chartData = [
        {
            labels: ['Drowning', 'Motor Vehicle Crash', 'Undetermined', 'Medical', 'Suicide', 'Other Transportation', 'Fall', 'Hyperthermia', 'Other', 'Poisoning', 'Blunt Force Trauma', 'Homicide', 'Vessel Incident'],
            data: [108, 57, 49, 34, 21, 9, 7, 6, 5, 4, 2, 1, 1],
            backgroundColor: ['blue', 'red', 'yellow', 'green', 'purple', 'orange', 'cyan', 'magenta', 'pink', 'brown', 'black', 'gray', 'white']
        },
        {
            labels: ['Medical', 'Fall', 'Undetermined', 'Drowning', 'Suicide', 'Hypertermia', 'Motor Vehicle Crash', 'Lightning Strike', 'Poisioning', 'Other', 'Flash Flood'],
            data: [53, 41, 24, 20, 20, 16, 5, 2, 2, 1, 1],
            backgroundColor: ['green', 'cyan', 'yellow', 'blue', 'purple', 'magenta', 'red', 'silver', 'brown', 'pink', 'lightblue']
        },
        {
            labels: ['Fall', 'Medical', 'Drowning', 'Undetermined', 'Motor Vehicle Crash', 'Suicide', 'Rockfall', 'Falling Tree/Branch', 'Hypothermia', 'Other', 'Poisoning', 'Other Transportation', 'Blunt Force Trauma', 'Avalanche'],
            data: [56, 35, 21, 21, 10, 10, 5, 4, 3, 3, 2, 1, 1, 1],
            backgroundColor: ['cyan', 'green', 'blue', 'yellow', 'red', 'purple', 'lightbrown', 'lightgreen', 'darkblue', 'pink', 'brown', 'orange', 'black', 'lightyellow']
        },
        {
            labels: ['Motor Vehicle Crash', 'Suicide', 'Medical', 'Undetermined', 'Homicide', 'Other', 'Fall', 'Falling Tree/Branch'],
            data: [93, 41, 7, 4, 2, 1, 1, 1],
            backgroundColor: ['red', 'purple', 'green', 'yellow', 'white', 'pink', 'cyan', 'lightgreen']
        },
        {
            labels: ['Undetermined', 'Suicide', 'Drowning', 'Fall', 'Medical', 'Poisoning', 'Motor Behicle Crash', 'Other Transportation', 'Hypothermia'],
            data: [40, 39, 25, 10, 10, 6, 6, 4, 2],
            backgroundColor: ['yellow', 'purple', 'blue', 'cyan', 'green', 'brown', 'red', 'orange', 'darkblue']
        },
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