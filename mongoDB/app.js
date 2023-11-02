const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/myCourses")
  .then(() => console.log("connection established..."))
  .catch((err) => console.log(err));

//   schema define of the document inside mongoTut
const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// model -> interface for schema to do CRUD
// model -> creating collections

// creating collections
const newPlaylist = new mongoose.model("newPlaylist", playlistSchema);

// creating document
// const createDocument = async () => {
//   try {
//     const reactPlaylist = new newPlaylist({
//         name: "React JS",
//         ctype: "Front End",
//         videos: 80,
//         author: "youtube",
//         active: true,
//       });
//       const result = await reactPlaylist.save(); //this takes time
//       console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createDocument();


// FIND OPERATION
