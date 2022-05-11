import React from "react";
import image from "./photo.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div
        style={{
          border: "solid 1px black",
          maxWidth: "100vw",
        }}
      >
        <h1 className="title red">Sourour Issaoui</h1>
        <br />
        <img
          className="imge"
          src={image}
          alt="imageInSrc"
        />
        <br />
        <img
          className="imge"
          src="/photo1.jpg"
          alt="imageInPublic"
         
        />
      </div>

      <video
        className="video"
        style={{
          width: "100%",
          height: "600px",
        }}
        controls
      >
        <source src="/myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
