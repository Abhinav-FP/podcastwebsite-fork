import dynamic from "next/dynamic";
import React from "react";
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

const ReactQuillEditor = ({ label, desc, handleBioChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div className="mb-6 ">
      <div className="rounded-md  mb-5">
        <ReactQuill
          value={desc}
          onChange={handleBioChange}
          modules={modules}
          formats={formats}
          theme="snow"
          className="h-[150px] mb-5"
        />
      </div>
    </div>
  );
};

export default ReactQuillEditor;