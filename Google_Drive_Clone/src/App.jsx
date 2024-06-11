import { useEffect, useState } from "react";
import { auth, provider } from "./Components/firebase/firebase";
import HomeSceen from "./Screen/HomeSceen"
import WelcomePage from "./Screen/WelcomePage"


function App() {

  const [user, setUser] = useState(null);

  // this function for user login in app.
  const singnIn = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
      setUser(user)
      // console.log(user);
      localStorage.setItem("email", user.email)
    }).catch(error => {
      alert(error.massage);
    })
  }

  useEffect(() => {
    setUser(localStorage.getItem("email"))
  }, []);



  return (
    <>

      {
        user ? <HomeSceen user={user} /> : <WelcomePage singnIn={singnIn} />
      }


    </>
  )
}

export default App
