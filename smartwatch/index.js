/*$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                               // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #container'); // New content
});
*/

var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  // The following conditional check will not work locally - only on a server
  //if(xhr.status === 200) {                      // If server status was ok
    responseObject = JSON.parse(xhr.responseText);

    // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
    var newContent = '';
    newContent+='<h2 style="color:yellow;">Chats</h2>';
    //alert(responseObject.message.length);
    for (var i = 0; i < responseObject.message.length; i++) {
      //newContent += '<div class="event">';
      newContent += '<p style="font-size:25px;"><b>' + responseObject.message[i].name + '</b>  -'+responseObject.message[i].time+'</p>';
      newContent += '<p>'+responseObject.message[i].content+''+ '</p>';
      //newContent += '</div>';
    }
    // Update the page with the new content
    document.getElementById('contents').innerHTML = newContent;
};

xhr.open('GET', 'message.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request
