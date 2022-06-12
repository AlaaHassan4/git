var MySection = document.querySelectorAll(".ali section");
var allli = document.getElementsByClassName("navLi")
var newli = document.querySelectorAll(".Drop section")
// console.log(MySection);
// console.log(allli);
console.log(newli);

function boxHandler() {
    setToggle(false)
}

//show and hide login and about
function dispaly(x) {
    index = x.getAttribute("index");

    MySection[index].classList.remove("hide");
    MySection[index].classList.add("show");
    // console.log(MySection[index]);
    currentSib = Array.from(MySection).slice();
    currentSib.splice(index, 1);

    for (var i = 0; i < currentSib.length; i++) {
        currentSib[i].classList.add("hide");
        currentSib[i].classList.remove("show");
    }
}
function dispalyDrop(x) {
    index = x.getAttribute("index");
    console.log(newli[index]);
    newli[index].classList.remove("hide");
    newli[index].classList.add("show");
    // console.log(MySection[index]);
    currentSib = Array.from(newli).slice();
    currentSib.splice(index, 1);

    for (var i = 0; i < currentSib.length; i++) {
        currentSib[i].classList.add("hide");
        currentSib[i].classList.remove("show");
    }
}

// for (var i = 0; i < allli.length; i++) {
//     // allli[i].addEventListener("click", function() {
//     console.log(allli[i].parentElement);
//     // });
//   }


//Start Monitoring


const selectAll = document.querySelector('.form-group.select-all input');
const allCheckbox = document.querySelectorAll('.form-group:not(.select-all) input');
let listBoolean = [];

allCheckbox.forEach(item => {
    item.addEventListener('change', function () {
        allCheckbox.forEach(i => {
            listBoolean.push(i.checked);
        })
        if (listBoolean.includes(false)) {
            selectAll.checked = false;
        } else {
            selectAll.checked = true;
        }
        listBoolean = []
    })
})

selectAll.addEventListener('change', function () {
    if (this.checked) {
        allCheckbox.forEach(i => {
            i.checked = true;
        })
    } else {
        allCheckbox.forEach(i => {
            i.checked = false;
        })
    }

})

$(document).ready(function () {
    $('input[type="checkbox"]').click(function () {
        var inputValue = $(this).attr("value");
        $("." + inputValue).toggle();
    });
});





// charts1

window.addEventListener('DOMContentLoaded', (event) => {
    const onect= document.getElementById("myone").getContext("2d");
    const onemyChart = new Chart(onect, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'weather temperature (Celsius)',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        onemyChart.data.labels.push('');
        onemyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.Weather);
        });
        onemyChart.update();
    })
});





// charts2

window.addEventListener('DOMContentLoaded', (event) => {
    const twoct= document.getElementById("mytwo").getContext("2d");
    const twomyChart = new Chart(twoct, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: [],
                backgroundColor: [
                    'rgb(211, 133, 131,0.2)',
                ],
                borderColor: [
                    '#C0504E',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        twomyChart.data.labels.push('');
        twomyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.Heart_Rate);
        });
        twomyChart.update();
    })
});












// charts3

window.addEventListener('DOMContentLoaded', (event) => {
    const thct= document.getElementById("myth").getContext("2d");
    const thmyChart = new Chart(thct, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Air Purity (AQI)',
                data: [],
                backgroundColor: [
                    'rgb(182, 230, 250,0.2)',
                ],
                borderColor: [
                    'rgb(10, 64, 127)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        thmyChart.data.labels.push('');
        thmyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.HearAir_qualityt_Rate);
        });
        thmyChart.update();
    })
});










// charts4

window.addEventListener('DOMContentLoaded', (event) => {
    const foct= document.getElementById("myfo").getContext("2d");
    const fomyChart = new Chart(foct, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Humidity (percent)',
                data: [],
                backgroundColor: [
                    'rgb(0, 92, 200,0.2)',
                ],
                borderColor: [
                    'rgb(10, 64, 127)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        fomyChart.data.labels.push('');
        fomyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.Humidity);
        });
        fomyChart.update();
    })
});



var ctxfo = document.getElementById("Chartfo");
var myCharfo = new Chart(ctxfo, {
  type: 'pie',
  data: {
    labels: [ 'Humidity (50%:60%)', 'The rest'],
    datasets: [{
      label: '# of Tomatoes',
      data: [60, 40],
      backgroundColor: [
        '#8BB3D8',
        '#B6E6FA'
      ],
      borderColor: [
        'white'
       
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});







// charts5

window.addEventListener('DOMContentLoaded', (event) => {
    const fct= document.getElementById("myf").getContext("2d");
    const fmyChart = new Chart(fct, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Animal Temperature (Celsius)',
                data: [],
                backgroundColor: [
                    'rgb(183, 37, 184,0.2)',
                ],
                borderColor: [
                    'rgb(128, 0, 128)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        fmyChart.data.labels.push('');
        fmyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.Animal_temperature);
        });
        fmyChart.update();
    })
});









// charts6

window.addEventListener('DOMContentLoaded', (event) => {
    const sict= document.getElementById("mysi").getContext("2d");
    const simyChart = new Chart(sict, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Oximeter (percent)',
                data: [],
                backgroundColor: [
                    'rgb(145, 156, 144,0.2)',
                ],
                borderColor: [
                    'rgb(98, 100, 86)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            // scales: {
            //     yAxes: [{
            //         ticks: {
            //             beginAtZero: true
            //         }
            //     }]
            // }
        }
    });

    const socket = io("http://localhost:3000", { transports : ['websocket'] })
    socket.on("connect",()=> {
    console.log(`you connected with id: ${socket.id}`)
    })

    socket.on("stream",(data)=> {
        console.log(data)

        simyChart.data.labels.push('');
        simyChart.data.datasets.forEach((dataset) => {
            dataset.data.push(data.SpO2_Rate);
        });
        simyChart.update();
    })
});









var ctxtd = document.getElementById("Charttow");
var myChartd = new Chart(ctxtd, {
  type: 'pie',
  data: {
    labels: [ 'OXIMETER (95%:100%)', 'The rest'],
    datasets: [{
      label: '# of Tomatoes',
      data: [95, 5],
      backgroundColor: [
        '#763073',
        '#808080'
      ],
      borderColor: [
        'white'
       
      ],
      borderWidth: 1
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});



// Confirm Password in editpassword
var $password = $("#password");
var $confirmPass = $("#confirm_password");

//Check the length of the Password
function checkLength(){
  return $password.val().length > 8;
}

//Check to see if the value for pass and confirmPass are the same
function samePass(){
  return $password.val()===$confirmPass.val();
}

//If checkLength() is > 8 then we'll hide the hint
function PassLength(){
  if(checkLength()){
    $password.next().hide();
  }else{
    $password.next().show();
  }
}

//If samePass returns true, we'll hide the hint
function PassMatch(){
  if(samePass()){
    $confirmPass.next().hide();
  }else{
    $confirmPass.next().show();
  }
}
function canSubmit(){
  return samePass() && checkLength();
}
function enableSubmitButton(){
  $("#submit").prop("disabled",!canSubmit());
}
//Calls the enableSubmitButton() function to disable the button
enableSubmitButton();

$password.keyup(PassLength).keyup(PassMatch).keyup(enableSubmitButton);
$confirmPass.focus(PassMatch).keyup(PassMatch).keyup(enableSubmitButton);



