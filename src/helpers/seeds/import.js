const fs = require("fs");


exports.seedUser = async () => {
  try {
    const Users = require("../../modules/models/user.model");
    const records = await Users.countDocuments();

    if (records) {
        console.log("User already exist in datastore")
      return;
    }

    const data = fs.readFileSync(
      `${process.cwd()}/src/helpers/seeds/user.json`,
      "utf8"
    );

    await Users.insertMany(JSON.parse(data));
    console.log("user inserted");
  } catch (err) {
    console.log(err);
  }
};


