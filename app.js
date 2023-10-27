/*const http= require('http');

const server=http.createServer((req, res)=>{
    if(req.url===''){

    }
    
})
app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (title && content) {
    const note = new Note(title, content);
    notes.push(note);
    res.status(201).json({ message: "Note created successfully", id: note.id });
  } else {
    res.status(400).json({ error: "Title and content are required" });
  }
});*/


notebook.get('/notes')
