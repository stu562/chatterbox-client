var MessagesView = {

  $chats: $('#chats'),
  $submit: $(''),
  
  initialize: function() {
    //creating the message
    // var newMessage = new Messages();
    // return newMessage;
    // MessagesView.$chats.on('submit', MessagesView.renderMessage);
    MessagesView.renderMessage();
    // MessageView.initialize();
  },

  
  renderMessage: function() {
    // var message = initialize();
    //attach message to DOM - needs to be created for each 
    App.fetch(function(data) { 
      for (var i = 0; i < data.results.length; i++) {
        data.results[i].username;//username
        var message = MessageView.render({
          username: data.results[i].username,
          text: data.results[i].text
        });
        MessagesView.$chats.prepend(message);
      }
      console.log(data)
    });  

    
    
  }

};
