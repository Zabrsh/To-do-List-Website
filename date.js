exports.getDate = function () {
    
    let today = new Date();

    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }

    return today.toLocaleDateString("en-US",options);

}

<<<<<<< HEAD

exports.getRandom = function () {
     let num = 8;
    return num; 
}
=======
>>>>>>> 73adb47394c4e6a0960edbd4479f10074604dc8a
