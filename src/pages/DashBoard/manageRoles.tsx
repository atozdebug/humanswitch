"use client";
import {
  Accordion,
  Button,
  Checkbox,
  Dropdown,
  Label,
  Modal,
} from "flowbite-react";
import { Tabs } from "flowbite-react";
import { Table } from "flowbite-react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoles,
  getRoles,
  updateRoles,
} from "../../services/slices/dashboard/roles";

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

const ManageRoles = () => {
  const data: any = useSelector((state: any) => state.role?.getData) || [];
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const [selectedRole, setSelectedRole] = useState<any>(null);
  const [openDelete, setOpenDelete] = useState(false);
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: yupResolver(schemaRole),
    defaultValues,
  });

  useEffect(() => {
    setValue("isActiveRole", selectedRole?.active);
    setValue("roleName", selectedRole?.name);
    setValue("editMember", selectedRole?.editMember);
    setValue("editCompanyDetails", selectedRole?.editCompanyDetails);
    setValue("editReport", selectedRole?.editReport);
    setValue("createMember", selectedRole?.createMember);
    setValue("createCompanyDetails", selectedRole?.createCompanyDetails);
    setValue("createReport", selectedRole?.createReport);
    setValue("deleteMember", selectedRole?.deleteMember);
    setValue("deleteCompanyDetails", selectedRole?.deleteCompanyDetails);
    setValue("deleteReport", selectedRole?.deleteReport);
  }, [selectedRole]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteRoles(selectedRole.id))
      .unwrap()
      .then(() => {
        setOpenDelete(false);
        dispatch(getRoles());
      });
  };

  const onSubmit = (data: FormData) => {
    dispatch(
      updateRoles({
        id: selectedRole?.id,
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
      .then(() => {
        setOpen(false);
        dispatch(getRoles());
        reset();
      });
  };

  return (
    <div className="content-right-inner min-h-vhcalc92px overflow-y-auto max-h-vhcalc92px lg:px-8 px-4 md:py-7 py-4 bg-lightgray">
      <Tabs
        aria-label="Default tabs"
        style="default"
        className="bg-transparent border-0 tabs-cs"
      >
        <Tabs.Item active title="ACTIVE (35)">
          <div className="bg-white py-5 rounded-[20px] px-7">
            <div className="overflow-x-auto min-h-50vh">
              <Table className="relative z-10">
                <Table.Head className="text-lightgray4">
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Status
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Role Type
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Members
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Permissions
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data?.active_roles?.map((item: any) => (
                    <Table.Row className="text-darkgray2 fw-medium">
                      <Table.Cell className="py-5 border-b pl-0">
                        {item.name}
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        {item.active ? "Active" : "In Active"}
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        Default
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        <a
                          href="#"
                          className="font-medium text-mediumgreen underline"
                        >
                          675
                        </a>
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        <a
                          href="#"
                          className="font-medium text-mediumblue underline"
                        >
                          View/Modify
                        </a>
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0 text-end">
                        <Dropdown
                          label=""
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <span className="inline-block cursor-pointer">
                              <MoreVertIcon />
                            </span>
                          )}
                          className="bg-white border-0 text-gray-dark"
                        >
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedRole(item);
                              setOpen(true);
                            }}
                            className="gap-2"
                          >
                            <EditIcon />
                            Update
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedRole(item);
                              setOpenDelete(true);
                            }}
                            className="gap-2"
                          >
                            <DeleteIcon />
                            Delete
                          </Dropdown.Item>
                        </Dropdown>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </Tabs.Item>
        <Tabs.Item title="INACTIVE">
          <div className="bg-white py-5 rounded-[20px] px-7">
            <div className="overflow-x-auto min-h-50vh">
              <Table className="relative z-10">
                <Table.Head className="text-lightgray4">
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Name
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Status
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Role Type
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Members
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold">
                    Permissions
                  </Table.HeadCell>
                  <Table.HeadCell className="pl-0 bg-transparent py-4 normal-case text-sm font-semibold"></Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                  {data?.inactive_roles?.map((item: any) => (
                    <Table.Row className="text-darkgray2 fw-medium">
                      <Table.Cell className="py-5 border-b pl-0">
                        {item.name}
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        {item.active ? "Active" : "In Active"}
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        Default
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        <a
                          href="#"
                          className="font-medium text-mediumgreen underline"
                        >
                          675
                        </a>
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0">
                        <a
                          href="#"
                          className="font-medium text-mediumblue underline"
                        >
                          View/Modify
                        </a>
                      </Table.Cell>
                      <Table.Cell className="py-5 border-b pl-0 text-end">
                        <Dropdown
                          label=""
                          dismissOnClick={false}
                          renderTrigger={() => (
                            <span className="inline-block cursor-pointer">
                              <MoreVertIcon />
                            </span>
                          )}
                          className="bg-white border-0 text-gray-dark"
                        >
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedRole(item);
                              setOpen(true);
                            }}
                            className="gap-2"
                          >
                            <EditIcon />
                            Update
                          </Dropdown.Item>
                          <Dropdown.Item
                            onClick={() => {
                              setSelectedRole(item);
                              setOpenDelete(true);
                            }}
                            className="gap-2"
                          >
                            <DeleteIcon />
                            Delete
                          </Dropdown.Item>
                        </Dropdown>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </div>
          </div>
        </Tabs.Item>
      </Tabs>
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
                {selectedRole?.name}
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
                  Update Role
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="flex gap-2 mb-17px">
                        <div className="flex h-5 items-center">
                          <Checkbox id="shipping" {...register("editMember")} />
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="shipping">Edit Member</Label>
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
                          <Label htmlFor="shipping">
                            Edit Company Details{" "}
                          </Label>
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
                          <Checkbox id="shipping" {...register("editReport")} />
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="shipping">Edit Report</Label>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="flex gap-2 mb-17px">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="shipping"
                            {...register("createMember")}
                          />
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="shipping">Create Member</Label>
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
                          <Label htmlFor="shipping">
                            Create Company Details{" "}
                          </Label>
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
                          <Label htmlFor="shipping">Create Report</Label>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="flex gap-2 mb-17px">
                        <div className="flex h-5 items-center">
                          <Checkbox
                            id="shipping"
                            {...register("deleteMember")}
                          />
                        </div>
                        <div className="flex flex-col">
                          <Label htmlFor="shipping">Delete Member</Label>
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
                          <Label htmlFor="shipping">
                            Delete Company Details{" "}
                          </Label>
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
                          <Label htmlFor="shipping">Delete Report</Label>
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

export default ManageRoles;
