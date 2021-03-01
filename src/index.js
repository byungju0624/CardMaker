import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./app";
import AuthService from "./source/auth_service";
import ImageUploader from "./source/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardSave from "./source/card_save";
const authService = new AuthService();
const cardSave = new CardSave();
const imageUploader = new ImageUploader();
const FileInput = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} cardSave={cardSave} />
  </React.StrictMode>,
  document.getElementById("root")
);
