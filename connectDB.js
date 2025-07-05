const { default: mongoose } = require("mongoose");

async function connectDB() {
    mongoose.connect(process.env.DATABASE)
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => {
        console.log('❌ MongoDB connection error:')
        process.exit(1);
    })
}

module.exports = connectDB;