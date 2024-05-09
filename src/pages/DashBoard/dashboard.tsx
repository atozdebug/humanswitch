import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import { createQuestions } from "../../services/slices/dashboard/createQuestions";

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
    name: "Budget/ROI",
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
    name: "Partners/Suppliers",
  },
  {
    value: "80",
    name: "Data/ICT",
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
  chapter: string;
  question: string;
}

const Dashboard = () => {
  const dispatch: any = useDispatch();
  const [rows, setRows] = useState<Row[]>([]);

  const [open, setOpen] = useState(false);
  const [chapter, setChapter] = useState("");
  const [chapterError, setChapterError] = useState(false);
  const [question, setQuestion] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentRowId, setCurrentRowId] = useState<number | null>(null);

  const handleDeleteRow = (id: number) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleUpdateRow = (id: number) => {
    const rowToUpdate = rows.find((row) => row.id === id);
    if (!rowToUpdate) {
      return;
    }

    const selectedChapter: any = chapters.find(
      (ch) => ch.name === rowToUpdate.chapter
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
      // Updating an existing row
      setRows((prevRows) =>
        prevRows.map((row) =>
          row.id === currentRowId
            ? { ...row, chapter: selectedChapter.name, question }
            : row
        )
      );
    } else {
      // Creating a new row
      const newRow = {
        id: rows.length + 1,
        chapter: selectedChapter.name,
        question,
      };
      setRows((prevRows) => [...prevRows, newRow]);
      dispatch(createQuestions({ chapters: selectedChapter.name, question }));
    }

    // Reset flags and close the dialog
    setChapterError(false);
    setIsUpdating(false);
    setCurrentRowId(null);
    setOpen(false);
  };

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "chapter",
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
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDeleteRow(params.row.id)}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleUpdateRow(params.row.id)}
            style={{ marginLeft: "5px" }}
          >
            Update
          </Button>
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

  return (
    <div className="max-h-vhcalc88px overflow-y-auto min-h-vhcalc88px p-8">
      <div className="w-full flex justify-end items-start mb-8">
        <Button variant="contained" onClick={handleClickOpen}>
          Create
        </Button>
      </div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
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
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">{isUpdating ? "Update" : "Create"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Dashboard;
