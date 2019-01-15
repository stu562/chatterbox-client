var MessageView = {
  //referenced in messagesview 
  //chat is one message 
  //we think this is the view - create NODE here -
  //associated w/ 0 or 1 model objects
  //inheirent from messages.js
  render: _.template(`
      <div id="chats">
        <div class="username"></div>
        <div></div>
      </div>
    `),
  html: this.render(message),//creates the obj
  // if we add line 19 as a property, 

};

var message = new Messages();//obj

