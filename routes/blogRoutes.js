const express = require("express");
const blogController = require("../controllers/blogControllers");

const router = express.Router();

router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

router.get("/blogs/create", blogController.blog_create_get);
module.exports = router;
