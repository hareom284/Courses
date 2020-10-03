// loading in javascript 
window.onload = function one() {

    var bar = document.getElementById("bar"); //got the bar
    var width = 0; //got the width
    var lag = setInterval(load, 100); //set the var lag to providee intetval
    var main = document.getElementById("main"); //to be shown during loading
    var content = document.getElementById("content"); //to be shown after loading
    var h3 = document.getElementById("para");
    var h4 = document.getElementById("hatodo");

    function load() {
        if (width >= 100) { //after 100% loading events
            clearInterval(lag);
            main.style.display = 'none';
            content.style.display = 'block';

        } else { //during loading events
            width++;
            bar.style.width = width + '%';
            h3.innerHTML = width + '% loaded';

            // i have made quite a use of switch here
            switch (width) {

                case 1:
                    h4.innerHTML = "initiating....";
                    break;

                case 10:
                    h4.innerHTML = "getting titles....";
                    break;

                case 30:
                    h4.innerHTML = "titles ready.<br/>recieving files....";
                    break;

                case 50:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>recieving data...."
                    break;

                case 70:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document"
                    break;

                case 75:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document...."
                    break;

                case 80:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document..."
                    break;

                case 85:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document.."
                    break;

                case 90:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document."
                    break;

                case 95:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document.."
                    break;

                case 98:
                    h4.innerHTML = "titles ready<br/>files ready.<br/>data ready.</br>generating document...."
                    break;
                    //you can mess arond with this removing the break statements

            }
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
    var nOfDay = nOfDays(month, year);
    // console.log(nOfDay);
    var shit = 0;
    var generate = "";
    // console.log(day);
    //7 cloumns * six and six row  = 42 
    for (let int = 0; int < 41; int++) {


    }

    document.getElementById("generate").innerHTML = generate;

}