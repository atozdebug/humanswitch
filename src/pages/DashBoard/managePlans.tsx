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
import { Dialog, DialogActions, DialogContent, Switch } from "@mui/material";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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

  const [checked, setChecked] = useState(false);

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

  console.log(selectedPlan);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleClose = () => {
    setOpen(false);
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
    console.log("Plan", data);
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
                        setSelectedPlan(item);
                        setOpen(true);
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
        size="md"
        onClose={() => setOpenDelete(false)}
        popup
        position="center"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <div className="flex gap-1 mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete the{" "}
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
          <div className="px-4 pt-4">
            <div className="font-semibold text-xl">Update Plans</div>
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
