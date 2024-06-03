import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useLocation } from "react-router-dom";
import CreateButton from "../components/Home/createButton";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useDispatch } from "react-redux";
import { createPlans, getPlans } from "../services/slices/dashboard/plans";
import { Accordion } from "flowbite-react";
import { Checkbox, Label } from "flowbite-react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { createRoles, getRoles } from "../services/slices/dashboard/roles";

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
    description: "Create new plans and manage existing",
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
    path: "/knowledge-base",
    name: "Knowledge Base",
    description: "Knowledge Base Page",
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
  isActiveRole: yup.boolean(),
  roleName: yup.string().required("Role name is required"),
  editMember: yup.boolean(),
  editCompanyDetails: yup.boolean(),
  editReport: yup.boolean(),
  createMember: yup.boolean(),
  createCompanyDetails: yup.boolean(),
  createReport: yup.boolean(),
  deleteMember: yup.boolean(),
  deleteCompanyDetails: yup.boolean(),
  deleteReport: yup.boolean(),
});

interface FormData {
  planName: string;
  price: string;
  startDate: string;
  endDate: string;
  employees: string;
  isActive: boolean;
  isActiveRole: boolean;
  roleName: string;
  editMember: boolean;
  editCompanyDetails: boolean;
  editReport: boolean;
  createMember: boolean;
  createCompanyDetails: boolean;
  createReport: boolean;
  deleteMember: boolean;
  deleteCompanyDetails: boolean;
  deleteReport: boolean;
}

const defaultValues = {
  planName: "",
  price: "",
  startDate: "",
  endDate: "",
  employees: "",
  isActive: false,
  isActiveRole: false,
  roleName: "",
  editMember: false,
  editCompanyDetails: false,
  editReport: false,
  createMember: false,
  createCompanyDetails: false,
  createReport: false,
  deleteMember: false,
  deleteCompanyDetails: false,
  deleteReport: false,
};

