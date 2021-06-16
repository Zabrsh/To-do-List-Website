exports.getDate = function () {
    
    let today = new Date();

    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    return today.toLocaleDateString("en-US",options);

}

exports.getRandom = function () {
     let num = 8;
    return num; 
}