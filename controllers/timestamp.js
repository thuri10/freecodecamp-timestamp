
exports.timeStamp = (req, res, next) => {
    //store param in a variable
    let date_string =(req.params.date);    
    let d = new Date(date_string);
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
                "unix": Math.floor(d.getTime() / 1000),
                "utc": d.toUTCString()
            }
            res.send(responseData);
        } else {
            d = new Date(parseInt(date_string))
            const responseData = {
              unix: parseInt(date_string),
              utc: d.toUTCString()
            };
            res.send(responseData);
        }
     }
}

//validate date params
function dateIsValid(date) {
  return (
    Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date)
  );
}
