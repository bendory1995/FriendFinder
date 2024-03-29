var friendData = require("../data/friends");

module.exports = function(app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
  
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    app.post("/api/friends", function(req, res) {
      // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
      // It will do this by sending out the value "true" have a table
      // req.body is available since we're using the body parsing middleware

        friendData.push(req.body);
        res.json(true);
  
    });

    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        friendData.length = 0;
    
        res.json({ ok: true });
      });
  };
  