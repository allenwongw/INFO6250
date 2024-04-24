const chatWeb = {
  chatPage: function(chat) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>Chat</title>
          <link rel="stylesheet" href="app.css">
        </head>
        <body>
          <div id="chat-app">
              ${chatWeb.getUserList(chat)}
              ${chatWeb.getMessageList(chat)}
              ${chatWeb.getOutgoingSection(chat)}
          </div>
        </body>
      </html>
  `;
  },

  getMessageList: function(chat) {
    return `<ol class="messages">` +
      Object.values(chat.messages).map( message => `
        <li>
          <div class="chat-box">
            <span class="sender">${message.sender}</span>
            <span class="message">${message.text}</span>
          </div>
        </li>
      `).join('') +
      `</ol>`;
  },

  getUserList: function(chat) {
    return `<ul class="users">` +
    Object.values(chat.users).map( user => `
      <li>
        <div class="user">
          <span class="username">${user}</span>
        </div>
      </li>
    `).join('') +
    `</ul>`;
  },

  getOutgoing: function() {
    return  `
    <form class="outgoing" action="/chat" method="POST">
      <input name="text" placeholder="Enter message to send">
      <input name="username" type="hidden">
      <button type="submit">send</button>
    </form>
    `
  },
};

module.exports = chatWeb;