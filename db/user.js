const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: Number, required: true },
});

let User = mongoose.model("User", userSchema);

module.exports.createUser = (obj) => {
  return new Promise((resolve, reject) => {
    let email = obj.providerEmail;
    User.findOne({ email }, (err, data) => {
      if (err) return reject(err);
      if (data === null) {
        User.create(obj, (err, data) => {
          if (err) return reject(err);
          resolve(data);
        });
      } else {
        resolve("exists");
      }
    });
  });
};

module.exports.findOnebyEmail = (obj) => {
  return new Promise((resolve, reject) => {
    let email = obj.providerEmail;
    User.findOne({ email }, (err, user) => {
      if (err) return reject(err);
      if (user !== null) {
        resolve(user);
      } else {
        resolve(user);
      }
    });
  });
};
