import axios from "axios";
import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";

const FileAnswer = ({ input, fileId, handleFileAnswer }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    axios
      .get(`https://online-exam-server.vercel.app/getFile/${fileId}`)
      .then((data) => setFile(data.data));
  }, [fileId]);
  return (
    <div>
      {file && (
        <div className="text-base font-semibold capitalize w-full my-2 py-1 px-2 rounded text-teal-600 bg-gray-200 last:mr-0 mr-1">
          <h2>Already Uploaded File Name: {file.fileName}</h2>
          {/* <img src={`data:image/png;base64,${file.answer}`} alt="" /> */}

          {/* <iframe  src={`data:application/pdf;base64,${file.answer }`} title="user File here"/> */}
        </div>
      )}
      {input && (
        <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div class="space-y-1 text-center">
            <svg
              class="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="True"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div class="flex text-sm text-gray-600">
              <label
                for="file-upload"
                class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  class="sr-only"
                  onChange={(e) => handleFileAnswer(e.target.files[0])}
                />
              </label>
              <p class="pl-1">or drag and drop</p>
            </div>
            <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileAnswer;
