const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

/// Using MongoDB for data storage
// Assuming user authentication via JWT tokens, with user information stored in req.user
// Two collections: Poll and Users

app.use(bodyParser.json());

// Admin creates a new poll
pp.post("/createPoll", async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res
        .status(401)
        .send({ message: "Do not have the right permission." });

    const { question, options } = req.body;
    let pollOptions = {};
    options.forEach((option) => {
      pollOptions[option] = 0;
    });

    const poll = await Poll.create({ question, options: pollOptions });
    console.log("check here for poll", poll);

    res
      .status(200)
      .json({ success: true, message: "Poll created successfully", poll });
  } catch (error) {
    console.error("Error creating poll:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.post("/vote", async (req, res) => {
  try {
    let { option, pollId } = req.body;
    // Only a user role can vote

    if (req.user.role !== "user")
      return res
        .status(401)
        .send({ message: "Do not have the right permission." });

    let userId = req.user.id;
    // Check if poll exist
    const poll = await Poll.findOne({ _id: pollId });

    if (!poll) {
      return res
        .status(404)
        .json({ success: false, message: "Poll not found" });
    }
    // check if there user already vote
    const updatedPoll = await Poll.findOneAndUpdate(
      { _id: pollId, votedUsers: { $nin: userId } },
      {
        $inc: { [`options.${option}`]: 1 },
        $addToSet: { votedUsers: userId },
      },
      { new: true }
    );

    if (!updatedPoll) {
      return res.status(400).json({
        success: false,
        message: "Vote not counted. User might have already voted.",
      });
    }

    res.status(200).json({
      success: true,
      message: "Vote counted successfully",
      poll: updatedPoll,
    });
  } catch (error) {
    console.error("Error processing vote:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
// Admin views poll results
// Use post so will not expose the pollId which might be sensitive
app.post("/getPollResults", async (req, res) => {
  try {
    if (req.user.role !== "admin")
      return res
        .status(401)
        .send({ success: false, message: "Do not have the right permission." });

    const pollId = req.body.pollId; // Assuming you send the pollId in the request body

    // Find the poll by its ID
    const poll = await Poll.findById(pollId);

    if (!poll) {
      return res
        .status(404)
        .json({ success: false, message: "Poll not found" });
    }

    const { question, options } = poll;

    // Prepare results
    const results = {};
    options.forEach((option) => {
      results[option] = poll.options[option];
    });

    res.json({ success: true, question, results });
  } catch (error) {
    console.error("Error getting poll results:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
