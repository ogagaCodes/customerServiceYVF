const mongoose = require("mongoose");
const app = require("./src/server");
const { seedUser } = require("./src/helpers/seeds/import");


mongoose
  .connect(process.env.MONGODBURI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => {
    const PORT = process.env.PORT || 8081;
    app.listen(PORT, () => {
      seedUser();
      console.log(`Server has started!... and running on port ${PORT}`);
    });
  });
