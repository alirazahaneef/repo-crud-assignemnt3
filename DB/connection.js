const mongoose = require("mongoose");

const URI =
	"mongodb+srv://alihanfi:alihanfi@cluster0.r612b.mongodb.net/cluster0?retryWrites=true&w=majority";

const connectDB = async () => {
	await mongoose.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
	console.log("Connection Established");
};

module.exports = connectDB;
