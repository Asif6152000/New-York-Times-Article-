$("#searchButton").on("click", function(){
    // capture search input
    var q = $("#searchInput").val().trim();
    // capture relevant parameters: TD
    // convert to relevant info to concatenate to the queryURL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += "?" + $.param({
        'api-key':'f619a2561fab45979fb395466716b7ba',
        q
    });
    // captures users input-ed number of search terms
    var resultsNumber = $("#resultNum").val();

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(result){
        for (var i =0; i<result.response.docs.length; i++){
            console.log(result.response.docs[i].headline.main);
        }        
    });

});