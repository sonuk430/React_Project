import { useEffect, useRef, useState } from "react";
import "./regForm.css";
const RegForm = () => {
  const [value, setValue] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);
  const [valid, setValid] = useState(false);

  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const handleNameChange = (e) => {
    setValue({ ...value, user_name: e.target.value });
  };
  const handleEmailChange = (e) => {
    setValue({ ...value, email: e.target.value });
  };
  const handlePasswordChange = (e) => {
    setValue({ ...value, password: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.user_name) {
      inputName.current.focus();
    } else if (!value.email) {
      inputEmail.current.focus();
    } else if (!value.password) {
      inputPassword.current.focus();
    }
    if (value.user_name && value.email && value.password) {
      setValid(true);
    }
    setSubmit(true);
  };

  return (
    <>
      <div className="regform">
        <h1>Registration</h1>
        {submit && valid ? (
          <h2>Welcome</h2>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                ref={inputName}
                placeholder="enter Your Name"
                value={value.user_name}
                onChange={handleNameChange}
              />
            </div>
            {submit && !value.user_name ? <span>Name is Required</span> : null}
            <div>
              <input
                type="email"
                ref={inputEmail}
                placeholder="Enter your Email"
                value={value.email}
                onChange={handleEmailChange}
              />
            </div>
            {submit && !value.email ? <span>Email is Required</span> : null}
            <div>
              <input
                type="password"
                ref={inputPassword}
                placeholder="Enter Your Password"
                value={value.password}
                onChange={handlePasswordChange}
              />
            </div>
            {submit && !value.password ? (
              <span>Password is Required</span>
            ) : null}

            <div>
              <button>Submit</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default RegForm;
