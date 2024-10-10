import { useState } from "react";
import "./userForm.css";

const UserForm = ({ multiStapFormData }) => {
  const [formIndex, setFormIndex] = useState(0);
  const [formuserData, setFormUserData] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
  });

  const [isFormSubmit, setIsFormSubmit] = useState(false);

  //   console.log(formuserData[multiStapFormData[formIndex].id]);

  //    *********************
  function handleFormSubmit(e) {
    e.preventDefault();
    if (formIndex === multiStapFormData.length - 1) {
      setIsFormSubmit(true);
    } else {
      setFormIndex((preIdx) => preIdx + 1);
    }
  }

  //    *********************
  function handleBack(e) {
    e.preventDefault();
    setFormIndex((preIdx) => preIdx - 1);
  }

  //    *********************

  function handleInputChange(e) {
    const id = e.target.id;
    const userValue = e.target.value;
    // console.log(id, userValue);
    const copyInitialData = { ...formuserData };
    copyInitialData[id] = userValue;

    setFormUserData(copyInitialData);
  }

  console.log(formuserData);

  return (
    <>
      <div className="FormContainer">
        {!isFormSubmit ? (
          <form onSubmit={handleFormSubmit}>
            {formIndex > 0 && (
              <a href="/" onClick={handleBack}>
                Back
              </a>
            )}
            <label>{multiStapFormData[formIndex].label}</label>
            <input
              required
              id={multiStapFormData[formIndex].id}
              value={formuserData[multiStapFormData[formIndex].id]}
              type={multiStapFormData[formIndex].inputType}
              placeholder={multiStapFormData[formIndex].placeholder}
              onChange={handleInputChange}
            />
            <button>{multiStapFormData[formIndex].buttonName}</button>
          </form>
        ) : (
          <div>
            <h2>Success !</h2>
            <span>{formuserData.name}</span>
            <br />
            <span>{formuserData.email}</span>
            <br />
            <span>{formuserData.dob}</span>
            <br />
            <span>{formuserData.password}</span>
            <br />
          </div>
        )}
      </div>
    </>
  );
};

export default UserForm;
