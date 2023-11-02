const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/CS2")
  .then(() => console.log("right on"))
  .catch((err) => console.log(err));

// schema
const playerSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
  },
  team: String,
  rank: Number,
  country: String,
  dateOfJoining: {
    type: Date,
    default: Date.now,
  },
});

// defining model or collections
const playerCollection = new mongoose.model("CSGO", playerSchema);
//  after this compass will show database

// CRUD OPS

// CREATE
// // now inserting documnets into model or collection CSGO
// const playerDataFunction = async () => {
//   try {
//     const player1 = new playerCollection({
//       playerName: "S1MPLE",
//       team: "NAVI",
//       rank: 1,
//       country: "UKR",
//     })
//     const player2 = new playerCollection({
//         playerName: "ZYWOO",
//         team: "VITALITY",
//         rank: 2,
//         country: "FRA",
//       })
//       const player3 = new playerCollection({
//         playerName: "ROPZ",
//         team: "FAZE",
//         rank: 3,
//         country: "BOSNIA",
//       })
//       const player4 = new playerCollection({
//         playerName: "B1T",
//         team: "NAVI",
//         rank: 4,
//         country: "UKR",
//       })
//       const player5 = new playerCollection({
//         playerName: "SH1RO",
//         team: "CLOUD 9",
//         rank: 11,
//         country: "RUSS",
//       })
//     // const result = await playerCollection.save();
//     // MULTIPLE DOCUMENTS INSERT IN A COLLECTION
//     const result = await playerCollection.insertMany([player1,player2,player3,player4,player5]);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// playerDataFunction();

// document.save

// now FIND QUERY OR read
// const findPlayer = async () => {
//   try {
//     // const result = await playerCollection.find({country : "UKR"})
//     // .select({name : 0 , rank : 0} )
//     // .limit(2);
//     // const result = await playerCollection.find({rank : { $gt : 2 }}); //$gte lte lt are same
//     const result = await playerCollection.find({country : ["RUSS", "UKR"]}).select({playerName : 1 , _id : 0});
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// findPlayer();

// UPDATING DOCUMENT
// find by id and update result dikhadeta hai console mai but it must require the _id
// updateOne updates but donot show the updated value on console but it dont require _id
// const updatePlayer = async (playerId) => {
//   try {
//     const result = await playerCollection.findByIdAndUpdate({ _id : playerId } ,{
//       $set : {
//         playerName : "S1MPLE"
//       }
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// updatePlayer("652e97aad3da0570529a69ad");

// ******************deletion************************************************

const deletePlayer = async (playerId1 ,playerId2 ,playerId3) => {
  try {
    const result = await playerCollection.deleteMany({ _id: [playerId1 ,playerId2 ,playerId3] });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

deletePlayer("652e983fcc5406ce5b323dc9" , "652e983fcc5406ce5b323dc8" , "652e983fcc5406ce5b323dc7");
