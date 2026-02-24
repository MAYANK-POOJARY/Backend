import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([
    { title: "Title 1", description: "Description 1" },
    { title: "Title 1", description: "Description 1" },
    { title: "Title 1", description: "Description 1" },
    { title: "Title 1", description: "Description 1" },
  ]);

  const [title, setTitle] = useState("");
  const [descript, setDescription] = useState("");

  function getData() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function postData() {
    axios
      .post("http://localhost:3000/api/notes", { title: title, description: descript })
      .then((res) => {
        console.log(res.data);
        getData();
      });
  }

  function deleteData(id) {
    axios.delete("http://localhost:3000/api/notes/" + id).then((res) => {
      getData();
    });
  }

  function updateData(id){
    let desc = prompt("Enter the new description");
    axios.patch("http://localhost:3000/api/notes/"+id, {description : desc}).then( res => {
      console.log(res.data);
      getData()
    })
  }

  function submitHandler(e) {
    e.preventDefault();
    postData();
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="box1" onSubmit={submitHandler}>
      <form>
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          placeholder="title"
        />
        <input
          className="input"
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="description"
        />
        <button className="input">Submit</button>
      </form>
      <br />
      <div className="box">
        {notes.map((elem, idx) => {
          return (
            <div key={idx} className="notes">
              <h1>{elem.title}</h1>
              <h1>{elem.description}</h1>
              <button onClick={() => deleteData(elem._id)}> Delete </button>
              <button onClick={() => updateData(elem._id)}>Update</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
