var ctx = document.getElementById("myChart1").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["HTML5", "CSS3", "JQUERY", "JAVASCRIPT(VanillaJS)", "angularJS", "PHP", "ReactJS"],
        datasets: [{
            label: 'Rating',
            data: [100, 68, 78, 64, 30, 80, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
                'rgba(153, 102, 255, 0.4)',
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

var ctx0 = document.getElementById("myChart0").getContext('2d');
var myChart = new Chart(ctx0, {
    type: 'bar',
    data: {
        labels: ["Hackerearth","Codechef","Codeforces"],
        datasets: [{
            label: 'Rating',
            data: [1607, 1648, 1432],
            backgroundColor: [
                'rgba(158, 3, 168	, 0.4)',
                'rgba(51,102,204,.4)',
                'rgba(3, 168, 158	, 0.4)'
            ],
            borderColor: [
              'rgba(158, 3, 168	, 1)',
              'rgba(51,102,204,1)',
              'rgba(3, 168, 158, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          xAxes: [{
            barPercentage: 0.4
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

var ctx2 = document.getElementById("myChart2").getContext('2d');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ["Cordova","React-native","Android-studio"],
        datasets: [{
            label: 'Rating',
            data: [95,87,2],
            backgroundColor: [
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 159, 64, 0.4)',
                'rgba(28, 159, 64, 0.4)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
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

var ctx3 = document.getElementById("myChart3").getContext('2d');
var myChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Unity","Javascript Web game development"],
        datasets: [{
            label: 'Rating',
            data: [42,68],
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
