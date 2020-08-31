const mongoose = require("mongoose");

const express = require("express");

const router = express.Router();

const Blog = mongoose.model("Blog");

// get City
router.get("/blog", async (req, res) => {
  const blog = await Blog.find();
  console.log("Blog route called");
  res.send(blog);
});

//Post city
router.post("/blog", async (req, res) => {
  try {
    console.log(req.body);
    const blog = new Blog(req.body);

    await blog.save();
    res.json({ blog: blog }).status(200);
  } catch (err) {
    res.send(err);
  }
});

//single city to edit
router.get("/blog/edit/:id", async (req, res) => {
  console.log(req.params.id);
  const blog = await Blog.findById({ _id: req.params.id });
  console.log(blog);
  res.send(blog);
});

//Update City

router.post("/blog/edit/:id", async (req, res) => {
  let blog = await Blog.findById({ _id: req.params.id });
  console.log(req.body);

  blog.blogTitle = req.body.blogTitle;
  blog.imageSrc = req.body.imageSrc;
  blog.content = req.body.content;
  blog.keywords = req.body.keywords;
  blog.subHeading1 = req.body.subHeading1;
  blog.imageSrc1 = req.body.imageSrc1;
  blog.content1 = req.body.content1;
  blog.subHeading2 = req.body.subHeading2;
  blog.imageSrc2 = req.body.imageSrc2;
  blog.content2 = req.body.content2;
  blog.subHeading3 = req.body.subHeading3;
  blog.imageSrc3 = req.body.imageSrc3;
  blog.content3 = req.body.content3;

  console.log(blog);
  blog.save();
  res.json({ blog: blog }).status(200);
});

//Delete by id

router.post("/blog/delete/:id", async (req, res) => {
  const blog = await Blog.findByIdAndDelete({ _id: req.params.id });
  res.send(blog);
});

module.exports = router;
