var MessagesView = {

  $chats: $('#chats'),
  $getmessages: $('.getmessages'),
  
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
    
        //escape prevent malcious attacks `
        var message = MessageView.render({
          username: _.escape(data.results[i].username),
          text: _.escape(data.results[i].text),
        });
        MessagesView.$chats.prepend(message);
        // MessagesView.$getmessages.prepend(message);
      }
      console.log(data)
    });  
  }
  
      
  
}
  




//     initialize: function() {
//       sendMessage: Messages.$submit.on('submit', Messages.handleSubmit);
//       },  
//   handleSubmit: function() {
//       var message = {
//           username: App.username,
//           text: $("#message").val(),//gets current text typed into input box
//           roomname: ''
//       };
//           Parse.create(message);//ships off to server 
