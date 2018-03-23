
$("#searchButton").on("click", function(){
    // capture search input
    var q = $("#searchInput").val().trim();
    console.log('q: ',q);
    // capture relevant parameters: TD
    // convert to relevant info to concatenate to the queryURL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += "?" + $.param({
        'api-key':'f619a2561fab45979fb395466716b7ba',
        'q': q
    });
    // captures users input-ed number of search terms
    var resultsNumber = $("#resultNum").val();

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(result){
        console.log('result: ',result);
        for (var i =0; i<resultsNumber.length; i++){
            console.log(result.response.docs[i].headline.main);
        }        
    });
});