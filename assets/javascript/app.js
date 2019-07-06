$("button").on("click", function () {
    var mySearch = $('#form-group').val();
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + mySearch + "&api-key=7DUQIH9nNCwbzAF682173JSVlbKHpBwz";




    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {

        var results = response.data;
        console.log(reponse);



        //for (var i = 0;)
    }


    )
}

);
