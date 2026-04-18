const express = require("express");
const router = express.Router();

const appendCreator = require("../services/creatorSheet");

router.post("/apply", async (req, res) => {
  try {
    await appendCreator(req.body);

    return res.status(200).json({
      success: true,
      message: "Application submitted successfully"
    });

  } catch (error) {
    console.error("Creator submit error:", error.message);

    return res.status(500).json({
      success: false,
      message: error.message || "Failed to submit application"
    });
  }
});

module.exports = router;
