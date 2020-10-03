function Calculate() {
    let monthlySalary = document.getElementById('salary').value;
    console.log(monthlySalary);
    let month = document.getElementById('month').value;
    console.log(month);
    let child = document.getElementById('child').value;
    console.log(child);
    //check 
    var mother = document.getElementById("mother").checked;
    console.log(mother);
    var father = document.getElementById("father").checked;
    console.log(father);
    var spouse = document.getElementById("spouse").checked;
    console.log(spouse);

    //taking anual salary by multipling by 12

    var annual = monthlySalary * month;
    //personal relief
    var personalRelef = document.getElementById('personal').value;
    console.log(personalRelef);
    //parent and wife checking
    var parentRelief = 0;
    //checking for parentrelifef
    if (father == true && mother == true) {
        parentRelief = 2000000;
    } else if (father == true || mother == true) {
        parentRelief = 1000000;
        // alert("work");
    } else {
        parentRelief = 0;
    }
    console.log("Parent", parentRelief);
    //checking wife relief
    var Wife = 0;
    if (spouse == true) {
        Wife = 1000000;
    } else {
        Wife = 0;
    }
    //checking child relief 
    var childRelief = 0;
    if (child >= 1) {
        childRelief = 500000 * child;
    } else if (child == 0) {
        childRelief = 0;
    }
    var Taxableamount = annual - personalRelef - parentRelief - Wife - childRelief;
    var monthlyTax = 0;
    var annualTax = 0;
    console.log(annual);
    console.log("Text", Taxableamount);
    // annual = CalculateperCentage(annual);
    if (Taxableamount >= 5000000 || Taxableamount <= 10000000) {
        annualTax = Taxableamount * 0.1;
    } else if (Taxableamount > 2000000 || Taxableamount < 5000000) {
        annualTax = Taxableamount * 0.05;
    } else if (Taxableamount > 10000000 || Taxableamount < 10000000) {
        annualTax = Taxableamount * 0.2;
    }
    //annual tax
    console.log("annual Tax", annualTax);
    //monthly tax
    monthlyTax = annualTax / 12;
    console.log(monthlyTax);
    //array for output 
    var dataList = [{
            name: "Monthly Salary",
            data: monthlySalary
        },
        {
            name: "Annual Salary",
            data: annual
        },
        {
            name: "Parent Relief",
            data: parentRelief
        },

        {
            name: "Spouse Relief",
            data: Wife
        },
        {
            name: "Child Relief",
            data: childRelief
        },
        {
            name: "Other deductibles",
            data: personalRelef
        },
        {
            name: "Taxable Income",
            data: Taxableamount
        },
        {
            name: "Total Tax",
            data: annualTax
        },
        {
            name: "Monthly Tax",
            data: monthlyTax
        }
    ];
    // console.log(dataList[0].name);
    // console.log("Work");
    // console.log(dataList[0].data);
    //arrayd
    var html = "";
    for (let i = 0; i < dataList.length; i++) {
        html += `<tr><td> ${dataList[i].name}<td> 
                  <td>${dataList[i].data}</td> </tr>`;

    }
    document.getElementById("firstTable").innerHTML = html;
    var how = `<h1> Details(How it calculate) </h1>
    <table border="1">
    <tr>
    <th>Description</th>
    <th>rate</th>
    </tr>
    <tr>
    <td>Up to 20 Lakh</td>
    <td>0%</td>
    </tr>
    <tr>
    <td>20 Lakh - 50 Lakh</td>
    <td>50%</td>
    </tr>
    <tr>
    <td>100 Lakh - 200 Lakh</td>
    <td>20%</td>
    </tr>
    <table>`;
    document.getElementById('howitwork').innerHTML = how;


}