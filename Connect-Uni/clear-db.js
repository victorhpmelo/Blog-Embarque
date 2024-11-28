const fs = require('fs');

const emptyDb = {
  user: {
    username: "",
    posts: []
  }
};

fs.writeFile('db.json', JSON.stringify(emptyDb, null, 2), (err) => {
  if (err) throw err;
  console.log('db.json has been cleared');
});