import { useState } from 'react';
import WrappedRegistrationForm from './component/aftervalid.js';
import Form from './component/react.jsx';
import Validation from './component/validation';
import validation from './component/validation';

function App() {

  
  const [user, setUser] = useState({fname: "", lname: "", email: ""});
  const [error, setError] = useState("");

  const Submit = details => {
    console.log(details);

    if (details == " ") {
      console.log("Details cannot identify");
    }
    else{
      console.log("Logged in");
    }
  }

  return (
    <div>
        {(user.email != "") ? (
          <div className="welcome">
            <h2>WelCome, <span>{user.name}</span></h2>
            <h5>Successfully Registered!</h5>
          </div>
        ) : (<Form />)}
        <WrappedRegistrationForm />
    </div>
  );
}

export default App;
