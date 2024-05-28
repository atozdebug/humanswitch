import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/slices/dashboard/getUser";
import { updateProfile } from "../../services/slices/dashboard/updateProfile";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

const Profile = () => {
  const user = localStorage.getItem("user");
  const userData = useSelector((state: any) => state.getUser.data);
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getUser(user))
      .unwrap()
      .then((res: any) => {
        setFirstName(res?.first_name);
        setLastName(res?.last_name);
        setPhoneNumber(res?.phone_no);
        setProfilePic(`data:image/jpeg;base64,${res.image}`);
        setIsDisabled(true);
      });
  }, [dispatch]);
  const [profilePic, setProfilePic] = useState<any>(null);
  const [firstName, setFirstName] = useState<any>("");
  const [lastName, setLastName] = useState<any>("");
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [sendImage, setSendImage] = useState(null);

  // Function to handle changing profile picture
  const handleChangeProfilePic = (event: any) => {
    const newProfilePic: any = event.target.files[0];
    setSendImage(newProfilePic);
    setProfilePic(URL.createObjectURL(newProfilePic));
    setIsDisabled(false);
  };

  const handleReset = () => {
    setFirstName(userData?.first_name);
    setLastName(userData?.last_name);
    setPhoneNumber(userData?.phone_no);
    setProfilePic(`data:image/jpeg;base64,${userData.image}`);
    setIsDisabled(true);
  };

  const saveProfile = () => {
    toast.dismiss();
    const formData: any = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("phone_no", phoneNumber);
    formData.append("image", sendImage);

    dispatch(updateProfile(formData))
      .unwrap()
      .then((res: any) => {
        toast.success(res.message);
        dispatch(getUser(user))
          .unwrap()
          .then(() => setIsDisabled(true));
      });
  };

  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap flex-col justify-center items-center md:border-r py-4 md:pr-4 w-full md:max-w-250px">
        <div className="rounded-full border bg-white mb-6 w-28 h-28">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <img
              src="/assets/images/avatarpic.jpg"
              alt="Profile"
              className="rounded-full"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs mb-2">
            Click below to change your profile picture
          </div>
          {/* <input
            type="file"
            onChange={handleChangeProfilePic}
            accept="image/*"
            className="hidden"
          /> */}
          <label
            htmlFor="uploadFile1"
            className="flex bg-blue-600 hover:bg-purple-700 text-white text-base px-5 py-2 outline-none rounded-[10px] cursor-pointer mx-auto font-[sans-serif]"
          >
            <input
              type="file"
              onChange={handleChangeProfilePic}
              accept="image/*"
              className="hidden"
              id="uploadFile1"
            />
            <span>Upload image</span>
          </label>
        </div>
        <div className="mt-4 text-xl">{firstName + " " + lastName}</div>
        <div className="mt-4 text-xl">{userData?.email}</div>
      </div>
      <div className="w-full items-center md:max-w-350px mx-auto pl-0">
        <div className="flex mb-6 text-2xl font-semibold">Profile Settings</div>
        <div className="w-full grid grid-cols-1 gap-4">
          <div className="grid-item">
            <div className="grid-item-inner">
              <label className="mb-1 block text-sm">First Name</label>
              <input
                className={`appearance-none border border-slate-300 rounded-[10px] w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="current_password"
                type={"text"}
                placeholder="John"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </div>
          </div>

          {/* =================================== */}
          <div className="grid-item">
            <div className="grid-item-inner">
              <label className="mb-1 block text-sm">Last Name</label>
              <input
                className={`appearance-none border border-slate-300 rounded-[10px] w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="current_password"
                type={"text"}
                placeholder="Adams"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </div>
          </div>
          {/* =================================== */}
          <div className="grid-item">
            <div className="grid-item-inner">
              <label className="mb-1 block text-sm">Phone No</label>
              <PhoneInput
                country={"us"}
                enableSearch={true}
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e);
                  setIsDisabled(false);
                }}
                placeholder="+1 (545) 674-3543"
                inputStyle={{
                  paddingTop: 7,
                  paddingBottom: 7,
                  width: "100%",
                  border: 0,
                  // boxShadow:
                  //   "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
                  color: "black",
                  background: "#fff",
                  borderRadius: "10px",
                }}
                buttonStyle={{
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                containerStyle={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "10px",
                  // boxShadow:
                  //   "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
                }}
                inputProps={{
                  id: "mobile",
                  name: "mobile",
                  required: true,
                }}
              />
            </div>
          </div>
          {/* =================================== */}
        </div>
        <div className="flex justify-center mt-4 gap-4">
          <button
            disabled={isDisabled}
            onClick={handleReset}
            className="w-full rounded-[10px] bg-white border hover:bg-red-500 hover:border-red-500 py-2 px-4 hover:text-white text-gray-dark font-medium disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-dark"
          >
            Discard
          </button>
          <button
            disabled={isDisabled}
            onClick={saveProfile}
            className="w-full rounded-[10px] bg-blue-600 border border-blue-600 hover:bg-purple-700 hover:border-purple-700 py-2 px-4 hover:text-white text-white font-medium disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-dark"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
