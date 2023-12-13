
var callback = document.querySelector(".callback");
setTimeout(function () {
    callback.innerText = "10";
    setTimeout(function () {
        callback.innerText = "9";
        setTimeout(function () {

            callback.innerText = "8";
            setTimeout(function () {

                callback.innerText = "7";
                setTimeout(function () {

                    callback.innerText = "6";
                    setTimeout(function () {

                        callback.innerText = "5";
                        setTimeout(function () {

                            callback.innerText = "4";
                            setTimeout(function () {

                                callback.innerText = "3";
                                setTimeout(function () {

                                    callback.innerText = "2";
                                    setTimeout(function () {

                                        callback.innerText = "1";
                                        setTimeout(function () {

                                            callback.innerText = "Happy Independence Day!!!!!";

                                        }, 1000);


                                    }, 1000);


                                }, 1000);


                            }, 1000);

                        }, 1000);

                    }, 1000);

                }, 1000);

            }, 1000);

        }, 1000);
    }, 1000);
}, 1000);