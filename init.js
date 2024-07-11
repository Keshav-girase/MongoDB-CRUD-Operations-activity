const mongoose = require("mongoose");
const Chat = require("./models/chat.js")

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.log(err);
    })

async function main () {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

const allChats  = [
    {
      from: "alice",
      to: "bob",
      msg: "Hey Bob, are you coming to the meeting?",
      created_at: new Date()
    },
    {
      from: "bob",
      to: "alice",
      msg: "Yes Alice, I'll be there.",
      created_at: new Date()
    },
    {
      from: "carol",
      to: "dave",
      msg: "Hi Dave, did you finish the report?",
      created_at: new Date()
    },
    {
      from: "dave",
      to: "carol",
      msg: "Hi Carol, I'll send it soon.",
      created_at: new Date()
    },
    {
      from: "eve",
      to: "frank",
      msg: "Frank, can you review my code?",
      created_at: new Date()
    },
    {
      from: "frank",
      to: "eve",
      msg: "Sure Eve, I'll check it now.",
      created_at: new Date()
    },
    {
      from: "grace",
      to: "heidi",
      msg: "Heidi, did you get the new designs?",
      created_at: new Date()
    },
    {
      from: "heidi",
      to: "grace",
      msg: "Yes Grace, they look great!",
      created_at: new Date()
    },
    {
      from: "ivan",
      to: "judy",
      msg: "Hi Judy, can we discuss the project?",
      created_at: new Date()
    },
    {
      from: "judy",
      to: "ivan",
      msg: "Hi Ivan, let's chat.",
      created_at: new Date()
    }
  ];
  
  

Chat.insertMany(allChats);
