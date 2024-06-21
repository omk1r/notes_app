import { useEffect, useState } from "react";
import { CreateNote } from "./components/CreateNote";
import { Notes } from "./components/Notes";
import { Header } from "./components/Header";

function App() {
  const [notes, setNotes] = useState(() => {
    const data = localStorage.getItem("Notes");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)",
        }}
        className="max-w-full h-screen flex justify-center items-center overflow-auto"
      >
        <main className="w-4/5 h-4/5 ">
          <Header />
          <Notes notes={notes} setNotes={setNotes} />
        </main>
      </div>
    </>
  );
}

export default App;
