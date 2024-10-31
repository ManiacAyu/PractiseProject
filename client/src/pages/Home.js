import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [roomId, setRoomId] = useState();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room Created Successfully 💕");
  };

  const joinHandler = (e) => {
    e.preventDefault();
    if (!roomId || !username) {
      toast.error("Enter Both the Fields 😣");
    } else {
      navigate(`/editor/${roomId}`, {
        state: {
          username,
        },
      });
    }
    };
    
    const handleInputEnter = (e) => { 
        if (e.key === "Enter") {
          joinHandler(e);
        }
      };
    

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/code-collaborator.png" alt="logo" />
        <h4 className="mainLabel">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinHandler} className="btn joinBtn">
            Join Room
          </button>
          <span className="createInfo">
            If you don't have an invite then create
            <a onClick={createNewRoom} href="" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>

      <footer>
        <h4>
          Built with ❤️ by &nbsp;
          <a target = "_blank" href="https://github.com/ManiacAyu">Ayush's Github</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
