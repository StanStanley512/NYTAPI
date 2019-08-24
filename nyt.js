let url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

$.ajax({
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=CG7SUCGbzciNUo1qz0rc4WieoMRbMYUP",
    method: "GET"
    
    }).then(function(response) {
    let headline = $("#well-section").text(response.response.docs[0].headline);
    $("#well-section").text(headline);

});

$("#run-search").on("click", function(){
    let searchTerm = ""
    let keyword = ""

    if (searchTerm === keyword){
        let headline = $("#well-section").text(response.response.docs[0].headline);
        $("#well-section").text(headline);
    } else {
        
    }
