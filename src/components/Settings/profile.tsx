import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../services/slices/dashboard/getUser";
import { updateProfile } from "../../services/slices/dashboard/updateProfile";
import toast from "react-hot-toast";

const Profile = () => {
  const user = localStorage.getItem("user");
  const userData = useSelector((state: any) => state.getUser.data);
  console.log("-------------", userData);
  const dispatch: any = useDispatch();
  console.log(user);
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
    <div className="flex">
      <div className="w-[400px] flex flex-col justify-center items-center pt-10 border-r-2">
        <div className="rounded-full border-4 border-gray-400 bg-white mb-6">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="rounded-full"
              height={128}
              width={128}
            />
          ) : (
            <img
              src="/assets/images/avatarpic.jpg"
              alt="Profile"
              className="rounded-full"
              height={128}
              width={128}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xs mb-2">
            Click below to change your profile picture
          </div>
          <input
            type="file"
            onChange={handleChangeProfilePic}
            accept="image/*"
            className="bg-gray-200 mx-6 w-72"
          />
        </div>
        <div className="mt-4 text-xl">{firstName + " " + lastName}</div>
        <div className="mt-4 text-xl">{userData?.email}</div>
      </div>
      <div className="w-full items-center">
        <div className="flex justify-center mb-6 text-3xl font-semibold">
          Profile Settings
        </div>
        <div className="flex w-full justify-around">
          <div className="flex flex-col">
            <div>First Name</div>
            <input
              className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
              id="current_password"
              type={"text"}
              placeholder="John"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setIsDisabled(false);
              }}
            />
            <div className="mt-6 flex flex-col">
              <div className="">Phone No</div>
              <input
                className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
                id="current_password"
                type={"number"}
                placeholder="9002033010"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  setIsDisabled(false);
                }}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div>Last Name</div>
            <input
              className={`shadow appearance-none border border-slate-300 rounded w-full py-2 pl-2 text-input-text leading-tight focus:outline-none focus:shadow-outline`}
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
        <div className="flex justify-center mt-4 gap-x-6">
          <button
            disabled={isDisabled}
            onClick={handleReset}
            className="rounded bg-red-700 hover:bg-red-900 py-2 px-4 text-white font-semibold disabled:bg-gray-400"
          >
            Discard
          </button>
          <button
            disabled={isDisabled}
            onClick={saveProfile}
            className="rounded bg-purple-700 hover:bg-purple-900 py-2 px-4 text-white font-semibold disabled:bg-gray-400"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
