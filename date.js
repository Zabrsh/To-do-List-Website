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
=======

>>>>>>> afc1a1eba0f83348d71069c840788d572d795c9e
