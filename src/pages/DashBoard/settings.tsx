// import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import ReceiptIcon from "@mui/icons-material/Receipt";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import LockIcon from "@mui/icons-material/Lock";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useNavigate, useParams } from "react-router-dom";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
import ChangePassword from "../../components/Settings/changePassword";
import PrivacySecurity from "../../components/Settings/privacySecurity";
import DeleteAccount from "../../components/Settings/deleteAccount";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDispatch } from "react-redux";
import { changePassword } from "../../services/slices/dashboard/changePassword";
import toast from "react-hot-toast";
import Profile from "../../components/Settings/profile";

const tabs = [
  {
    name: "Profile",
    img: (
      <img src="../../../public/assets/images/profile-tab-icon.svg" alt="" />
    ),
  },
  {
    name: "Manage Subcription",
    img: (
      <img
        src="../../../public/assets/images/subscription-tab-icon.svg"
        alt=""
      />
    ),
  },
  {
    name: "Invoice History",
    img: (
      <img src="../../../public/assets/images/invoice-tabs-icon.svg" alt="" />
    ),
  },
  {
    name: "Notification Settings",
    img: (
      <img src="../../../public/assets/images/setting-tabs-icon.svg" alt="" />
    ),
  },
  {
    name: "Privacy & Security",
    img: (
      <img src="../../../public/assets/images/privacy-tabs-icon.svg" alt="" />
    ),
  },
];

const menueList = [
  {
    name: "Change Password",
    icon: <LockIcon />,
  },
  {
    name: "2FA Security",
    icon: <SecurityIcon />,
  },
  {
    name: "Delete Account",
    icon: <DeleteOutlineIcon />,
  },
];

const schemaFirst = yup.object().shape({
  current_password: yup
    .string()
    .required("Current Password is required")
    .min(8, "Password must be atleast 8 characters long"),
  new_password: yup
    .string()
    .required("Password is required")
    .notOneOf(
      [yup.ref("current_password")],
      "New password must be different from current password"
    )
    .matches(/^[^\s]*$/, "Password must not contain spaces")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .min(8, "Password must be atleast 8 characters long"),
  confirm_password: yup
    .string()
    .required("Confirm Password is required")
    .test(
      "password-match",
      "Confirm password must match password",
      function (value) {
        // Get the password value from the parent form object
        const { new_password } = this.parent;

        // Check if confirmPassword matches password
        return value === new_password;
      }
    ),
});

const schemaSecond = yup.object().shape({
  method: yup.string().required("Please select a way to enable 2FA"),
});

const schemaThird = yup.object().shape({
  passwordDelete: yup
    .string()
    .required("Current Password is required")
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*[0-9])/, "Password must contain at least one number")
    .min(8, "Password must be atleast 8 characters long"),
});

interface FormData {
  current_password: string;
  new_password: string;
  confirm_password: string;
  method: string;
  passwordDelete: string;
}

const defaultValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
  method: "",
  passwordDelete: "",
};

const Settings = () => {
  const dispatch: any = useDispatch();
  const [selected, setSelected] = useState("Change Password");
  const { tab }: any = useParams();
  const navigate: any = useNavigate();
  const tabIndexMap: any = {
    profile: 0,
    "manage-subcription": 1,
    "invoice-history": 2,
    "notification-settings": 3,
    "privacy-security": 4,
  };

  const initialSelectedTab =
    tabIndexMap[tab] !== undefined ? tabIndexMap[tab] : 0;

  const [selectedTab, setSelectedTab] = useState(initialSelectedTab);

  const handleChange = (_event: any, newValue: any) => {
    setSelectedTab(newValue);
    const tabName = Object.keys(tabIndexMap).find(
      (key: any) => tabIndexMap[key] === newValue
    );
    if (tabName) {
      navigate(`/settings/${tabName}`);
    }
  };

  const schemas = () => {
    if (selectedTab === 0) {
    } else if (selectedTab === 1) {
    } else if (selectedTab === 2) {
    } else if (selectedTab === 3) {
    } else if (selectedTab === 4) {
      if (selected === "Change Password") {
        return yupResolver(schemaFirst);
      } else if (selected === "2FA Security") {
        return yupResolver(schemaSecond);
      } else if (selected === "Delete Account") {
        return yupResolver(schemaThird);
      }
    }
  };

  const {
    register,
    handleSubmit,
    // reset,
    setValue,
    formState: { errors },
  } = useForm<FormData | any>({
    resolver: schemas(),
    defaultValues,
  });

  const onSubmit: any = (data: FormData) => {
    toast.dismiss();
    try {
      if (selectedTab === 4 && selected === "Change Password") {
        dispatch(changePassword(data))
          .unwrap()
          .then((res: any) => {
            try {
              res.message
                ? toast.success(res.message)
                : res.error && toast.error(res.error);
            } catch (err: any) {
              // toast.error(err);
            }
          });
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <div className="bg-white md:px-8 md:pb-6 px-4 pb-4 min-h-vhcalc135px">
      <div className="border-t">
        <div className=" bg-white">
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            className="border-b settings-tabs"
          >
            {tabs.map((tab, index) => (
              <Tab
                sx={{ paddingY: 0 }}
                key={index}
                label={tab.name}
                icon={tab.img}
                iconPosition="start"
                className={`!normal-case !text-sm !min-h-48px !font-medium  ${selectedTab === index ? "!text-main-heading" : "!text-gray-dark image-color-changed"}`}
              />
            ))}
          </Tabs>

          <div className="pt-8">
            {tab === "profile" && <Profile />}
            {tab === "privacy-security" && (
              <div className="flex flex-wrap">
                <div className="md:max-w-258px w-full">
                  <Card
                    variant="outlined"
                    className="p-10px flex flex-col justify-between"
                    style={{ borderRadius: "12px" }}
                  >
                    <div className="font-semibold px-2 mb-2">Select Menu</div>
                    <div>
                      {menueList.map((item, index) => (
                        <button
                          key={index}
                          className={`flex w-full justify-between items-center gap-8 p-2 mb-2 hover:bg-lightgray rounded-lg ${
                            selected === item.name ? "bg-lightgray" : ""
                          }`}
                          onClick={() => setSelected(item.name)}
                        >
                          <div className="flex gap-2">
                            {item.icon}
                            {item.name}
                          </div>
                          <div className="">
                            <KeyboardArrowRightIcon
                              className={`!h-5 !w-5 !bg-white !rounded-full !shadow ${
                                selected === item.name ? "!block" : "!hidden"
                              }`}
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="md:max-w-calc258px w-full md:px-4">
                  {selected === "Change Password" && (
                    <ChangePassword
                      handleSubmit={handleSubmit}
                      onSubmit={onSubmit}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                    />
                  )}
                  {selected === "2FA Security" && (
                    <PrivacySecurity
                      handleSubmit={handleSubmit}
                      onSubmit={onSubmit}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                    />
                  )}
                  {selected === "Delete Account" && (
                    <DeleteAccount
                      handleSubmit={handleSubmit}
                      onSubmit={onSubmit}
                      register={register}
                      errors={errors}
                      setValue={setValue}
                    />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
