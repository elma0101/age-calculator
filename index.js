


//initialiser les variables



//set age

function set_age() {



    event.preventDefault();

    var day1 = 0, month1 = 0, year1 = 0, day2, month2, year2;
    var current_day, current_month, current_year;
    var sum1, sum_current, sum2;
    var coef1, coef2;

    current_day = new Date().getDate();
    current_month = new Date().getMonth() + 1;
    current_year = new Date().getFullYear();
    day1 = parseInt(document.getElementById('Day1').value);
    month1 = parseInt(document.getElementById('Month1').value);
    year1 = parseInt(document.getElementById('Year1').value);

    console.log(year1);
    console.log(month1);
    console.log(day1);

    if (year1 >= 1900 && year1 < current_year && month1 >= 1 && month1 <= 12 && day1 >= 1 && day1 <= 31) {

        if (month1 == 1 || month1 == 3 || month1 == 5 || month1 == 7 || month1 == 8 || month1 == 10 || month1 == 12)
            coef1 = 31;
        else if (month1 == 4 || month1 == 6 || month1 == 9 || month1 == 11)
            coef1 = 30;
        else
            coef1 = 29;

        sum1 = year1 * 365 + month1 * coef1 + day1;



        if (current_month == 1 || current_month == 3 || current_month == 5 || current_month == 7 || current_month == 8 || current_month == 10 || current_month == 12)
            coef2 = 31;
        else if (current_month == 4 || current_month == 6 || current_month == 9 || current_month == 11)
            coef2 = 30;
        else
            coef2 = 29;

        sum_current = current_year * 365 + current_month * coef2 + current_day;

        sum2 = sum_current - sum1;
        year2 = Math.floor(sum2 / 365);
        sum2 = sum2 - year2 * 365;
        month2 = Math.floor(sum2 / coef1);
        sum2 = sum2 - month2 * coef1;
        day2 = sum2;
 
        document.getElementById("error").innerHTML = "";
        document.getElementById("Day").innerHTML = day2;
        document.getElementById("Month").innerHTML = month2;
        document.getElementById("Year").innerHTML = year2;

    } else {

        if (year1 < 1900 || year1 > 2024)
            document.getElementById("error").innerHTML = "must be a valid year ";
        else if (month1 < 1 || month1 > 12)
            document.getElementById("error").innerHTML = "must be a valid month ";
        else if (day1 < 1 || day1 > 31)
            document.getElementById("error").innerHTML = "must be a valid day ";
        else if (isNaN(year1) || isNaN(month1) || isNaN(day1))
            document.getElementById("error").innerHTML = "field is required";


        document.getElementById("Day").innerHTML = "--";
        document.getElementById("Month").innerHTML = "--";
        document.getElementById("Year").innerHTML = "--";


        document.getElementsByClassName("date").style.color = 'red';
    }


}
