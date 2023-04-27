const mongoose = require('mongoose');

class Database {
  connect = () => {
    return new Promise((resolve) => {
      mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      const db = mongoose.connection;

      db.on('error', () => {
        console.error('Error connecting to the database');
        resolve(db);
        process.exit(1);
      });

      db.once('open', function () {
        console.log('DB connected');
        resolve(db);
      });
    });
  };

  async disconnect() {
    await mongoose.disconnect();
    console.log('DB disconnected');
  }
}

module.exports = new Database();
