function convertion(value) {
    let cel = Number(document.getElementById('celcious').value);
    let far = Number(document.getElementById('fahrenheit').value);
    let kel = Number(document.getElementById('kelvin').value);

    let result1;
    let result2;
    if (value == 'b') {
        document.getElementById('celcious').value = "";
        document.getElementById('fahrenheit').value = "";
        document.getElementById('kelvin').value = "";
        cel = '';
        far = '';
        kel = '';

    } else {
        if (cel == '' && far == " ") {
            result1 = parseInt(kel - 273.15).toFixed(2) //to converet it into celcious
            result2 = parseInt((((kel - 273.15) * 9) / 5) + 32).toFixed(2) // to conver it into fahrenheit
            document.getElementById('celcious').value = result1
            document.getElementById('fahrenheit').value = result2
        } else if (cel == " " && kel == " ") {
            result1 = (((parseInt(far) - 32) * 5) / 9).toFixed(2); // convert to celcious
            result2 = ((((parseInt(far) - 32) * 5) / 9) + 273.15).toFixed(2) // convert it to kelvin
            document.getElementById('celcious').value = result1
            document.getElementById('kelvin').value = result2

        } else {
            result1 = (parseInt(cel) + 273.15).toFixed(2) // to convert it to kelvin
            result2 = ((((parseInt(cel) * 9) / 5)) + 32).toFixed(2); // celcious to fahrenheit
            document.getElementById('kelvin').value = result1
            document.getElementById('fahrenheit').value = result2
        }

    }


}