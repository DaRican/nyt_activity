<<<<<<< HEAD
$("button").on("click", function () {
    var mySearch = $(this).attr("*search-term*");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=7DUQIH9nNCwbzAF682173JSVlbKHpBwz"
}
=======

queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey";

$.ajax({
    url: queryUrl
})
>>>>>>> 01e58c56e7a7d858bd382071a77db1a3dd65157a
