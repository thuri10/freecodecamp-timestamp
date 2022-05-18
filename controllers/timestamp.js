
exports.timeStamp = (req, res, next) => {
    //store param in a variable
    let date_string =(req.params.date);
    let d = new Date(date_string);
    
    //validation of date string
    if (/^\d*$/.test(date_string)) {
      d.setTime(date_string);
    }
    // else we just create a new date parsing the string param
    else {
      d = new Date(date_string);
    }
    //check if param is undefined
    if (req.params.date === undefined) {
        d = new Date()
        const responseData = {
            "unix": Date.now(),
            "utc": d.toUTCString()
        }
        res.send(responseData);   
    } else {
        //check if param is a valid date
        if (dateIsValid(d) === true) {
            const responseData = {
                "unix": Number(Math.floor(d.getTime())),
                "utc": d.toUTCString()
            }
            res.send(responseData);
        } else {
            res.json({ error: 'Invalid Date'})
            d = new Date(Number(date_string));           
        }       
    }
}

//validate date params
function dateIsValid(date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
  );
}
