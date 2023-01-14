const mongoose = require("mongoose");

class MongoDB {
  constructor() {
    this.uri =
      "mongodb+srv://yungxin:yungxinpassword@mochi.j3njxdv.mongodb.net/panda?retryWrites=true&w=majority";
    this.connection = null;
    this.model = null;
  }

  connect(schema, modelName) {
    mongoose.connect(this.uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    this.connection = mongoose.connection;
    this.connection.on(
      "error",
      console.error.bind(console, "connection error:")
    );
    this.connection.once("open", () => {
      console.log("Connected to MongoDB!");
    });
    this.model = mongoose.model(modelName, schema);
  }

  async insertOne(document) {
    try {
      const newDocument = new this.model(document);
      return await newDocument.save();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async findOne(query) {
    try {
      return await this.model.findOne(query);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async find(query) {
    try {
      return await this.model.find(query);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateOne(query, update) {
    try {
      return await this.model.findOneAndUpdate(query, update, { new: true });
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteOne(query) {
    try {
      return await this.model.findOneAndDelete(query);
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  close() {
    this.connection.close();
  }
}

// testing
const customerSchema = new mongoose.Schema({
  CustAccNo: String,
  CustWalletAdd: String,
  CustName: String,
  CustPK: String,
});

const mongo = new MongoDB();
mongo.connect(customerSchema, "transaction");

const newCust = {
  CustAccNo: "yx12345",
  CustWalletAdd: "sample_address",
  CustName: "yx",
  CustPK: "sample_PK",
};
mongo.insertOne(newCust).then((cust) => console.log(cust));
