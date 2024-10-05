import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Profilehistory from "./profilehistory";
import { ReactComponent as InboxIcon } from "../../assets/icons/inbox.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as GridIcon } from "../../assets/icons/grid.svg";
import { ReactComponent as DocIcon } from "../../assets/icons/doc.svg";
import { handleApiRequest } from "../../services/handleApiRequest";
import { getProfile } from "../../redux/profile/thunk";
import ProfileEdit from "./components/Profile";

const Profile = () => {
  // const { userProfile } = useSelector((state) => state.profile);
  const [state, setState] = useState({ tab: "profile" });
  const [userProfile, setUserProfile] = useState({});

  const handleProfile = async () => {
    const response = await handleApiRequest(getProfile);
    if (response) {
      if (response.data?.email === "dummy@email.com") {
        setUserProfile({ ...response.data, email: "" } || {});
      } else {
        setUserProfile(response.data || {});
      }
    }
  };

  useEffect(() => {
    handleProfile();
  }, []);

  console.log("userProfile", userProfile);

  return (
    <section className="profile_sec">
      <Container>
        <div className="personalprofile_card posiiton-relative">
          <div className="cover_img">
            <img src={"/images/Coverimg.png"} alt="" className="img-fluid" />
          </div>

          <div className="profile_card_data">
            <div className="wrapping_content d-flex align-items-end justify-content-between">
              <div className="profileimg_section  d-flex align-items-end gap-3">
                <div className="profileimg">
                  <img
                    src={userProfile?.profile_image || "/images/avatar.png"}
                    alt="Profile image"
                    className="img-fluid"
                    onError={() =>
                      setUserProfile((prev) => ({
                        ...prev,
                        profile_image: "/images/avatar.png",
                      }))
                    }
                  />
                </div>
                <div className="profile_info text-start">
                  <h4>Welcome {userProfile?.name}</h4>

                  <div className="profile_sub_des d-flex align-items-center gap-3">
                    <p>
                      <InboxIcon /> {userProfile?.email}
                    </p>
                    <p>
                      <PhoneIcon /> {userProfile?.country_code} {userProfile?.phone_number}
                    </p>
                  </div>
                </div>
              </div>

              <div className="profile_tabbing_btn">
                <div className="tab-frame">
                  <div className="clearfix">
                    <input
                      type="radio"
                      name="tab"
                      id="profile"
                      checked={state.tab == "profile"}
                      onClick={() => setState({ tab: "profile" })}
                    />
                    <label for="profile">
                      <span className="me-2">
                        <GridIcon />
                      </span>{" "}
                      Profile
                    </label>

                    <input
                      type="radio"
                      name="tab"
                      id="history"
                      checked={state.tab == "history"}
                      onClick={() => setState({ tab: "history" })}
                    />
                    <label for="history">
                      <span className="me-2">
                        <DocIcon />
                      </span>{" "}
                      History
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {state.tab == "profile" && (
          <div className="profileedit">
            <ProfileEdit userProfile={userProfile} setUserProfile={setUserProfile} />
          </div>
        )}

        {state.tab == "history" && (
          <div className="profilehistory">
            <Profilehistory />
          </div>
        )}
      </Container>
    </section>
  );
};

export default Profile;
