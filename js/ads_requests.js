const token = "dnp7EQ5y47A222l6fOc0XCbE3YCPrb6egKygc56I"

function testSearchRequest(searchString) {
  result = $.ajax({
    url: "https://api.adsabs.harvard.edu/v1/search/query?q="+encodeURI(searchString),
    type: "GET",
    headers: {
        "Access-Control-Allow-Origin":"*",
        "Authorization":"Bearer dnp7EQ5y47A222l6fOc0XCbE3YCPrb6egKygc56I"
    },
    crossDomain: true,
    success: function (response) {
        var resp = response
    },
    error: function (xhr, status) {
        console.log("Could not complete search request. ", xhr, status);
    }
  })
  return result
}
