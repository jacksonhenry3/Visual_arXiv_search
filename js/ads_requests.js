// Example: searchRequestFromString('"clumpy galaxies" candels year:2015')

const token = "dnp7EQ5y47A222l6fOc0XCbE3YCPrb6egKygc56I"

function assembleSearchURL(searchString) {
  url = "https://api.adsabs.harvard.edu/v1/search/query?q="
  url += encodeURI(searchString)
  url += "&fl=title,bibcode,citation_count,year"
  return url
}

function searchRequestFromString(searchString) {
  result = $.ajax({
    url: assembleSearchURL(searchString),
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

function searchRequest(fields) {
  searchString = ""
  for(var key in fields) {
    if(key == 'searchstr') {
      searchString += fields[key] + " "
    } else {
      searchString += key + ":" + obj[key] + " "
    }
    return searchRequestFromString(searchString)
  }
}
