import { Box, Paper, Slider, TextField } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import {  Button, Modal } from "flowbite-react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import NotesIcon from "@mui/icons-material/Notes";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  createQuestions,
  deleteQuestions,
  getQuestions,
} from "../../services/slices/dashboard/dashboard";
import UTurnLeftSharpIcon from "@mui/icons-material/UTurnLeftSharp";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";

// const chapters = [
//   {
//     value: "10",
//     name: "Strategy",
//   },
//   {
//     value: "20",
//     name: "Clientele",
//   },
//   {
//     value: "30",
//     name: "Budget-ROI",
//   },
//   {
//     value: "40",
//     name: "Employees",
//   },
//   {
//     value: "50",
//     name: "Market",
//   },
//   {
//     value: "60",
//     name: "Compliance",
//   },
//   {
//     value: "70",
//     name: "Partners-Suppliers",
//   },
//   {
//     value: "80",
//     name: "Data-ICT",
//   },
//   {
//     value: "90",
//     name: "Customer Value & Social Impact",
//   },
//   {
//     value: "100",
//     name: "Innovation",
//   },
// ];

const questionType: any = [
  {
    id: 1,
    name: "Multiple Choice",
    icon: { image: <RadioButtonCheckedIcon />, id: 1 },
    color: "text-purple-600",
  },
  {
    id: 2,
    name: "Short Answer",
    icon: { image: <NotesIcon />, id: 2 },
    color: "text-yellow-600",
  },
  {
    id: 3,
    name: "Slider",
    icon: { image: <ToggleOnIcon />, id: 3 },
    color: "text-pink-600",
  },
];

