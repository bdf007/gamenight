import { useState } from "react";
// eslint-disable-next-line import/no-unresolved
import axios from "@services/axios";
import "./componentsCss/addimage.css";

// eslint-disable-next-line react/prop-types
export default function AddImage({ setPhotos }) {
  const [containt, setContaint] = useState("");
  const [file, setFile] = useState("");
  const [fileOverview, setFileOverview] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileOverview(URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      // eslint-disable-next-line no-alert
      return alert("An image is required for the upload");
    }
    if (!containt) {
      // eslint-disable-next-line no-alert
      return alert("At least one fields is empty");
    }
    const photo = {
      description: containt,
    };
    const formData = new FormData();
    formData.append("image", file);
    formData.append("photo", JSON.stringify(photo));
    try {
      await axios.post("photo", formData);
      await axios.get("photos").then((result) => setPhotos(result.data));
      setContaint("");
      setFile("");
      setFileOverview(null);
      document.getElementById("file").value = null;
      // eslint-disable-next-line no-alert
      return alert("Image uploaded in the server");
    } catch (err) {
      console.error(err);
      // eslint-disable-next-line no-alert
      return alert(
        "A connection error has occured with the server ! Try later !"
      );
    }
  };

  return (
    <div className="addimageComponent">
      <form onSubmit={handleSubmit}>
        {" "}
        <label className="inputAddImage" htmlFor="containt">
          Description
          <input
            className="inputAddImage"
            type="text"
            placeholder="Brève description de votre image..."
            id="containt"
            value={containt}
            onChange={(e) => setContaint(e.target.value)}
          />
        </label>
        <br />
        <label className="inputAddImage" htmlFor="file">
          <input
            className="inputAddImage"
            type="file"
            id="file"
            onChange={(e) => handleFileChange(e)}
          />
        </label>
        <br />
        <button className="inputAddImage" type="submit">
          add photo
        </button>
      </form>
      {fileOverview != null ? <img src={fileOverview} alt="preview" /> : " "}
    </div>
  );
}
