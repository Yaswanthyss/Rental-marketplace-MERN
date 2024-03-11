const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect("mongodb+srv://Yaswanthyss:Yaswanth2004@cluster0.gdkcaqq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

