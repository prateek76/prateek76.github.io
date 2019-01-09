var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["HTML5", "CSS3", "JQUERY", "JAVASCRIPT(VanillaJS)", "angularJS", "PHP", "ReactJS","Cordova","React-native","Android-studio"],
        datasets: [{
            label: 'Rating',
            data: [100, 68, 78, 64, 30, 80, 60, 90, 80, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(28, 159, 64, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(28, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(28, 159, 64, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(28, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
         },
        scales: {
          xAxes: [{
            barPercentage: 0.2
        }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        maintainAspectRatio: false
    }
});

var ctx4 = document.getElementById("myChart4").getContext('2d');
var myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["Photoshop","..."],
        datasets: [{
            label: 'Rating',
            data: [65,-5],
            backgroundColor: [
                'rgba(255, 159, 64, 0.4)',
                'rgba(28, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(255, 159, 64, 1)',
                'rgba(28, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          xAxes: [{
            barPercentage: 0.2
        }],
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        maintainAspectRatio: false
    }
});
