import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Successmod from "../../../Component/Modals/successmod";
import MyForm from "../../../Component/formComponent";
import { genderOptions } from "../../../utils/constants";
import parseKey from "../../../utils/formatersAndParsers";
import { Link } from "react-router-dom";
import { handleApiRequest } from "../../../services/handleApiRequest";
import { getProfile, updateProfile } from "../../../redux/profile/thunk";
import validateForm from "../../../utils/formValidator";
import UpdatePassword from "../../../Component/Modals/updatePassword";
import { successMsg } from "../../../utils/toastMessage";

const profileFields = [
  { value: "name", type: "text" },
  { value: "email", type: "email" },
  { value: "phone_number", type: "phone" },
  { value: "passport_number", type: "text" },
  { value: "date_of_birth", type: "date" },
  { value: "gender", type: "select", options: genderOptions },
  {
    value: "is_newsletter_subscribe",
    type: "checkbox",
    label: "Subscribe Newsletter",
  },
];

const ProfileEdit = ({ userProfile, setUserProfile }) => {
  const [errors, setErrors] = useState({});
  const [editProfile, setEditProfile] = useState({
    ...userProfile,
    edit: false,
  });
  const [updatePassword, setUpdatePassword] = useState(false);
  const [successPop, setSuccessPop] = useState(false);

  const handleProfile = async () => {
    const response = await handleApiRequest(getProfile);
    if (response) {
      setUserProfile(response.data || {});
    }
  };

  const handleUpdateProfile = async () => {
    const testFields = {};
    profileFields.map((item) => {
      if (item.value !== "is_newsletter_subscribe") {
        testFields[item.value] = "";
      }
    });
    const formError = validateForm(editProfile, testFields);

    if (formError) {
      setErrors(formError);
      return;
    } else {
      setErrors({});
    }

    let request = {};
    for (let entry of Object.entries(editProfile || {})) {
      if (typeof entry[1] === "object" && entry[1]?.label && entry[1]?.value) {
        request[entry[0]] = entry[1].value;
      } else {
        request[entry[0]] = entry[1];
      }
    }

    request.file = "123";
    request.phone_number = request.phone_number.slice(
      request.country_code?.length
    );
    request.country_code = request.country_code?.startsWith("+")
      ? request.country_code
      : `+${request.country_code}`;
    request.is_newsletter_subscribe = request.is_newsletter_subscribe || "N";

    const response = await handleApiRequest(updateProfile, request);
    if (response) {
      setEditProfile((prev) => ({ ...prev, edit: false }));
      handleProfile();
      successMsg("Profile updated!!");
    }
  };

  const handleUpdatePassword = async () => {
    setUpdatePassword(false);
    setSuccessPop(true);
  };

  useEffect(() => {
    setEditProfile((prev) => ({
      ...prev,
      ...userProfile,
      phone_number: userProfile.country_code + userProfile.phone_number || "",
      gender: userProfile.gender
        ? {
            value: userProfile.gender,
            label: parseKey(userProfile.gender),
          }
        : "",
    }));
  }, [userProfile]);

  return (
    <>
      <section className="profile_edit_section text-start">
        <MyForm
          valueState={{
            ...editProfile,
          }}
          setValueState={setEditProfile}
          errors={errors}
          formFields={profileFields}
          disableFields={!editProfile.edit}
        />

        <Link to="" onClick={() => setUpdatePassword(true)}>
          Update Password
        </Link>
        <div>
          {!editProfile.edit ? (
            <Button
              className="btn_common w-50 mx-auto"
              onClick={() =>
                setEditProfile((prev) => ({ ...prev, edit: true }))
              }
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              className="btn_common w-50 mx-auto"
              onClick={() => handleUpdateProfile()}
            >
              Update Profile
            </Button>
          )}
        </div>
      </section>

      {updatePassword && (
        <UpdatePassword
          show={updatePassword}
          onHide={() => setUpdatePassword(false)}
          onSubmit={handleUpdatePassword}
        />
      )}
      <Successmod show={successPop} onhide={() => setSuccessPop(false)} />
    </>
  );
};

export default ProfileEdit;
