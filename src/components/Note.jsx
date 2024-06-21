export function Note({ title, id, deleteNote }) {
  return (
    <>
      <div
        className="w-60 h-40 border rounded-lg m-1 p-2 flex flex-col justify-between"
        style={{ flex: "0 0 auto" }}
      >
        <div>{title}</div>
        <div className="flex justify-end">
          <button
            className="border rounded px-1"
            onClick={() => {
              deleteNote(id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
