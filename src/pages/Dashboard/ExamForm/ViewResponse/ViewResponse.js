import axios from "axios";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import FileShow from "../FileShow/FileShow";
import Answers from "../QuestionSection/Answers";
import MultipleChoiceAnswers from "../QuestionSection/MultipleChoiceAnswers";

const ViewResponse = () => {
  const { resId } = useParams();
  const [response, setResponse] = useState({});
  const { search } = useLocation();
  console.log("quq", new URLSearchParams(search).get("teacher"));
  const isTeacher = new URLSearchParams(search).get("teacher");
  useEffect(() => {
    axios
      .get(`https://online-exam-server.vercel.app/responses/singleSet/${resId}`)
      .then((data) => setResponse(data.data));
  }, [resId]);
  const handleUpdateMark = (value, index) => {
    const loading = toast.loading("Please wait updating mark...");
    console.log(value, "index", index);
    const questionMark = parseInt(response.responses.studentAns[index].mark);
    if (value > questionMark) {
      return toast.error(`please enter Mark below ${questionMark + 1}`, {
        id: loading,
      });
    }
    const studentAnswers = _.cloneDeep(response.responses.studentAns);
    studentAnswers[index].obtainMark = value;
    axios
      .put(
        `https://online-exam-server.vercel.app/markupdate/${resId}`,
        studentAnswers
      )
      .then((data) => {
        if (data.data.modifiedCount === 1) {
          toast.success("updated", {
            id: loading,
          });
        }
      });
    return studentAnswers;
  };
  console.log("rsdi", response);
  return (
    <div className="py-4 flex flex-col items-center justify-center">
      <div className="bg-white text-left w-full md:w-2/3 rounded border-t-8 border-b-8 border-blue-800 p-7 filter drop-shadow-lg">
        <div className="flex flex-col w-full md:w-1/2 items-center mx-auto">
          <h2 className="text-2xl font-medium">
            {response.responses?.examTitle}
          </h2>
          <p>{response.responses?.examDescription}</p>
          <p>Marks: {response.responses?.examMarks}</p>
          <p>Student Name: {response.responses?.studentName}</p>
          <p>Student Email: {response.responses?.studentEmail}</p>
        </div>
      </div>
      <div className="mt-5 py-8 w-full md:w-2/3">
        <div className="mx-4 md:mx-0">
          {response?.responses?.studentAns?.map((res, index) => (
            <div className="w-full">
              <div className="flex justify-between">
                <p className="capitalize text-xl font-semibold">{res.title}</p>
                <p>{res.mark}</p>
              </div>
              {res?.question === "multi-choice" && (
                <MultipleChoiceAnswers options={res.options} />
              )}
              {res?.question === "check-box" && (
                <Answers options={res.options} />
              )}

              {res.question === "paragraph" && (
                <>
                  <textarea
                    name=""
                    id=""
                    rows="4"
                    className="w-full text-lg border rounded border-gray-200 focus:outline-none focus:border-gray-200 mb-2 pl-2"
                    placeholder="Answer"
                    defaultValue={res.stdParagraphAns}
                    readOnly
                  ></textarea>
                  {isTeacher === "true" && (
                    <>
                      <span>Marks Obtain</span>
                      <input
                        type="number"
                        className="ml-2 border-2"
                        onChange={(e) =>
                          handleUpdateMark(e.target.value, index)
                        }
                        defaultValue={res.obtainMark}
                      />
                    </>
                  )}
                </>
              )}
              {res.question === "file-upload" && (
                <>
                  {res.stdFileAns ? (
                    <>
                      <FileShow fileId={res.stdFileAns} />
                      {isTeacher === true && (
                        <>
                          <span>Marks Obtain</span>
                          <input
                            type="number"
                            className="ml-2 border-2"
                            onChange={(e) =>
                              handleUpdateMark(e.target.value, index)
                            }
                            defaultValue={res.obtainMark}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <div>
                      <h2>No File Uploaded</h2>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewResponse;
