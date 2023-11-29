// Schema: blueprint that defines the structure of documents (records) in MongoDB collection

// Importing Mongoose library for MongoDB and Node.js
const mongoose = require('mongoose')

// Creating mongoose schema
const goalSchema = mongoose.Schema(
    {
        // User associated with the goal
        user: {
            // stores unique identifier of a user record in another collection
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            // Reference to the 'User' Model, linked to 'User' collection
            ref: 'User',
        },
        // Content if the goal
        text: {
            type: String,
            required: [true, 'Please add a text value'],
        },
    },
    {
        // Used to store the creation and last updated timestamps
        // 'createdAt' and 'updatedAt'
        timestamps: true,
    }
)

// Create a Mongoose model named 'Goal' using mongoose.model
module.exports = mongoose.model('Goal', goalSchema)