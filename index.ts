import express from "express";

const app = express();
app.use(.json());

const notes: Notebook[] = [];

class Notebook {
  id: string;
  title: string;
  content: string;
  created_at: Date;

  constructor(title: string, content: string) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.created_at = new Date();
  }
}

app.post("/notes", (req, res) => {
  const { title, content } = req.body;

  if (title && content) {
    const note = new Notebook(title, content);
    notes.push(note);
    res.status(201).json({ message: "Note created successfully", id: note.id });
  } else {
    res.status(400).json({ error: "Title and content are required" });
  }
});

app.get("/notes", (req, res) => {
  const noteData = notes.map((note) => ({
    id: note.id,
    title: note.title,
    content: note.content,
    created_at: note.created_at,
  }));
  res.json(noteData);
});

app.get("/notes/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  const note = notes.find((n) => n.id === noteId);

  if (note) {
    res.json({
      id: note.id,
      title: note.title,
      content: note.content,
      created_at: note.created_at,
    });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

app.put("/notes/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  const { title, content } = req.body;
  const note = notes.find((n) => n.id === noteId);

  if (note) {
    if (title) {
      note.title = title;
    }
    if (content) {
      note.content = content;
    }
    res.json({ message: "Note updated successfully", id: note.id });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

app.delete("/notes/:note_id", (req, res) => {
  const noteId = req.params.note_id;
  const noteIndex = notes.findIndex((n) => n.id === noteId);

  if (noteIndex !== -1) {
    notes.splice(noteIndex, 1);
    res.json({ message: "Note deleted successfully" });
  } else {
    res.status(404).json({ error: "Note not found" });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
