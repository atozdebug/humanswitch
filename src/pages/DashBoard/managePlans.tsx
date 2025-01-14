import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePlans,
  getPlans,
  updatePlans,
} from "../../services/slices/dashboard/plans";
import dayjs, { Dayjs } from "dayjs";
import MoreVert from "@mui/icons-material/MoreVert";
import { Dropdown, Button, Modal } from "flowbite-react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

const schemaPlan = yup.object().shape({
  planName: yup.string().required("Plan name is required"),
  price: yup.string().required("Price is required"),
  startDate: yup.string().required("Start date is required"),
  endDate: yup.string().required("End date is required"),
  employees: yup.string().required("Employees is required"),
  isActive: yup.boolean(),
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

const ManagePlans = () => {
  const data: any = useSelector((state: any) => state.plan?.getData) || [];
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getPlans());
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: yupResolver(schemaPlan),
    defaultValues,
  });

  const [openDelete, setOpenDelete] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [initialValues, setInitialValues] = useState<FormData | null>(null);

  const [checked, setChecked] = useState(false);

  const handleEdit = (item: any) => {
    setSelectedPlan(item);
    setOpen(true);
    // Set initial values to the selected role's data
    setInitialValues({
      planName: item.name,
      price: item.price,
      employees: item.employees,
      isActive: item.active,

      startDate: dayjs(
        item?.start_date,
        "ddd, DD MMM YYYY HH:mm:ss [GMT]"
      ).format("YYYY-MM-DD"),
      endDate: dayjs(item?.end_date, "ddd, DD MMM YYYY HH:mm:ss [GMT]").format(
        "YYYY-MM-DD"
      ),
    });
  };

  useEffect(() => {
    setValue("planName", selectedPlan?.name);
    setValue("price", selectedPlan?.price);
    setValue("employees", selectedPlan?.employees);
    setValue("isActive", selectedPlan?.active);
    setChecked(selectedPlan?.active);
    setValue(
      "startDate",
      dayjs(selectedPlan?.start_date, "ddd, DD MMM YYYY HH:mm:ss [GMT]").format(
        "YYYY-MM-DD"
      )
    );
    setValue(
      "endDate",
      dayjs(selectedPlan?.end_date, "ddd, DD MMM YYYY HH:mm:ss [GMT]").format(
        "YYYY-MM-DD"
      )
    );
    setStartDate(
      dayjs(selectedPlan?.start_date, "ddd, DD MMM YYYY HH:mm:ss [GMT]")
    );
    setEndDate(
      dayjs(selectedPlan?.end_date, "ddd, DD MMM YYYY HH:mm:ss [GMT]")
    );
  }, [selectedPlan]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
    if (initialValues) {
      setValue("planName", initialValues.planName);
      setValue("price", initialValues.price);
      setValue("employees", initialValues.employees);
      setValue("isActive", initialValues.isActive);
      setValue("startDate", initialValues.startDate);
      setValue("endDate", initialValues.endDate);
    }
  };

  const handleDelete = () => {
    dispatch(deletePlans(selectedPlan.id))
      .unwrap()
      .then(() => {
        setOpenDelete(false);
        dispatch(getPlans());
      });
  };

  const onSubmit = (data: FormData) => {
    dispatch(
      updatePlans({
        id: selectedPlan.id,
        name: data.planName,
        price: data.price,
        start_date: data.startDate,
        end_date: data.endDate,
        employees: data.employees,
        active: data.isActive,
      })
    )
      .unwrap()
      .then(() => {
        setOpen(false);
        dispatch(getPlans());
        reset();
      });
  };

  return (
    <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
        {data.map((item: any, index: any) => (
          <div className="grid-item" key={index}>
            <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
              <ul className="flex flex-wrap list-unstyled">
                <li className="w-1/2 pr-3">
                  <h3 className="text-main-heading text-lg font-medium plan-title">
                    {item.name}
                  </h3>
                  <p className="text-gray-dark text-sm plan-edited">
                    Edited 1 min ago
                  </p>
                </li>
                <li className="w-1/2 text-right">
                  <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                    Default
                  </span>
                  <span
                    className={`px-2 py-2px text-xs ${
                      item.active
                        ? "bg-lightgreen text-darkgreen"
                        : "bg-lightred text-darkred"
                    }  inline-block align-middle rounded-full mx-1`}
                  >
                    {item.active ? "Active" : "Inactive"}
                  </span>
                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <button className="hover:bg-gray-200 rounded-full ml-1">
                        <MoreVert />
                      </button>
                    )}
                  >
                    <Dropdown.Item
                      onClick={() => {
                        handleEdit(item);
                      }}
                      className="gap-2"
                    >
                      <EditIcon />
                      Update
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        setSelectedPlan(item);
                        setOpenDelete(true);
                      }}
                      className="gap-2"
                    >
                      <DeleteIcon />
                      Delete
                    </Dropdown.Item>
                  </Dropdown>
                </li>
              </ul>
              <ul className="flex flex-wrap items-center list-unstyled pt-9">
                <li className="w-2/3 pr-3 flex gap-2">
                  <div className="w-1/2">
                    <p className="text-gray-dark text-sm plan-edited">Users</p>
                    <p className="text-main-heading text-sm font-medium plan-title">
                      {item.employees} Users
                    </p>
                  </div>
                  <div className="w-1/2">
                    <p className="text-gray-dark text-sm plan-edited">
                      End Date
                    </p>
                    <p className="text-main-heading text-sm font-medium plan-title">
                      {dayjs(item.end_date).format("MM/DD/YYYY")}
                    </p>
                  </div>
                </li>
                <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                  £{item.price}
                </li>
              </ul>
            </div>
          </div>
        ))}
        {/* ======================= */}
        {/* <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Professional Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                  Default
                </span>
                <span className="px-2 py-2px text-xs bg-lightred text-darkred inline-block align-middle rounded-full mx-1">
                  Inactive
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    11-99 Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £499
              </li>
            </ul>
          </div>
        </div> */}
        {/* ======================= */}
        {/* <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Premium Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightgray text-gray-dark inline-block align-middle rounded-full mx-1">
                  Default
                </span>
                <span className="px-2 py-2px text-xs bg-lightgreen text-darkgreen inline-block align-middle rounded-full mx-1">
                  Active
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    100+ Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £1299
              </li>
            </ul>
          </div>
        </div> */}
        {/* ======================= */}
        {/* <div className="grid-item">
          <div className="grid-item-inner p-5 rounded-[10px] bg-white shadow-s2">
            <ul className="flex flex-wrap list-unstyled">
              <li className="w-1/2 pr-3">
                <h3 className="text-main-heading text-lg font-medium plan-title">
                  Premium Plan
                </h3>
                <p className="text-gray-dark text-sm plan-edited">
                  Edited 1 min ago
                </p>
              </li>
              <li className="w-1/2 text-right">
                <span className="px-2 py-2px text-xs bg-lightblue text-darkblue inline-block align-middle rounded-full mx-1">
                  Custom
                </span>
                <span className="px-2 py-2px text-xs bg-lightgreen text-darkgreen inline-block align-middle rounded-full mx-1">
                  Active
                </span>
              </li>
            </ul>
            <ul className="flex flex-wrap list-unstyled pt-9">
              <li className="w-2/3 pr-3 flex gap-2">
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">Users</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    100+ Users
                  </p>
                </div>
                <div className="w-1/2">
                  <p className="text-gray-dark text-sm plan-edited">End Date</p>
                  <p className="text-main-heading text-sm font-medium plan-title">
                    mm/dd/yyyy
                  </p>
                </div>
              </li>
              <li className="w-1/3 text-right text-xl text-mediumblue font-medium">
                £1299
              </li>
            </ul>
          </div>
        </div> */}
        {/* ======================= */}
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
                {selectedPlan?.name}
              </div>
              plan?
            </div>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setOpenDelete(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Dialog fullWidth={true} maxWidth="md" open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-4 py-4 border-b relative">
            <div className="flex justify-start items-center px-0">
              <span className="bg-white border w-11 h-11 flex justify-center items-center text-gray-dark rounded-full">
                <SettingsOutlinedIcon />
              </span>
              <div className="pl-4">
                <h2 className="text-main-heading text-lg font-medium">
                  Update Plan
                </h2>
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
          <DialogContent>
            <div>
              <div>
                <div>Plan Name</div>
                <div>
                  <input
                    className={`shadow appearance-none border rounded-[10px] w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.planName ? "border-[#F04438]" : ""
                    }`}
                    id="planName"
                    type="text"
                    placeholder="Enter your Plan"
                    {...register("planName")}
                  />
                  {errors?.planName && (
                    <p className="text-red-500 text-sm mt-2">
                      {String(errors.planName.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>Price</div>
                <div>
                  <input
                    className={`shadow appearance-none border rounded-[10px] w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.price ? "border-[#F04438]" : ""
                    }`}
                    id="price"
                    type="number"
                    placeholder="Enter your Plan"
                    {...register("price")}
                  />
                  {errors?.price && (
                    <p className="text-red-500 text-sm mt-2">
                      {String(errors.price.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>Start Date</div>
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
                    <p className="text-red-500 text-sm mt-2">
                      {String(errors.startDate.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>
                  <div>End Date</div>
                  <DatePicker
                    minDate={
                      (startDate && dayjs(startDate).add(1, "day")) || undefined
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
                    <p className="text-red-500 text-sm mt-2">
                      {String(errors.endDate.message)}
                    </p>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <div>Employees</div>
                <div>
                  <input
                    className={`shadow appearance-none border rounded-[10px] w-full py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.employees ? "border-[#F04438]" : ""
                    }`}
                    id="employees"
                    type="number"
                    placeholder="Enter your Plan"
                    {...register("employees")}
                  />
                  {errors?.employees && (
                    <p className="text-red-500 text-sm mt-2">
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
          </DialogContent>
          <DialogActions>
            <button
              className="m-2 w-full px-4 py-2 rounded-md hover:bg-gray-200 text-red-600"
              onClick={handleClose}
            >
              Discard
            </button>
            <button
              className="m-2 w-full px-4 py-2 rounded-md hover:bg-gray-200 mr-2 text-blue-800"
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

export default ManagePlans;
