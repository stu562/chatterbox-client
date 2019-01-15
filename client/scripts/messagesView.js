var MessagesView = {

  $chats: $('#chats'),
  
  initialize: function() {
    //creating the message
    var newMessage = new Messages();
    return newMessage;
  },
  
  
  renderMessage: function(message) {
    // var message = initialize();
    //attach message to DOM - needs to be created for each 
    $chats.prepend(message);
  }

};

