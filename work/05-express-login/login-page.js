const loginPage = {
    show: function() {
        return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>Welcome</title>
            <link rel="stylesheet" href="app.css">
          </head>
          <body>
            <div class="login-container">
              <h2>Welcome to Login</h2>
              <form class="login-form" action="/login" method="POST">
                <label for="username">Username:</label>
                <input id="username" name="username" class="login-text" type="text" placeholder="Username" required>
                <button class="login-btn" type="submit">Log~In</button>
              </form>
            </div>
          </body>
        </html>  
        `;
    }
}

module.exports = loginPage;