const Header = () => {
  const location = useLocation();
  const dispatch: any = useDispatch();

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
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const onClick = () => {
    handleClickOpen();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset(defaultValues);
    clearErrors();
    setOpen(false);
  };

  const onSubmit = (data: FormData) => {
    if (title?.buttonName === "Report") {
    } else if (title?.buttonName === "Plan") {
      dispatch(
        createPlans({
          name: data.planName,
          price: data.price,
          start_date: data.startDate,
          end_date: data.endDate,
          employees: data.employees,
          active: data.isActive,
        })
      )
        .unwrap()
        .then(() => dispatch(getPlans()));
    } else if (title?.buttonName === "Role") {
      dispatch(
        createRoles({
          active: data.isActiveRole,
          name: data.roleName,
          editMember: data.editMember,
          editCompanyDetails: data.editCompanyDetails,
          editReport: data.editReport,
          createMember: data.createMember,
          createCompanyDetails: data.createCompanyDetails,
          createReport: data.createReport,
          deleteMember: data.deleteMember,
          deleteCompanyDetails: data.deleteCompanyDetails,
          deleteReport: data.deleteReport,
        })
      )
        .unwrap()
        .then(() => dispatch(getRoles()));
    }
    reset();
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
            <h2 className="text-main-heading text-lg font-medium">
              {title?.name}
            </h2>
            <p className="text-gray-dark text-sm">{title?.description}</p>
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
        maxWidth="sm"
        open={open}
        onClose={handleClose}
        className="backdrop-blur"
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 py-4 border-b relative">
            <div className="flex justify-start items-center px-0">
              <span className="bg-white border w-11 h-11 flex justify-center items-center text-gray-dark rounded-full">
                <SettingsOutlinedIcon />
              </span>
              <div className="pl-4">
                <h2 className="text-main-heading text-lg font-medium">
                  Create New {title?.buttonName}
                </h2>
                <p className="text-gray-dark text-sm">
                  {title?.buttonDescription}
                </p>
              </div>
            </div>
            <div
              className="modal-close-btn absolute top-4 right-4 leading-3"
              onClick={handleClose}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.0001 10.9396L15.7126 7.22705L16.7731 8.28755L13.0606 12.0001L16.7731 15.7126L15.7126 16.7731L12.0001 13.0606L8.28755 16.7731L7.22705 15.7126L10.9396 12.0001L7.22705 8.28755L8.28755 7.22705L12.0001 10.9396Z"
                  fill="#525866"
                />
              </svg>
            </div>
          </div>
          <DialogContent className="!p-5">
            {title?.buttonName === "Report" && <div>Create New Report</div>}
            {title?.buttonName === "Plan" && (
              <div>
                <div>
                  <label className="mb-1 block text-sm">Plan Name</label>
                  <div>
                    <input
                      className={`appearance-none border border-lightgray6 rounded-[10px] w-full py-2.5 px-3 text-darkgray3 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.planName ? "border-[#F04438]" : ""
                      }`}
                      id="planName"
                      type="text"
                      placeholder="Enter your Plan"
                      {...register("planName")}
                    />
                    {errors?.planName && (
                      <p className="text-red-500 text-sm mt-1">
                        {String(errors.planName.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-sm">Price</label>
                  <div>
                    <input
                      className={`border-lightgray6 appearance-none border rounded-[10px] w-full py-2.5 px-3 text-darkgray3 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.price ? "border-[#F04438]" : ""
                      }`}
                      id="price"
                      type="number"
                      placeholder="Enter your Plan"
                      {...register("price")}
                    />
                    {errors?.price && (
                      <p className="text-red-500 text-sm mt-1">
                        {String(errors.price.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-sm">Start Date</label>
                  <div>
                    <DatePicker
                      value={startDate}
                      onChange={(newValue) => {
                        setValue(
                          "startDate",
                          newValue ? newValue.format("YYYY-MM-DD") : "",
                          {
                            shouldValidate: true,
                          }
                        );
                        setStartDate(newValue);
                      }}
                    />
                    {errors?.startDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {String(errors.startDate.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <label className="mb-1 block text-sm">End Date</label>
                    <DatePicker
                      minDate={
                        (startDate && dayjs(startDate).add(1, "day")) ||
                        undefined
                      }
                      value={endDate}
                      onChange={(newValue) => {
                        setValue(
                          "endDate",
                          newValue ? newValue.format("YYYY-MM-DD") : "",
                          {
                            shouldValidate: true,
                          }
                        );
                        setEndDate(newValue);
                      }}
                    />
                    {errors?.endDate && (
                      <p className="text-red-500 text-sm mt-1">
                        {String(errors.endDate.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <label className="mb-1 block text-sm">Employees</label>
                  <div>
                    <input
                      className={`border-lightgray6 appearance-none border rounded-[10px] w-full py-2.5 px-3 text-darkgray3 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.employees ? "border-[#F04438]" : ""
                      }`}
                      id="employees"
                      type="number"
                      placeholder="Enter your Plan"
                      {...register("employees")}
                    />
                    {errors?.employees && (
                      <p className="text-red-500 text-sm mt-1">
                        {String(errors.employees.message)}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4">
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        checked={checked}
                        onChange={(e: any) => {
                          handleChange(e);
                          setValue("isActive", e.target.checked, {
                            shouldValidate: true,
                          });
                        }}
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="relative w-7 h-4 bg-gray-300 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:border-4 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-span-clr after:border-span-clr after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-span-clr"></div>
                      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Active
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}
            {title?.buttonName === "Role" && (
              <>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    {...register("isActiveRole")}
                    className="sr-only peer"
                  />
                  <div className="relative w-7 h-4 bg-gray-300 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:after:border-4 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-span-clr after:border-span-clr after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-span-clr"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Active
                  </span>
                </label>
                <div className="py-3">
                  <label className="mb-1 block text-sm">Role Name</label>
                  <div className="relative">
                    <input
                      className={`appearance-none border border-slate-300 minor-shadow rounded-[10px] w-full py-2 px-3 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                      id="role"
                      type="text"
                      placeholder="Role Name..."
                      {...register("roleName")}
                    />
                    <span className="top-1/2 right-2 absolute translate-y-n50">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25ZM11.1158 13.2086L11.2156 12.8006C11.164 12.8249 11.0807 12.8526 10.9665 12.8841C10.852 12.9157 10.7489 12.9318 10.6583 12.9318C10.4654 12.9318 10.3295 12.9001 10.2507 12.8366C10.1724 12.773 10.1333 12.6534 10.1333 12.4783C10.1333 12.4089 10.1451 12.3054 10.1697 12.17C10.1936 12.0337 10.2211 11.9126 10.2516 11.8067L10.6242 10.4876C10.6607 10.3665 10.6857 10.2334 10.6992 10.0882C10.7129 9.94325 10.7193 9.84185 10.7193 9.78429C10.7193 9.50614 10.6218 9.28041 10.4268 9.10629C10.2317 8.93229 9.95393 8.84529 9.59396 8.84529C9.39365 8.84529 9.18188 8.88088 8.95776 8.952C8.73363 9.02294 8.49933 9.1084 8.25421 9.2082L8.15415 9.6165C8.22719 9.58949 8.31419 9.56043 8.41598 9.53034C8.51732 9.50038 8.61674 9.48489 8.71347 9.48489C8.91096 9.48489 9.04399 9.51856 9.1137 9.58488C9.18342 9.65139 9.21844 9.7697 9.21844 9.93883C9.21844 10.0324 9.20736 10.1363 9.18438 10.2492C9.16172 10.3628 9.13342 10.483 9.10013 10.6098L8.72595 11.9342C8.69266 12.0734 8.66834 12.1979 8.65304 12.3084C8.63786 12.4189 8.63057 12.5272 8.63057 12.6326C8.63057 12.9048 8.73114 13.1292 8.93222 13.3063C9.13329 13.4826 9.41523 13.5714 9.77769 13.5714C10.0137 13.5714 10.2209 13.5406 10.3992 13.4785C10.5773 13.4167 10.8164 13.3268 11.1158 13.2086ZM11.0495 7.8502C11.2235 7.68882 11.3101 7.49254 11.3101 7.26272C11.3101 7.03341 11.2236 6.83675 11.0495 6.67331C10.8758 6.51032 10.6666 6.42857 10.4219 6.42857C10.1765 6.42857 9.96635 6.51013 9.79107 6.67331C9.61579 6.83675 9.52796 7.03334 9.52796 7.26272C9.52796 7.49254 9.61579 7.68875 9.79107 7.8502C9.96667 8.01217 10.1764 8.09321 10.4219 8.09321C10.6666 8.09321 10.8758 8.01217 11.0495 7.8502Z"
                          fill="#868C98"
                        />
                      </svg>
                    </span>
                  </div>
                  {errors?.roleName && (
                    <p className="text-red-500 text-sm mt-1">
                      {String(errors.roleName.message)}
                    </p>
                  )}
                </div>
                <div className="cs-accordion pb-10px">
                  <Accordion className="border-0 flex flex-col gap-4">
                    <Accordion.Panel className=" !border-0 bg-lightgray5">
                      <Accordion.Title className="bg-lightgray5 hover:!bg-lightgray5 !border-0 rounded-[10px] !ring-0">
                        Edit
                      </Accordion.Title>
                      <Accordion.Content className="pt-5 mt-n40px bg-lightgray5 rounded-b-[10px] !border-0">
                        <p className="mb-14px text-gray-dark text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("editMember")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Edit Member</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("editCompanyDetails")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Edit Company Details </Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("editReport")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Edit Report</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=" !border-0 rounded-[10px] mb-4">
                      <Accordion.Title className="bg-lightgray5 hover:bg-lightgray5 !border-0 rounded-[10px] !ring-0">
                        Create
                      </Accordion.Title>
                      <Accordion.Content className="pt-5 mt-n40px bg-lightgray5 rounded-b-[10px] !border-0">
                        <p className="mb-14px text-gray-dark text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("createMember")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Create Member</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("createCompanyDetails")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Create Company Details </Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("createReport")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Create Report</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel className=" !border-0 rounded-[10px] mb-4">
                      <Accordion.Title className="bg-lightgray5 hover:bg-lightgray5 !border-0 rounded-[10px] !ring-0">
                        Delete
                      </Accordion.Title>
                      <Accordion.Content className="pt-5 mt-n40px bg-lightgray5 rounded-b-[10px] !border-0">
                        <p className="mb-14px text-gray-dark text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("deleteMember")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Delete Member</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2 mb-17px">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("deleteCompanyDetails")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Delete Company Details </Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex h-5 items-center">
                            <Checkbox
                              id="shipping"
                              {...register("deleteReport")}
                            />
                          </div>
                          <div className="flex flex-col">
                            <Label>Delete Report</Label>
                            <div className="text-gray-500">
                              <span className="text-sm font-normal">
                                A short description of the permissions will be
                                displayed here
                              </span>
                            </div>
                          </div>
                        </div>
                      </Accordion.Content>
                    </Accordion.Panel>
                  </Accordion>
                </div>
              </>
            )}
          </DialogContent>
          <DialogActions className="border-t !px-5 !py-4">
            <button
              className="w-full px-4 py-2 rounded-[10px] hover:bg-red-500 hover:border-red-500 hover:text-white text-gray-dark border "
              onClick={handleClose}
              type="button"
            >
              Discard
            </button>
            <button
              className="w-full px-4 py-2 rounded-[10px] hover:bg-purple-700 hover:border-purple-700 border-span-clr text-white bg-span-clr "
              type="submit"
            >
              Save
            </button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default Header;
