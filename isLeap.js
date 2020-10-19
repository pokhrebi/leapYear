function isLeap(year){
    var test1 = year % 4;
    var test2 = year % 100;
    var test3 = year % 400;
    if(test1 !== 0)
    {
        var year = "Not leap year.";
    }
    else
    {
        if(test2 !== 0)
        {
            year = "Leap year";
        }
        else
        {
            if (test3 !== 0)
            {
                year = "Not leap year.";
            }

            else
            {
                year = "Leap year.";
            }
        }
        
    }
   return year;
}