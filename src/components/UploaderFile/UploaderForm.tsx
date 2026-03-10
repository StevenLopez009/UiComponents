import { useFormik } from "formik";
import { useState } from "react";
import UploaderList from "./UploaderList";
import "./UploaderForm.css";

export default function UploadForm() {
  const [dragActive, setDragActive] = useState(false);

  const formik = useFormik({
    initialValues: {
      files: [],
    },
    onSubmit: (values) => {
      console.log("Archivos enviados:", values.files);
    },
  });

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    formik.setFieldValue("files", [...formik.values.files, ...droppedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    formik.setFieldValue("files", [...formik.values.files, ...selectedFiles]);
  };

  return (
    <>
      <div className="uploader">
        <h1 className="uploader__title">Upload your images</h1>
        <p className="uploader__description">Drag and Drop Files</p>
        <form className="uploader__form" onSubmit={formik.handleSubmit}>
          <div
            className="uploader__dropzone"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <p>Arrastra archivos aquí o selecciónalos</p>

            <input type="file" multiple onChange={handleFileSelect} />
          </div>
        </form>
        <div className="uploader__list">
          <UploaderList files={formik.values.files} />
        </div>
      </div>
    </>
  );
}
