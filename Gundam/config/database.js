const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Yoyoacevedo30:Yoyoezio13@sei37.rk3bs.mongodb.net/gundam?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', function() {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});