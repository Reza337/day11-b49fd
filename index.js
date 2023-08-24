const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

// setup call hbs with sub folder
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

// set serving static file
app.use(express.static("src/assets"));

// parsing data
app.use(express.urlencoded({ extended: false }));

// routing
app.get("/", home);
app.get("/blog", blog);
app.post("/blog", addBlog);
app.get("/blog-detail", blogDetail);
app.get("/contact", contactMe);

// local server
app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});

// module.exports = app;

// index
function home(req, res) {
	res.render("index");
}

// blog
function blog(req, res) {
	res.render("blog");
}

// add a new blog
function addBlog(req, res) {
	const { title, startDate, endDate, content, images } = req.body;

	console.log(title);
	console.log(startDate);
	console.log(endDate);
	console.log(content);
	console.log(images);

	res.redirect("/");
}

// blog detail
function blogDetail(req, res) {
	res.render("blog-detail");
}

// contact me
function contactMe(req, res) {
	res.render("contact");
}
