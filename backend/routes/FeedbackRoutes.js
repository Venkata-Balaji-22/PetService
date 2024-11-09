const express = require('express');
const router = express.Router();
const Feedback = require('../models/FeedbackModal'); // Assuming your feedback model is in the models directory


// Route to handle feedback submission
router.post('/', async (req, res) => {
    const { name, email, feedback } = req.body;

    try {
        const newFeedback = new Feedback({ name, email, feedback });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully!' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ message: 'Failed to submit feedback.', error: error.message });
    }
});

// You can add more routes here as needed (e.g., GET to retrieve feedback)

module.exports = router;
