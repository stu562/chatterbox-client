var Messages = {
    $submit: $('.submit'),
    $getmessage: $('.getmessages'),
    initialize: function() {
        Messages.$submit.on('click', Messages.handleSubmit);
    },  
    reinitialize: function() {
        Messages.$getmessage.on('click', MessagesView.renderMessage);
    },
    handleSubmit: function() {
        var message = {
              username: App.username,
              text: $("#message").val(),//gets current text typed into input box
              roomname: ''
        };
        Parse.create(message);//ships off to server 
        MessagesView.renderMessage();//allows for new data to be rendered, need to change when 'get new message' button is clicked 
  }

}
