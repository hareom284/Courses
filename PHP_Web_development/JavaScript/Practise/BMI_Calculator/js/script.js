function calculate()
{
    // alert("work");
    let num1 = parseInt(document.form.weight.value);


    let num2 = parseInt(document.form.height.value);

    let total = [num1 / num2 / num2]*703;
    document.form.result.value = total;
}