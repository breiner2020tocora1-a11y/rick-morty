import React from "react";
import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";

const JsonViewer = ({ data }) => {
  return (
    <div className="bg-[#282c34] text-sm rounded-lg p-4 overflow-auto shadow-lg">
      <JSONPretty id="json-pretty" data={data}></JSONPretty>
    </div>
  );
};

export default JsonViewer;
