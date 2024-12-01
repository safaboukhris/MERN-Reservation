const mongoose = require("mongoose");

const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Database connected successfully"))
        .catch((error) => {
            console.error("Database connection failed:", error);
            process.exit(1); 
    });
};

module.exports = connectDB;
