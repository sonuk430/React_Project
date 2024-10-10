import "./multiStemForm.css";

import UserForm from "./Components/UserForm";
import { multiStapFormData } from "./multiStemFormData";

const MultiStemForm = () => {
  return (
    <>
      <div className="wrapperScreen">
        <UserForm multiStapFormData={multiStapFormData} />
      </div>
    </>
  );
};

export default MultiStemForm;
