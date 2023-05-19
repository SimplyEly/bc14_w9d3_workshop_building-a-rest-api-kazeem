import express from "express";
const app = express();
const PORT = 3000;

import { getQuotes, addQuote, getRandomQuote, editQuote, deleteQuote } from "./quote.js";

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Welcome to cwissy.rest");
});

// write get function
// function should include req and res
// should res.send all quotes.

app.get("/api/quotes", async (req,res) => {
  const quotes = await getQuotes()
  console.log("this is what's running")
  res.send(quotes)
})

//write a get function
// function should include req and res
// should res.send a random quote.
app.get("/api/quotes", async (req, res) => {
  if(req.query.type === "random"){
    const randomQuote = await getRandomQuote()
    console.log("working!")
    res.send(randomQuote)
  } else {
    const quotes = await getQuotes()
    console.log("not working!")
    res.send(quotes)
  }
})

// write a post function
// function should include req and res
// should res.send a new quote.
app.post("/api/quotes", async (req, res) => {
  const quote = await addQuote(req.body.quoteText)
  res.send(quote)
})

// write a patch function
// function should include req and res
// should res.send an updated quote.
app.patch("/api/quotes/:id", async (req,res) => {
  const updatedQuote = await editQuote(req.params.id, req.body.quoteText)
  res.send(updatedQuote)
})

// write a delete function
// function should include req and res
// should res.send a deleted quote.
app.delete("/api/quotes/:id", async (req,res) => {
  const deletedQuote = await deleteQuote(req.params.id)
  res.send(deletedQuote)
})


app.listen(PORT, function () {
  console.log(`Server is now listening on http://localhost:${PORT}`);
});
