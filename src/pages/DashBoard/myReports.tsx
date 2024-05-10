import { Box, Button, Paper, Slider, TextField } from "@mui/material";
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

const initialOptions = [
  {
    id: 1,
    name: "Option 1",
  },
  {
    id: 2,
    name: "Option 2",
  },
];

const MyReports = () => {
  const [open, setOpen] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [question, setQuestion] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState<any>({});

  const [sliderValues, setSliderValues] = useState<any>({});
  const [options, setOptions] = useState(initialOptions);
  const [nextId, setNextId] = useState(3);

  const [questions, setQuestions] = useState<any[]>([]);

  const [questionIdCounter, setQuestionIdCounter] = useState(1);

  const [answers, setAnswers] = useState<any>({});

  console.log(questions);

  console.log(options);

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
    console.log("-------------", newValue, questionId);
    // Update the slider value for the specified question
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId && question.type === "Slider") {
          // Update the value of the slider for the matching question
          return { ...question, value: newValue };
        }
        return question;
      });
    });
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
        options: initialOptions,
      }),
      ...(selectedQuestionType.name === "Slider" && {
        value: sliderValues[questionIdCounter] || 8,
      }),
      ...(selectedQuestionType.name === "Short Answer" && {
        answer: "",
      }),
    };

    // Add the new question to the list of questions
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    // Increment the question ID counter
    setQuestionIdCounter((prevId) => prevId + 1);

    // Close the dialog and reset state variables
    setOpenQuestion(false);
    setOpen(false);
    setQuestion("");
  };

  const handleAddOption = () => {
    const newOption = {
      id: nextId,
      name: `Option ${nextId}`,
    };

    setNextId((prevId) => prevId + 1);
    setOptions((prevOptions) => [...prevOptions, newOption]);
  };

  const handleRemoveOption = (optionId: number) => {
    const updatedOptions = options.filter((option) => option.id !== optionId);
    setOptions(updatedOptions);
  };
  const handleRemoveQuestion = (questionId: number) => {
    // Remove the question with the specified ID from the list
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(updatedQuestions);
  };

  const onChangeTextArea = (questionId: any, newValue: any) => {
    setQuestions((prevQuestions) => {
      return prevQuestions.map((question) => {
        if (question.id === questionId && question.type === "Short Answer") {
          return { ...question, answer: newValue };
        }
        return question;
      });
    });
    setAnswers((prevAnswers: any) => ({
      ...prevAnswers,
      [questionId]: newValue,
    }));
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-64 bg-gray-200">
        <div className="text-lg font-semibold mt-6 ml-6">Chapters</div>
        <div>
          {chapters.map((chapter) => (
            <div
              key={chapter.value}
              className="px-2 py-2 hover:bg-slate-600 rounded-lg mx-6 my-2"
            >
              {chapter.name}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 w-full">
        <Paper sx={{ borderRadius: "16px", py: 4, px: 6 }}>
          <div className="flex flex-col justify-center">
            {questions.map((question, index) => (
              <div key={question.id} className="mb-8">
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
                    <Button
                      size="small"
                      color="error"
                      onClick={() => handleRemoveQuestion(question.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </div>
                </div>
                {question.type === "Short Answer" && (
                  <div className="mt-2">
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
                  <div className="mt-2">
                    <div className="flex">
                      <div className="mt-2 w-96">
                        {options.map((option) => (
                          <div
                            key={option.id}
                            className={`flex justify-between items-center content-center border p-4 rounded-xl mb-5`}
                          >
                            <div className="flex justify-center items-center gap-4">
                              <input
                                id={`default-radio-${option.id}`}
                                type="radio"
                                value={option.name}
                                name={`default-radio`}
                                className="min-w-[13px] text-blue-600 bg-gray-100  dark:focus:ring-blue-600 dark:ring-offset-gray-800  dark:bg-gray-700"
                              />

                              <h2 className="font-medium text-sm text-start">
                                {option.name}
                              </h2>
                            </div>
                            <div>
                              {options.length > 2 && (
                                <Button
                                  onClick={() => handleRemoveOption(option.id)}
                                  size="small"
                                  color="error"
                                >
                                  <CancelIcon />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      {options.length < 4 && (
                        <Button
                          sx={{ fontWeight: "bold" }}
                          onClick={handleAddOption}
                        >
                          Add Option
                        </Button>
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
                    }}
                  >
                    <div style={{ cursor: "pointer", fontWeight: "bold" }}>
                      {8}
                    </div>
                    <Slider
                      sx={{ width: 250 }}
                      step={1}
                      value={sliderValues[question.id] || 8}
                      valueLabelDisplay="auto"
                      min={8}
                      max={14}
                      onChange={(_, newValue) =>
                        handleSliderChange(question.id, newValue as number)
                      }
                    />
                    <div style={{ cursor: "pointer", fontWeight: "bold" }}>
                      {14}
                    </div>
                  </Box>
                )}
              </div>
            ))}
            <div className="flex justify-center items-center mt-4">
              <Button variant="contained" onClick={handleClickOpen}>
                Add Questions
              </Button>
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
                className="p-4 my-2 rounded-xl hover:bg-blue-200 flex items-center gap-4"
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
          <Button onClick={handleClose}>Close</Button>
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
          <button className="p-4" onClick={handleCloseQuestion}>
            Cancel
          </button>
          <button className="p-4" type="submit">
            Create
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MyReports;
