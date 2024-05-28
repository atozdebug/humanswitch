import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useLocation } from "react-router-dom";
import CreateButton from "../components/Home/createButton";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const headers = [
  {
    path: "/dashboard",
    name: "Dashboard",
    description: "Dashboard Page",
    buttonName: "Report",
    buttonDescription:
      "Create a new report from scratch or start with one of our templates.",
  },
  {
    path: "/reports",
    name: "Reports",
    description: "Reports Page",
  },
  {
    path: "/chatbot",
    name: "ChatBot",
    description: "A short description of the chatbot and its capabilities",
  },
  {
    path: "/manage-plans",
    name: "Manage Plans",
    description: "Manage Plans Page",
    buttonName: "Plan",
    buttonDescription:
      "Create a new report from scratch or start with one of our templates.",
  },
  {
    path: "/manage-roles",
    name: "Manage Roles",
    description: "Manage Roles Page",
    buttonName: "Role",
    buttonDescription:
      "Create a new report from scratch or start with one of our templates.",
  },
  {
    path: "/companies",
    name: "Companies",
    description: "Companies Page",
    buttonDescription:
      "Create a new report from scratch or start with one of our templates.",
  },
  {
    path: "/integrations",
    name: "Integrations",
    description: "Integrations Page",
  },
  {
    path: "/users",
    name: "Users",
    description: "Users Page",
  },
  {
    path: "/settings",
    name: "Settings",
    description: "Settings Page",
  },
];

const schemaPlan = yup.object().shape({
  planName: yup.string().required("Plan name is required"),
  price: yup.string().required("Price is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
  employees: yup.string().required("Employees is required"),
  isActive: yup.boolean(),
});

const schemaRole = yup.object().shape({
  isActive: yup.boolean(),
  roleName: yup.string().required("Role name is required"),
  editMember: yup.string(),
  editCompanyDetails: yup.string(),
  editReport: yup.string(),
});

interface FormData {
  planName: string;
  price: string;
  startDate: string;
  endDate: string;
  employees: string;
  isActive: boolean;
}

const defaultValues = {
  planName: "",
  price: "",
  startDate: "",
  endDate: "",
  employees: "",
  isActive: false,
};

const Header = () => {
  const location = useLocation();

  const getBasePath = (pathname: any) => {
    const parts = pathname.split("/");
    return `/${parts[1]}`;
  };

  const title = headers.find(
    (header) => header.path === getBasePath(location.pathname)
  );

  const schemas = () => {
    if (title?.buttonName === "Report") {
      return yupResolver(schemaPlan);
    } else if (title?.buttonName === "Plan") {
      return yupResolver(schemaPlan);
    } else if (title?.buttonName === "Role") {
      return yupResolver(schemaRole);
    }
  };

  const {
    register,
    handleSubmit,
    // reset,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const [open, setOpen] = useState(false);

  const onClick = () => {
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title?.buttonName === "Report") {
      console.log("Report");
    } else if (title?.buttonName === "Plan") {
      console.log("Plan");
    } else if (title?.buttonName === "Role") {
      console.log("Role");
    }
    handleClose();
  };

  return (
    <div className="bg-white shadow-sm md:py-5 md:px-8 px-4 py-4">
      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 flex items-center justify-between">
        <div className="flex justify-center items-center">
          <span className="bg-[#F6F8FA] p-2 rounded-full">
            <SmartToyIcon />
          </span>
          <div className="px-4">
            <h2 className="text-heading text-lg font-medium">{title?.name}</h2>
            <p>{title?.description}</p>
          </div>
        </div>
        <div className="rounded-lg flex justify-end">
          {title?.buttonName && (
            <CreateButton
              text={`Create New ${title?.buttonName}`}
              onClick={onClick}
              className=""
            />
          )}
        </div>
      </div>
      <Dialog
        fullWidth={true}
        maxWidth="md"
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleFormSubmit,
        }}
      >
        <div className="p-4">
          <div className="font-semibold text-xl">
            Create New {title?.buttonName}
          </div>

          <div>{title?.buttonDescription}</div>
        </div>
        <DialogContent>
          {title?.buttonName === "Report" && <div>Create New Report</div>}
          {title?.buttonName === "Plan" && <div>Create New Plan</div>}
          {title?.buttonName === "Role" && <div>Create New Role</div>}

          {/* <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          /> */}
        </DialogContent>
        <DialogActions>
          <button
            className="m-2 w-full px-4 py-2 rounded-md hover:bg-gray-200 text-red-600"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="m-2 w-full px-4 py-2 rounded-md hover:bg-gray-200 mr-2 text-blue-800"
            type="submit"
          >
            Subscribe
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
