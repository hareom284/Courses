// loading in javascript 
window.onload = function one() {

    var loading = document.getElementById("loading"); //got the bar
    var width = 0; //got the width
    var lag = setInterval(load, 100); //set the var lag to providee intetval
    var main = document.getElementById("main"); //to be shown during loading
    var content = document.getElementById("content"); //to be shown after loading
    var h3 = document.getElementById("para");

    function load() {
        if (width >= 100) { //after 100% loading events
            clearInterval(loading);
            main.style.display = 'none';
            content.style.display = 'block';

        } else { //during loading events
            width++;
            h3.innerHTML = width + '% loaded';

        }
    }
    getDat();

}

function getDat() {
    let date = new Date();
    let weekday = date.getDay();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    // console.log(month);
    console.log(day);
    console.log(weekday);
    let weekDay = ["sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    // console.log(weekDay[day]);
    let Month = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    // console.log(Month[month]);
    //setting day month and year to header
    //get date from window date and time 
    document.getElementById("month").innerHTML = Month[month];
    document.getElementById("year").innerHTML = year;
    document.getElementById("day").innerHTML = day;
    // get number of day in one month 

    //adding nOfDays in 
    function nOfDays(month, year) {
        return new Date(year, month, 0).getDate();
    }
    dat = new Date(year, month, 01);
    var first_day = dat.getDay()
    console.log("first_day", first_day);
    var last_day = nOfDays(month, year);
    // console.log(nOfDay);

    var shit = 1;
    var generate = "";
    // console.log(day);
    //7 cloumns * six and six row  = 42 

    // generate date from this algorithms 
    // https://www.plus2net.com/javascript_tutorial/date-project-calendar1.php
    for (let int = 0; int < 42; int++) {

        //after a week
        if ((int % 7) == 0) {
            generate += `</ul><ul>`
        }
        if ((int >= first_day) && (shit <= last_day + 1)) {
            if (shit == day) {
                generate += `<li style="background-color:aqua;border-radius:10px;">${shit++}</li>`;
            } else {
                generate += `<li> ${shit++} </li>`;
            }
        } else {
            generate += `<li>-</li>`;
        }


    }
    generate += `</ul>`
    // console.log(generate);

    document.getElementById("generate").innerHTML = generate;

}