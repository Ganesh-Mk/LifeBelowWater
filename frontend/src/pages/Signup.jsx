import React, { useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import axios from "axios";
import { InputText } from "primereact/inputtext";

function Signup() {
  const [visible, setVisible] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = () => {
    axios.defaults.withCredentials = true;
    axios
      .post("http://localhost:3000/signup", {
        userName,
        userEmail,
        userPassword,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <div className="signupContainer">
      <div className="card flex justify-content-center">
        <Button
        style={{height:'3vw', width:'8vw'}}
          className="custom-button"
          label="Signup"
          icon="pi pi-user"
          onClick={() => setVisible(true)}
        />
        <Dialog
          visible={visible}
          modal
          onHide={() => setVisible(false)}
          content={({ hide }) => (
            <div
              className="flex flex-column px-8 py-5 gap-4"
              style={{
                borderRadius: "12px",
                backgroundImage:
                  "radial-gradient(circle at left top, var(--primary-400), var(--primary-700))",
              }}
            >
              <h1 style={{ textAlign: "center", color: "white" }}>Sign up</h1>
              <div className="inline-flex flex-column gap-2">
                <label
                  htmlFor="username"
                  className="text-primary-50 font-semibold"
                >
                  Enter name
                </label>
                <InputText
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  label="Username"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                ></InputText>
              </div>
              <div className="inline-flex flex-column gap-2">
                <label
                  htmlFor="useremail"
                  className="text-primary-50 font-semibold"
                >
                  Enter email
                </label>
                <InputText
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  id="useremail"
                  label="Useremail"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                ></InputText>
              </div>
              <div className="inline-flex flex-column gap-2">
                <label
                  htmlFor="username"
                  className="text-primary-50 font-semibold"
                >
                  Enter password
                </label>
                <InputText
                  id="password"
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
                  label="Password"
                  className="bg-white-alpha-20 border-none p-3 text-primary-50"
                  type="password"
                ></InputText>
              </div>
              <div className="flex align-items-center gap-2">
                <Button
                  label="Submit"
                  onClick={handleSubmit}
                  text
                  className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                ></Button>
                <Button
                  label="Cancel"
                  onClick={(e) => hide(e)}
                  text
                  className="p-3 w-full text-primary-100 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                ></Button>
              </div>
            </div>
          )}
        ></Dialog>
      </div>
    </div>
  );
}

export default Signup;
