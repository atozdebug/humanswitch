import { Box, Paper, Slider, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createQuestions } from "../../services/slices/dashboard/dashboard";

const chapters = [
  {
    value: "10",
    name: "Strategy",
  },
  {
    value: "20",
    name: "Clientele",
  },
  {
    value: "30",
    name: "Budget-ROI",
  },
  {
    value: "40",
    name: "Employees",
  },
  {
    value: "50",
    name: "Market",
  },
  {
    value: "60",
    name: "Compliance",
  },
  {
    value: "70",
    name: "Partners-Suppliers",
  },
  {
    value: "80",
    name: "Data-ICT",
  },
  {
    value: "90",
    name: "Customer Value & Social Impact",
  },
  {
    value: "100",
    name: "Innovation",
  },
];

const questionType = [
  {
    id: 1,
    name: "Multiple Choice",
    icon: <RadioButtonCheckedIcon />,
    color: "text-purple-600",
  },
  {
    id: 2,
    name: "Short Answer",
    icon: <NotesIcon />,
    color: "text-yellow-600",
  },
  {
    id: 3,
    name: "Slider",
    icon: <ToggleOnIcon />,
    color: "text-blue-600",
  },
];

const MyReports = () => {
  const dispatch: any = useDispatch();
  const [selectedChapter, setSelectedChapter] = useState("Strategy");
  const [open, setOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState<any>({});
  const [sliderValues, setSliderValues] = useState<any>({});
  const [nextId, setNextId] = useState(0);
  const [questions, setQuestions] = useState<any[]>([]);
  const [questionIdCounter, setQuestionIdCounter] = useState(1);
  const [answers, setAnswers] = useState<any>({});
  const [minValues, setMinValues] = useState<any>({});
  const [maxValues, setMaxValues] = useState<any>({});
  const [steps, setSteps] = useState<any>({});
  const [minValueErrors, setMinValueErrors] = useState<any>({});
  const [maxValueErrors, setMaxValueErrors] = useState<any>({});
  const [chapterQuestions, setChapterQuestions] = useState<any>([]);
  const [saveVisible, setSaveVisible] = useState<any>(true);

  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSliderChange = (questionId: number, newValue: number) => {
    setSliderValues((prevSliderValues: any) => ({
      ...prevSliderValues,
      [questionId]: newValue,
    }));
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    const question = formJson.question as string;

    const newQuestion = {
      id: questionIdCounter,
      type: selectedQuestionType.name,
      icon: selectedQuestionType.icon,
      text: question,
      color: selectedQuestionType.color,
      ...(selectedQuestionType.name === "Multiple Choice" && {
        options: [
          {
            id: nextId,
            name: `Option`,
          },
          {
            id: nextId + 1,
            name: `Option`,
          },
        ],
      }),
      ...(selectedQuestionType.name === "Slider" && {
        min: 10,
        max: 20,
        steps: 5,
      }),
    };

    setNextId((prevId) => prevId + 2);

    setMaxValues((prevMaxValues: any) => ({
      ...prevMaxValues,
      [questionIdCounter]: 20,
    }));
    setMinValues((prevMinValues: any) => ({
      ...prevMinValues,
      [questionIdCounter]: 10,
    }));

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
    setQuestionIdCounter((prevId) => prevId + 1);

    setOpenQuestion(false);
    setOpen(false);
    setQuestion("");
    setSaveVisible(true);
  };

  const handleAddOption = (questionId: number) => {
    const newOption = {
      id: nextId,
      name: `Option`,
    };
    setNextId((prevId) => prevId + 1);

    // Add the new option to the specific question's options array
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            options: [...question.options, newOption],
          };
        }
        return question;
      });
    });
    setSaveVisible(true);
  };

  const handleRemoveOption = (questionId: number, optionId: number) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          const updatedOptions = question.options.filter(
            (option: any) => option.id !== optionId
          );
          return {
            ...question,
            options: updatedOptions,
          };
        }
        return question;
      });
    });
    setSaveVisible(true);
  };

  const handleRemoveQuestion = (questionId: number) => {
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(updatedQuestions);
    setSaveVisible(true);
  };

  const onChangeTextArea = (questionId: any, newValue: any) => {
    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
    setSaveVisible(true);
  };

  const changeMinValue = (questionId: any, minVal: any) => {
    if (minVal < maxValues[questionId]) {
      const minValue = parseInt(minVal, 10);
      setQuestions((prevQuestions) => {
        return prevQuestions.map((question) => {
          if (question.id === questionId && question.type === "Slider") {
            return { ...question, min: minValue };
          }
          return question;
        });
      });
      setMinValues((prevMinValues: any) => ({
        ...prevMinValues,
        [questionId]: minValue,
      }));
      setMinValueErrors((prevMinValues: any) => ({
        ...prevMinValues,
        [questionId]: false,
      }));
      setMaxValueErrors((prevMaxValues: any) => ({
        ...prevMaxValues,
        [questionId]: false,
      }));
    } else {
      setMinValueErrors((prevMinValues: any) => ({
        ...prevMinValues,
        [questionId]: true,
      }));
    }
    setSaveVisible(true);
  };

  const changeMaxValue = (questionId: any, maxVal: any) => {
    if (maxVal > minValues[questionId]) {
      const maxValue = parseInt(maxVal, 10);
      setQuestions((prevQuestions) => {
        return prevQuestions.map((question) => {
          if (question.id === questionId && question.type === "Slider") {
            return { ...question, max: maxValue };
          }
          return question;
        });
      });
      setMaxValues((prevMaxValues: any) => ({
        ...prevMaxValues,
        [questionId]: maxValue,
      }));
      setMaxValueErrors((prevMaxValues: any) => ({
        ...prevMaxValues,
        [questionId]: false,
      }));
      setMinValueErrors((prevMinValues: any) => ({
        ...prevMinValues,
        [questionId]: false,
      }));
    } else {
      setMaxValueErrors((prevMaxValues: any) => ({
        ...prevMaxValues,
        [questionId]: true,
      }));
    }
    setSaveVisible(true);
  };

  const changeStepsValue = (questionId: any, steps: any) => {
    const stepsValue = parseInt(steps, 10);
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId && question.type === "Slider") {
          return { ...question, steps: stepsValue };
        }
        return question;
      });
    });
    setSteps((prevStepsValues: any) => ({
      ...prevStepsValues,
      [questionId]: stepsValue,
    }));
    setSaveVisible(true);
  };

  const onChangeOptionText = (
    value: any,
    questionId: number,
    optionId: number
  ) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId) {
          return {
            ...question,
            options: question.options.map((option: any) => {
              if (option.id === optionId) {
                return {
                  ...option,
                  name: value,
                };
              }
              return option;
            }),
          };
        }
        return question;
      });
    });
    setSaveVisible(true);
  };

  console.log(chapterQuestions);

  const handleSaveData = () => {
    const chapterIndex = chapterQuestions.findIndex(
      (chapter: any) => chapter.name === selectedChapter
    );

    const currentQuestions = [...questions];

    if (chapterIndex !== -1) {
      chapterQuestions[chapterIndex].questions = currentQuestions;
    } else {
      chapterQuestions.push({
        name: selectedChapter,
        questions: currentQuestions,
      });
    }
    toast.success(
      "Questions saved successfully! You can continue adding questions to this chapter or select a new chapter to add questions in and the you can click 'Publish Questions' button to save the data!"
    );
    setChapterQuestions([...chapterQuestions]);
    setSaveVisible(false);
  };

  const handlePublish = () => {
    dispatch(createQuestions(chapterQuestions))
      .unwrap()
      .then(() => {
        try {
          toast.success("Data published successfully!");
        } catch (err: any) {
          toast.error(err);
        }
      });
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-gray-200">
        <div className="text-lg font-semibold mt-6 ml-6">Chapters</div>
        <div>
          {chapters.map((chapter) => (
            <div
              key={chapter.value}
              onClick={() => {
                if (saveVisible === true) {
                  toast((t) => (
                    <span>
                      You have still not saved your changes. Are you sure you
                      want to <b>continue?</b> <br />
                      <button
                        className=" border rounded-lg mt-2 px-2"
                        onClick={() => {
                          setSelectedChapter(chapter.name);
                          setQuestions(() => {
                            const cht = chapterQuestions.find(
                              (chap: any) => chap.name === chapter.name
                            );

                            return cht?.questions || [];
                          });
                          toast.dismiss(t.id);
                        }}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => toast.dismiss(t.id)}
                        className="ml-2 border rounded-lg mt-2 px-2"
                      >
                        No
                      </button>
                    </span>
                  ));
                } else {
                  setSelectedChapter(chapter.name);
                  setQuestions(() => {
                    const cht = chapterQuestions.find(
                      (chap: any) => chap.name === chapter.name
                    );

                    return cht?.questions || [];
                  });
                }
              }}
              className={`px-2 py-2 hover:bg-slate-600 rounded-lg mx-6 my-2 ${
                selectedChapter === chapter.name ? "bg-slate-400" : ""
              }`}
            >
              {chapter.name}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 w-full">
        <div className=" w-full flex justify-end">
          <button
            onClick={handlePublish}
            disabled={saveVisible === true}
            className="rounded bg-purple-500 hover:bg-purple-700 py-2 px-4 mb-4 text-white font-semibold disabled:bg-gray-400"
          >
            Publish Questions
          </button>
        </div>
        <Paper sx={{ borderRadius: "16px", py: 4, px: 6 }}>
          <div className="flex flex-col justify-center">
            {questions.map((question, index) => {
              return (
                <div key={question.id} className="mb-8">
                  <div className="font-semibold mb-2 flex w-full justify-between items-center">
                    <div>Questions for {selectedChapter}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={question.color}>{question.icon}</div>

                        <div className="text-2xl font-semibold">
                          Question {index + 1}
                        </div>
                      </div>
                      <div className="ml-[35px]">{question.text}</div>
                    </div>
                    <div>
                      <div
                        className="text-red-600 p-2 hover:bg-gray-100 rounded-full"
                        onClick={() => handleRemoveQuestion(question.id)}
                      >
                        <DeleteIcon />
                      </div>
                    </div>
                  </div>
                  {question.type === "Short Answer" && (
                    <div className="mt-2 ml-[35px]">
                      <textarea
                        id={`question-${question.id}`}
                        name={`question-${question.id}`}
                        className="bg-white border border-lightblue text-gray-900 text-sm rounded-lg focus:ring-mediumblue focus:border-mediumblue block w-full p-2.5 min-h-62px"
                        value={answers[question.id] || ""}
                        onChange={(e) =>
                          onChangeTextArea(question.id, e.target.value)
                        }
                      />
                    </div>
                  )}
                  {question.type === "Multiple Choice" && (
                    <div className="mt-2  ml-[35px]">
                      <div className="flex">
                        <div className="mt-2 w-96">
                          {question.options.map((option: any) => (
                            <div
                              key={option.id}
                              className={`flex justify-between items-center content-center border p-4 rounded-xl mb-5`}
                            >
                              <div className="flex justify-center items-center gap-4">
                                <input
                                  id={`default-radio-${option.id}`}
                                  type="radio"
                                  value={option.name}
                                  name={`default-radio-${question.id}`}
                                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                                />
                                <input
                                  className={`shadow appearance-none border rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline border-slate-300`}
                                  id="option"
                                  type="text"
                                  placeholder="Write option here..."
                                  value={option.name}
                                  onChange={(e) =>
                                    onChangeOptionText(
                                      e.target.value,
                                      question.id,
                                      option.id
                                    )
                                  }
                                />
                              </div>
                              <div>
                                {question.options.length > 2 && (
                                  <div
                                    onClick={() =>
                                      handleRemoveOption(question.id, option.id)
                                    }
                                    className="text-red-600 rounded-full hover:bg-gray-100"
                                  >
                                    <CancelIcon />
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        {question.options.length < 4 && (
                          <button
                            className="text-blue-600 font-semibold hover:bg-gray-200 px-3 py-1 rounded-md"
                            onClick={() => handleAddOption(question.id)}
                          >
                            Add Option
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                  {question.type === "Slider" && (
                    <Box
                      sx={{
                        display: "flex",
                        gap: 6,
                        mt: 2,
                        alignItems: "center",
                        ml: "35px",
                      }}
                    >
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <input
                            name="minValue"
                            value={minValues[question.id] || 10}
                            onChange={(e) =>
                              changeMinValue(question.id, e.target.value)
                            }
                            type="number"
                            className="w-28 rounded-lg"
                          />
                          <div>Min</div>
                        </div>
                        {minValueErrors[question.id] && (
                          <div className="text-xs text-red-600">
                            Min value cannot be greater than or equal to Max
                            value
                          </div>
                        )}
                      </div>

                      <Slider
                        sx={{ width: 250 }}
                        step={steps[question.id] || 5}
                        value={sliderValues[question.id] || 10}
                        valueLabelDisplay="auto"
                        min={minValues[question.id] || 10}
                        max={maxValues[question.id] || 20}
                        onChange={(_, newValue) =>
                          handleSliderChange(question.id, newValue as number)
                        }
                        marks
                      />
                      <div
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <div
                          style={{
                            cursor: "pointer",
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <input
                            name="maxValue"
                            value={maxValues[question.id] || 20}
                            onChange={(e) =>
                              changeMaxValue(question.id, e.target.value)
                            }
                            type="number"
                            className="w-28 rounded-lg"
                          />
                          <div className="flex w-full justify-center">Max</div>
                        </div>
                        {maxValueErrors[question.id] && (
                          <div className="text-xs text-red-600">
                            Max value cannot be less than or equal to Min value
                          </div>
                        )}
                      </div>
                      <div className="flex items-center ml-10">
                        <div className="font-semibold">
                          Enter Number of steps :
                        </div>
                        <input
                          name="steps"
                          defaultValue={steps[question.id] || 5}
                          onChange={(e) =>
                            changeStepsValue(question.id, e.target.value)
                          }
                          type="number"
                          className="ml-2 w-28 rounded-lg font-bold"
                        />
                      </div>
                    </Box>
                  )}
                </div>
              );
            })}
            <div className="flex gap-4 justify-center items-center mt-4">
              <div
                className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white font-semibold"
                onClick={handleClickOpen}
              >
                Add Questions
              </div>
              {questions.length !== 0 && saveVisible && (
                <div
                  onClick={() => handleSaveData()}
                  className="rounded bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold"
                >
                  Save
                </div>
              )}
            </div>
          </div>
        </Paper>
      </div>
      <Dialog fullWidth={true} maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle> Select the type of question</DialogTitle>
        <DialogContent>
          <div>
            {questionType.map((ques) => (
              <div
                key={ques.id}
                className="p-4 mt-2 rounded-xl hover:bg-blue-200 flex items-center gap-4"
                onClick={() => {
                  setOpenQuestion(true);
                  setSelectedQuestionType(ques);
                }}
              >
                <div className={ques.color}>{ques.icon}</div>
                {ques.name}
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <div
            className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 mb-2 mr-2 text-white font-semibold"
            onClick={handleClose}
          >
            Close
          </div>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openQuestion}
        onClose={handleCloseQuestion}
        fullWidth={true}
        maxWidth="md"
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <div className="px-6 pt-6 text-3xl font-semibold">
          Create a question
        </div>
        <DialogContent>
          <div>Please create a new question</div>
          <div className="flex gap-2 mt-2 items-center">
            <div className="font-semibold text-lg">Question type :</div>
            <div className={selectedQuestionType.color}>
              {selectedQuestionType.icon}
            </div>
            <div className="font-semibold">{selectedQuestionType.name}</div>
          </div>

          <div className="w-full flex justify-between items-center gap-4 mt-4">
            <TextField
              autoFocus
              required
              margin="dense"
              id="question"
              name="question"
              label="Question"
              type="text"
              fullWidth
              variant="standard"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-200 text-red-600"
            onClick={handleCloseQuestion}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 rounded-md hover:bg-gray-200 mr-2"
            type="submit"
          >
            Create
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyReports;
