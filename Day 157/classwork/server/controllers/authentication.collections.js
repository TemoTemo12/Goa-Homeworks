import express from "express";

const router = express.Router();


router.post("/login", (req, res) => {
  res.send("Login Route");
});

router.post("/signup", (req, res) => {
  res.send("Signup Route");
});


export { router as authRoutes };
