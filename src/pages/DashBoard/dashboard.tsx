import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import {
  createQuestions,
  deleteQuestions,
  filterQuestionsByName,
  getQuestions,
  updateQuestions,
} from "../../services/slices/dashboard/dashboard";

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

const filters = [
  {
    value: "1",
    name: "All",
  },
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

interface Row {
  id: number;
  chapters: string;
  question: string;
}

const Dashboard = () => {
  const data: Row[] =
    useSelector((state: any) => state.dashboard?.getData) || [];
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getQuestions());
  }, []);

  const [open, setOpen] = useState(false);
  const [chapter, setChapter] = useState("");
  const [chapterError, setChapterError] = useState(false);
  const [question, setQuestion] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentRowId, setCurrentRowId] = useState<number | null>(null);

  const handleDeleteRow = (id: number) => {
    dispatch(deleteQuestions(id))
      .unwrap()
      .then(() => dispatch(getQuestions()));
  };

  const handleUpdateRow = (id: number) => {
    const rowToUpdate = data.find((row) => row.id === id);
    if (!rowToUpdate) {
      return;
    }

    const selectedChapter: any = chapters.find(
      (ch) => ch.name === rowToUpdate.chapters
    );

    setChapter(selectedChapter.value);
    setQuestion(rowToUpdate.question);

    setIsUpdating(true);
    setCurrentRowId(id);
    setOpen(true);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData);
    const question = formJson.question as string;
    const chapter = formJson.Chapter as string;
    if (!chapter) {
      setChapterError(true);
    }
    const selectedChapter: any = chapters.find((ch) => ch.value === chapter);

    if (isUpdating) {
      dispatch(
        updateQuestions({
          chapter: selectedChapter.name,
          question,
          id: currentRowId,
        })
      )
        .unwrap()
        .then(() => dispatch(getQuestions()));
    } else {
      // Creating a new row
      dispatch(createQuestions({ chapters: selectedChapter.name, question }))
        .unwrap()
        .then(() => dispatch(getQuestions()));
    }

    // Reset flags and close the dialog
    setChapterError(false);
    setIsUpdating(false);
    setCurrentRowId(null);
    setOpen(false);
  };

  const columns: GridColDef<(typeof data)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "chapters",
      headerName: "Chapters",
      width: 200,
    },
    {
      field: "question",
      headerName: "Questions",
      width: 800,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 200,
      resizable: false,
      renderCell: (params: any) => (
        <div>
          <div
            className="rounded bg-red-500 hover:bg-red-700 py-2 px-4 text-white font-semibold"
            onClick={() => handleDeleteRow(params.row.id)}
          >
            Delete
          </div>
          <div
            className="rounded bg-blue-500 hover:bg-blue-700 py-2 px-4 text-white font-semibold"
            onClick={() => handleUpdateRow(params.row.id)}
            style={{ marginLeft: "10px" }}
          >
            Update
          </div>
        </div>
      ),
    },
  ];

  const handleClickOpen = () => {
    setIsUpdating(false);
    setChapter("");
    setQuestion("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChapterChange = (event: SelectChangeEvent) => {
    setChapter(event.target.value as string);
    setChapterError(false);
  };

  const [filter, setFilter] = useState("");

  const handleChangeFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
    if (event.target.value === "All") {
      dispatch(getQuestions());
    } else {
      dispatch(filterQuestionsByName({ name: event.target.value }));
    }
  };

  return (
    <div className="min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-6 py-4 bg-lightgray">
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-4">
        <div className="grid-item">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-150px">
            <h2 className="text-3xl font-bold">$ 189050.99</h2>
            <div className="flex gap-2 items-end justify-between pt-4">
              <p className="text-gray-500 mb-0">Monthly Revenue</p>
              <p className="text-green-500 mb-0 flex items-center gap-1">
                <small>10.05%</small>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1829_1483)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 0C15.1046 0 16 0.895431 16 2L16 14C16 15.1046 15.1046 16 14 16L2 16C0.895431 16 0 15.1046 0 14L0 2C0 0.895431 0.895431 0 2 0L14 0Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.70017 12.2426L10.4372 6.50564L10.4372 11.7759L11.7712 11.7712L11.7712 4.22876L4.22877 4.22876V5.55812L9.49436 5.56283L3.75736 11.2998L4.70017 12.2426Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1829_1483">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* =================== */}
        <div className="grid-item">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-150px">
            <h2 className="text-3xl font-bold">$ 189050.99</h2>
            <div className="flex gap-2 items-end justify-between pt-4">
              <p className="text-gray-500 mb-0">Net Revenue</p>
              <p className="text-red-500 mb-0 flex items-center gap-1">
                <small>10.05%</small>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1829_1561)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C0.895431 0 0 0.895431 0 2L0 14C0 15.1046 0.895431 16 2 16L14 16C15.1046 16 16 15.1046 16 14L16 2C16 0.895431 15.1046 0 14 0L2 0Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.00004 4.94285L9.73703 10.6798L4.46673 10.6798L4.47144 12.0139L12.0139 12.0139L12.0139 4.47144L10.6846 4.47144L10.6798 9.73703L4.94285 4.00004L4.00004 4.94285Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1829_1561">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* =================== */}
        <div className="grid-item">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-150px">
            <h2 className="text-3xl font-bold">$ 189050.99</h2>
            <div className="flex gap-2 items-end justify-between pt-4">
              <p className="text-gray-500 mb-0">Active Subscriptions</p>
              <p className="text-green-500 mb-0 flex items-center gap-1">
                <small>10.05%</small>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1829_1483)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 0C15.1046 0 16 0.895431 16 2L16 14C16 15.1046 15.1046 16 14 16L2 16C0.895431 16 0 15.1046 0 14L0 2C0 0.895431 0.895431 0 2 0L14 0Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.70017 12.2426L10.4372 6.50564L10.4372 11.7759L11.7712 11.7712L11.7712 4.22876L4.22877 4.22876V5.55812L9.49436 5.56283L3.75736 11.2998L4.70017 12.2426Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1829_1483">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* =================== */}
        <div className="grid-item">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex flex-wrap flex-col justify-between min-h-150px">
            <h2 className="text-3xl font-bold">$ 189050.99</h2>
            <div className="flex gap-2 items-end justify-between pt-4">
              <p className="text-gray-500 mb-0">Active Subscribers</p>
              <p className="text-red-500 mb-0 flex items-center gap-1">
                <small>10.05%</small>
                <span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1829_1561)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2 0C0.895431 0 0 0.895431 0 2L0 14C0 15.1046 0.895431 16 2 16L14 16C15.1046 16 16 15.1046 16 14L16 2C16 0.895431 15.1046 0 14 0L2 0Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4.00004 4.94285L9.73703 10.6798L4.46673 10.6798L4.47144 12.0139L12.0139 12.0139L12.0139 4.47144L10.6846 4.47144L10.6798 9.73703L4.94285 4.00004L4.00004 4.94285Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1829_1561">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* =================== */}
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mb-4">
        <div className="grid-item md:col-span-3">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex items-center justify-center min-h-250px">
            <h2 className="text-3xl font-bold text-gray-500">Coming Soon...</h2>
          </div>
        </div>
        <div className="grid-item md:col-span-1">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex items-center justify-center min-h-250px">
            <h2 className="text-3xl font-bold text-gray-500">Coming Soon...</h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="grid-item">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex items-center justify-center min-h-250px">
            <h2 className="text-3xl font-bold text-gray-500">Coming Soon...</h2>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 mb-4">
        <div className="grid-item md:col-span-2">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex items-center justify-center min-h-250px">
            <h2 className="text-3xl font-bold text-gray-500">Coming Soon...</h2>
          </div>
        </div>
        <div className="grid-item md:col-span-2">
          <div className="grid-item-inner p-4 rounded-[10px] bg-white shadow flex items-center justify-center min-h-250px">
            <h2 className="text-3xl font-bold text-gray-500">Coming Soon...</h2>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-end items-center mb-4 p-4 bg-white rounded-[10px] shadow">
        <Box className="gap-4 flex w-full justify-end items-center ">
          <div className="text-lg font-semibold">Filters :</div>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-filter">Filters</InputLabel>
            <Select
              labelId="demo-simple-select-filter"
              id="demo-simple-filter"
              value={filter}
              label="Filter"
              name="Filter"
              onChange={handleChangeFilter}
              className="form-control !rounded-[10px] p-2 filter-drop"
            >
              {filters.map((chapter, index) => (
                <MenuItem key={index} value={chapter.name}>
                  {chapter.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <div
          className="rounded-[10px] bg-green-500 hover:bg-green-700 py-2 px-4 text-white font-semibold ml-4"
          onClick={handleClickOpen}
        >
          Create
        </div>
      </div>

      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={data}
          className="bg-white !rounded-[10px] shadow !border-0"
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          autoHeight
          disableColumnMenu
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth="md"
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <DialogTitle>{isUpdating ? "Update" : "Create"} a question</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please select a chapter and then create a new question
          </DialogContentText>
          <div className="w-full flex justify-between items-center gap-4 mt-4">
            <Box
              sx={{ minWidth: 200 }}
              className="flex flex-col justify-between items-center"
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Chapters</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={chapter}
                  label="Chapters"
                  name="Chapter"
                  onChange={handleChapterChange}
                  sx={{
                    border: chapterError ? "2px solid" : "",
                    borderColor: "red",
                  }}
                >
                  {chapters.map((chapter, index) => (
                    <MenuItem key={index} value={chapter.value}>
                      {chapter.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {chapterError && (
                <div className="text-sm text-red-600">Select a chapter</div>
              )}
            </Box>
            <div className="font-bold">:</div>
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
          <div
            className="rounded bg-red-500 hover:bg-red-700 py-2 px-4 text-white font-semibold"
            onClick={handleClose}
          >
            Cancel
          </div>
          <button
            className="rounded bg-green-500 hover:bg-green-700 py-2 px-4 text-white font-semibold"
            type="submit"
          >
            {isUpdating ? "Update" : "Create"}
          </button>
        </DialogActions>
      </Dialog>
      <div></div>
    </div>
  );
};

export default Dashboard;
