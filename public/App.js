function displayResults(news) {
    // First, empty the table
    $("tbody").empty();
  
    // Then, for each entry of that json...
    news.forEach(function(news) {
      // Append each of the animal's properties to the table
      $("tbody").append("<tr><td>" + news.title + "</td>" +
                           "<td>" + news.summary + "</td>" +
                           "<td>" + news.link + "</td>" +
                           "<td>" + news.NewsStory + "</td></tr>");
    });
  }
  
  // Bonus function to change "active" header
  function setActive(selector) {
    // remove and apply 'active' class to distinguish which column we sorted by
    $("th").removeClass("active");
    $(selector).addClass("active");
  }
  
  
  // First thing: ask the back end for json with stories
  $.getJSON("/all", function(data) {
    // Call our function to generate a table body
    displayResults(data);
  });
  
  // 2: Button Interactions
  // ======================
  
  // When user clicks scrape, display table sorted by story
  $("#scrape-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#scrape-title");
  
   
    $.getJSON("/title", function(data) {
      
      displayResults(data);
    });
  });
  
  // When user clicks the name sort button, sort by title
  $("#title-sort").on("click", function() {
    // Set new column as currently-sorted (active)
    setActive("#story-name");
  
    $.getJSON("/title", function(data) {
      // Call our function to generate table
      displayResults(data);
    });
  });
  