const MyReports = () => {
  const dispatch: any = useDispatch();
  const [selectedChapter, setSelectedChapter] = useState("Strategy");
  const [deleteChapter, setDeleteChapter] = useState<any>(null)
  const [open, setOpen] = useState(false);
  const [newOpen, setNewOpen] = useState(false)
  const [openQuestion, setOpenQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState<any>({});
  const [sliderValues, setSliderValues] = useState<any>({});
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any>({});
  const [minValues, setMinValues] = useState<any>({});
  const [maxValues, setMaxValues] = useState<any>({});
  const [steps, setSteps] = useState<any>({});
  const [minValueErrors, setMinValueErrors] = useState<any>({});
  const [maxValueErrors, setMaxValueErrors] = useState<any>({});
  const [chapterQuestions, setChapterQuestions] = useState<any>([]);
  const [saveVisible, setSaveVisible] = useState<any>(false);
  const [chapters, setChapters] = useState<any>([])
  const [newChapterName, setNewChapterName] = useState('')
  const [openDelete, setOpenDelete] = useState(false);

  useEffect(() => {
    dispatch(getQuestions())
      .unwrap()
      .then((res: any) => {
        setChapters(res)
        const filteredQuestions = res.find(
          (question: any) => question.name === selectedChapter
        );

        setQuestions(filteredQuestions?.questions || []);
      });
  }, [selectedChapter]);

  const handleCloseQuestion = () => {
    setOpenQuestion(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChapterOpen = () => {
    setNewOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChapterClose = () => {
    setNewOpen(false);
  };

  const handleAddChapter = () => {
    toast.dismiss();
    dispatch(createQuestions([{name:newChapterName}]))
    .unwrap()
    .then(() => {
      if (newChapterName.trim() !== '') {
      const newChapter = {
        value: chapters.length + 1,
        name: newChapterName,
      };
      setChapters([...chapters, newChapter]);
      setNewChapterName('')
      toast.success(`${newChapterName}  added succesfully`) 
    } else {
      toast.error('Chapter Name is Required')
    }
  }).then(()=>
    dispatch(getQuestions())
    .unwrap()
    .then((res: any) => {
      setChapters(res)
      const filteredQuestions = res.find(
        (question: any) => question.name === selectedChapter
      );

      setQuestions(filteredQuestions?.questions || []);
    }))
  }

  const handleDeleteChapter = () => {
    toast.dismiss();
    dispatch(deleteQuestions(deleteChapter.id))
    .unwrap()
    .then(() => {
      setOpenDelete(false);
      toast.success('Chapter Deleted Successfully')
    }).then(()=>
      dispatch(getQuestions())
      .unwrap()
      .then((res: any) => {
        setChapters(res)
        const filteredQuestions = res.find(
          (question: any) => question.name === selectedChapter
        );
  
        setQuestions(filteredQuestions?.questions || []);
      }))
  }

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

    const isDuplicateQuestion = questions.some(q => q.text == question);
    if (isDuplicateQuestion) {
      toast.error('Cannot add same questions')
      return;
    }

    const findNextId = (options: any) => {
      const usedIds = new Set(options.map((option: any) => option.id));
      let newId = 0;
      while (usedIds.has(newId)) {
        newId++;
      }
      return newId;
    };

    const nextId = findNextId(questions);

    const newQuestion = {
      id: nextId,
      type: selectedQuestionType.name,
      icon: selectedQuestionType.icon.id,
      text: question,
      color: selectedQuestionType.color,
      ...(selectedQuestionType.name === "Multiple Choice" && {
        options: [
          {
            id: 0,
            name: `Enter Option Value`,
          },
          {
            id: 1,
            name: `Enter Option Value`,
          },
        ],
      }),
      ...(selectedQuestionType.name === "Slider" && {
        min: 10,
        max: 20,
        steps: 5,
      }),
    };

    setMaxValues((prevMaxValues: any) => ({
      ...prevMaxValues,
      [nextId]: 20,
    }));
    setMinValues((prevMinValues: any) => ({
      ...prevMinValues,
      [nextId]: 10,
    }));

    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    setOpenQuestion(false);
    setOpen(false);
    setQuestion("");
    setSaveVisible(true);

  };

  const handleAddOption = (questionId: number, options: any) => {
    const findNextId = (options: any) => {
      const usedIds = new Set(options.map((option: any) => option.id));
      let newId = 0;
      while (usedIds.has(newId)) {
        newId++;
      }
      return newId;
    };

    const nextId = findNextId(options);

    const newOption = {
      id: nextId,
      name: `Enter Option Value`,
    };

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

  const changeMinValue = (questionId: any, minVal: any, max: any) => {
    if (minVal < maxValues[questionId] || minVal < max) {
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

  const changeMaxValue = (questionId: any, maxVal: any, min: any) => {
    if (maxVal > minValues[questionId] || maxVal > min) {
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

  const handleSaveData = () => {
    toast.dismiss();
    
    const chapterIndex = chapterQuestions.findIndex(
      (chapter: any) => chapter.name === selectedChapter
    );

    const currentQuestions = [...questions];

     const isDuplicate = currentQuestions.some((question) => {
      const options = question.options;
      return options.some((option: any, optionIndex: any) => {
       return options.findIndex((o: any, idx: any) => idx !== optionIndex && o.name === option.name) !== -1;
     })
  });

    if(isDuplicate) {
      toast.error('Same Option already exist')
      return;
    } else if (chapterIndex !== -1) {
      chapterQuestions[chapterIndex].questions = currentQuestions;
    } else {
      chapterQuestions.push({
        name: selectedChapter,
        questions: currentQuestions,
      });
    }
    toast.success(
      "Questions saved successfully!\n\nYou can continue adding questions to this chapter or select a new chapter to add questions in and then you can click 'Publish Questions' button to save the data!",
      { duration: 6000 }
    );
    setChapterQuestions([...chapterQuestions]);
    setSaveVisible(false);
  };

  const handlePublish = () => {
    toast.dismiss();
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
    <div className="">
      <div className="header-reports w-full">
        <div className="header-reports-inner flex justify-between px-8 py-6 bg-white shadow">
          <div className="flex flex-wrap gap-8 items-center w-full">
            <button className="bg-white border-lightgray3 text-gray-dark border rounded-lg px-3 py-2">
              <span className="rotate-90 inline-block text-gray-dark">
                <UTurnLeftSharpIcon />
              </span>{" "}
              Back to My Reports
            </button>
            <div className="text-xl">AI Strategy Readiness</div>
          </div>
          <div className="flex gap-3 items-center w-full justify-end">
            <button className="bg-white border-lightgray3 text-gray-dark border rounded-lg px-6 max-w-172px w-full py-2 text-nowrap">
              Save Draft
            </button>
            <button
              onClick={handlePublish}
              disabled={saveVisible === true}
              className="bg-darkblue2 border-darkblue2 text-white border rounded-lg px-6 max-w-172px py-2 w-full"
            >
              Publish
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-vhcalc93px max-h-vhcalc93px overflow-y-auto flex flex-wrap">
        <div className="md:w-272px w-full px-4 md:px-0 my-6 md:mb-0 md:mt-6 md:sticky h-full md:top-6">
          <div className="w-full bg-white shadow  md:rounded-l-0 rounded-[10px] pb-4">
            <div className="text-lg font-semibold pt-6 px-5 flex justify-between gap-2 pb-6">
              Chapters{" "}
              <span className="w-6 h-6 flex items-center justify-center border border-lightgray3 text-[10px] rounded-md"
                onClick={handleChapterOpen}
              >
                <AddIcon />
              </span>
            </div>
            <div>
              {chapters.map((chapter:any) => (
                <div
                  key={chapter.value}
                  onClick={() => {
                    if (saveVisible === true) {
                      toast((t) => (
                        <span>
                          {
                            "You have still not saved your changes for.\nAre you sure you want to"
                          }{" "}
                          <b>continue?</b> <br />
                          <button
                            className=" border rounded-lg mt-2 px-2"
                            onClick={() => {
                              setSaveVisible(false);
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
                  className={`px-3 py-2 flex gap-2 justify-between items-center hover:bg-lightgray rounded-lg mx-5 my-2 relative cursor-pointer ${selectedChapter === chapter.name
                      ? "bg-lightgray before:content before:absolute before:w-1 before:top-1/2 before:left-[-1.25rem] before:h-5 before:bg-span-clr before:translate-y-[-50%] before:rounded-r-lg"
                      : ""
                    }`}
                >
                  {chapter.name}{" "}
                  {/* <span className="text-success2">
                    <AddCircleOutlineIcon />
                  </span>{" "} */}
                  <span className="text-red2">
                    <RemoveCircleOutlineIcon 
                    onClick = {() =>  {   
                      setOpenDelete(true)
                      setDeleteChapter(chapter)
                    }  
                    }
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:p-6 p-4 md:w-100-272px w-full">
          {chapters.length === 0 ? ( 
            <div className="bg-white shadow rounded-l-0 rounded-[10px] flex justify-center align-center p-5"><h1 className="text-xl my-3">Please Create a New Chapter to Add Questions</h1></div>
          ) : (
          <Paper sx={{ borderRadius: "16px", py: 4 }} className="md:px-6 px-4">
          <div className="flex flex-col justify-center">
            {questions?.map((question, index) => {
              const displayIcon = questionType.find(
                (type: any) => type.icon.id === question.icon
              );
              return (
                <div key={question.id} className="mb-8">
                  <div className="font-semibold mb-2 flex w-full justify-between items-center">
                    <div>Questions for {selectedChapter}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="flex items-center gap-2">
                        <div className={question.color}>
                          {displayIcon?.icon.image}
                        </div>

                        <div className="text-xl font-semibold">
                          Question {index + 1}
                        </div>
                      </div>
                      <div className="ml-[35px] text-gray-dark2">
                        {question.text}
                      </div>
                    </div>
                    <div>
                      {questions.length > 1 && (
                        <div
                          className="text-red-600 p-2 hover:bg-gray-100 rounded-full cursor-pointer"
                          onClick={() => handleRemoveQuestion(question.id)}
                        >
                          <DeleteIcon />
                        </div>
                      )}
                    </div>
                  </div>
                  {question.type === "Short Answer" && (
                    <div className="mt-2 ml-[35px]">
                      <textarea
                        disabled
                        id={`question-${question.id}`}
                        name={`question-${question.id}`}
                        className="bg-lightgray2 border border-lightgray2 text-gray-900 text-sm rounded-lg focus:ring-lightgray2 focus:border-mediumblue block w-full p-2.5 min-h-62px"
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
                              className={`flex justify-between items-center content-center border px-4 py-2 rounded-xl mb-5`}
                            >
                              <div className="flex justify-center items-center gap-4">
                                <input
                                  disabled
                                  id={`default-radio-${option.id}`}
                                  type="radio"
                                  value={option.name}
                                  name={`default-radio-${question.id}`}
                                  className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                                />
                                <input
                                  className={`shadow-none appearance-none border-0 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-none`}
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
                                      handleRemoveOption(
                                        question.id,
                                        option.id
                                      )
                                    }
                                    className="text-mediumgray2 rounded-full hover:bg-gray-100 cursor-pointer"
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
                            onClick={() =>
                              handleAddOption(question.id, question.options)
                            }
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
                        justifyContent: "space-between",
                        gap: 6,
                        mt: 2,
                        alignItems: "center",
                        ml: "35px",
                      }}
                    >
                      <div className="flex gap-3 items-center">
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
                              value={
                                minValues[question.id] || question.min || 10
                              }
                              onChange={(e) =>
                                changeMinValue(
                                  question.id,
                                  e.target.value,
                                  question.max
                                )
                              }
                              type="number"
                              className="w-14 rounded-lg text-sm border-0 px-2"
                            />
                            {/* <div>Min</div> */}
                          </div>
                          {minValueErrors[question.id] && (
                            <div className="text-xs text-red-600">
                              Min value cannot be greater than or equal to Max
                              value
                            </div>
                          )}
                        </div>

                        <Slider
                          disabled
                          sx={{ width: 250 }}
                          step={steps[question.id] || question.steps || 5}
                          value={sliderValues[question.id] || 10}
                          valueLabelDisplay="auto"
                          min={minValues[question.id] || question.min || 10}
                          max={maxValues[question.id] || question.max || 20}
                          onChange={(_, newValue) =>
                            handleSliderChange(
                              question.id,
                              newValue as number
                            )
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
                              value={
                                maxValues[question.id] || question.max || 20
                              }
                              onChange={(e) =>
                                changeMaxValue(
                                  question.id,
                                  e.target.value,
                                  question.min
                                )
                              }
                              type="number"
                              className="w-14 border-0 px-2 rounded-lg text-sm"
                            />
                            {/* <div className="flex w-full justify-center">Max</div> */}
                          </div>
                          {maxValueErrors[question.id] && (
                            <div className="text-xs text-red-600">
                              Max value cannot be less than or equal to Min
                              value
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center ml-10">
                        <div className="font-semibold">
                          Enter Number of steps :
                        </div>
                        <input
                          name="steps"
                          defaultValue={
                            steps[question.id] || question.steps || 5
                          }
                          onChange={(e: any) => {
                            if (e.target.value > 0) {
                              changeStepsValue(question.id, e.target.value);
                            }
                          }}
                          min={1}
                          type="number"
                          className="ml-2 w-28 rounded-lg font-bold"
                        />
                      </div>
                    </Box>
                  )}
                </div>
              );
            })}
            <div className="relative text-center before:content before:absolute before:w-full before:top-1/2 before:left-0 mt-4 before:h-1px before:bg-lightgray3 ">
              <div className="inline-flex gap-4 justify-center items-center relative bg-white px-3">
                <div
                  className="rounded-lg bg-white hover:bg-blue-700 py-2 px-4 hover:text-white text-gray-dark font-semibold cursor-pointer border border-lighgray3"
                  onClick={handleClickOpen}
                >
                  Add Questions
                </div>
                {saveVisible && (
                  <div
                    onClick={() => handleSaveData()}
                    className="rounded bg-purple-500 hover:bg-purple-700 py-2 px-4 text-white font-semibold cursor-pointer"
                  >
                    Save
                  </div>
                )}
              </div>
            </div>
          </div>
        </Paper>
          )}
        </div>
      </div>
      <Modal
        show={openDelete}
        size="xl"
        onClose={() => setOpenDelete(false)}
        popup
        position="center"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="flex gap-1 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete the
              <div className="font-semibold text-gray-900">
              {deleteChapter?.name}
              </div>
              Chapter?
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={ handleDeleteChapter} >
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenDelete(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Dialog fullWidth={true} maxWidth="sm" open={newOpen} onClose={handleChapterClose} PaperProps={{
        component: "form",
        onSubmit: (e: any) => {
          e.preventDefault();
          handleAddChapter();
          if (newChapterName.trim() !== "") {
            handleChapterClose();
          }
        }
      }}>
        <DialogTitle>Please Enter Chapter's Name</DialogTitle>
        <DialogContent>
          <input
            id="chapter"
            className="rounded-lg mt-1"
            type="text"
            placeholder="Enter Chapter Name.."
            value={newChapterName}
            onChange={(e) => setNewChapterName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <button
            className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 mb-2 mr-2 text-white font-semibold cursor-pointer"
            type="submit"
          >
            Add
          </button>
          <div
            className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 mb-2 mr-2 text-white font-semibold cursor-pointer"
            onClick={handleChapterClose}
          >
            Close
          </div>
        </DialogActions>
      </Dialog>
      

      <Dialog fullWidth={true} maxWidth="xs" open={open} onClose={handleClose}>
        <DialogTitle> Select the type of question</DialogTitle>
        <DialogContent>
          <div>
            {questionType.map((ques: any) => (
              <div
                key={ques.id}
                className="p-4 mt-2 rounded-xl hover:bg-blue-200 flex items-center gap-4 cursor-pointer"
                onClick={() => {
                  setOpenQuestion(true);
                  setSelectedQuestionType(ques);
                }}
              >
                <div className={ques.color}>{ques.icon?.image}</div>
                {ques.name}
              </div>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <div
            className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 mb-2 mr-2 text-white font-semibold cursor-pointer"
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
              {selectedQuestionType.icon?.image}
            </div>
            <div className="font-semibold">{selectedQuestionType.name}</div>
          </div>

          <div className="w-full flex justify-between items-center gap-4 mt-4  focus ">
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
