import React, { useState } from 'react';
import './react.css';
// import './Control-Form.css''
import Popup from './Popup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';


function Form({ Submit , error }) {

    const validationSchema = Yup.object().shape({
        fname: Yup.string()
            .required('First Name is required'),
        lname: Yup.string()
            .required('Last Name is required'),
        fathername: Yup.string()
            .required('Father Name is required'),
        mothername: Yup.string()
            .required('Mother Name is required'),    
        dob: Yup.string()
            .required('Date of Birth is required')
            .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'Date of Birth must be a valid date in the format YYYY-MM-DD'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid')
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }

    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
    setIsOpen(!isOpen);
  }

    const [details, setDetails] = useState({fname: "", lname: "", email: "", fathername:"", mothername: "", age: "", dob: "", courses: "", uploadfile: "", currentstatus: ""});

    const submitHandler = e => {
        e.preventDefault();

        Submit(details);
    }

    return (
        <div className="container">
        <form onSubmit={handleSubmit(onSubmit),togglePopup}>
            <div className="form-inner">
                <h1 align="center">Register Form</h1>
                <h4>Personal Details</h4>
                <div className="form-group">
                    <span htmlFor="fname">First Name:</span>
                    <input type="text" name="fname" id="fname" placeholder="Enter your First Name" onChange={e => setDetails({...details, fname: e.target.value})} value={details.fname} ref={register} className={`form-demo ${errors.fname ? 'is-invalid' : ''}`} required/></div>
                    
                    <div className="form-group">
                    <span htmlFor="fname">Last Name:</span>
                    <input type="text" name="lname" id="lname" placeholder="Enter your Last Name"onChange={e => setDetails({...details, lname: e.target.value})} value={details.lname} ref={register} className={`form-demo ${errors.lname ? 'is-invalid' : ''}`} required/>
                </div>
                <div className="form-group">
                    <span htmlFor="fathername">Father Name:</span>
                    <input type="text" name="fathername" id="fathername" placeholder="Enter your Father Name" onChange={e => setDetails({...details, fathername: e.target.value})} value={details.fathername} ref={register} className={`form-demo ${errors.fathername ? 'is-invalid' : ''}`} required/>
                </div>
                <div className="form-group">
                    <span htmlFor="mothername">Mother Name:</span>
                    <input type="text" name="mothername" id="mothername" placeholder="Enter your Mother Name" onChange={e => setDetails({...details, mothername: e.target.value})} value={details.mothername} ref={register} className={`form-demo ${errors.mothername ? 'is-invalid' : ''}`} required/>
                </div>
                </div>
                <div className="form-group1">
                        <span htmlFor="age">Age:</span>
                        <input type="number" name="age" id="age" placeholder="Enter your Age" onChange={e => setDetails({...details, age: e.target.value})} value={details.age} required/>
                    </div>
                    <div className="form-group1">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input type="date" name="dob" id="dob" placeholder="dd/mm/yyyy" onfocus="(this.type='date')"onChange={e => setDetails({...details, dob: e.target.value})} value={details.dob} ref={register} className={`form-demo ${errors.dob ? 'is-invalid' : ''}`} required/>
                </div>
                <div className="form-group1">
                    required<label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Enter your Email-Id" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} ref={register} className={`form-demo ${errors.email ? 'is-invalid' : ''}`} required/>
                </div>
                <div className="form-group1">
                   <label>Language Known: </label> 
                   <div className="check-group">
                    <input className="language" type="checkbox" value="" id="flexCheckDefault" onChange={e => setDetails({...details, language: e.target.value})} value={details.language} required/>
                    <label class="form-check-label" for="flexCheckDefault">
                    required  Hindi
                    </label>
                    <input className="language" type="checkbox" value="" id="flexCheckChecked" onChange={e => setDetails({...details, language2: e.target.value})} value={details.language2} checked required/>
                    <label class="form-check-label" for="flexCheckChecked">
                        English
                    </label>
                    <input className="language" type="checkbox" value="" id="flexCheckDefault" onChange={e => setDetails({...details, language3: e.target.value})} value={details.language3} required/>
                    <label class="form-check-label" for="flexCheckDefault">
                      Tamil
                    </label>
                    </div>
                </div>
                <div className="form-group1">
                    <label>Location: </label>
                    <select className="form-select" aria-label="Default select example" >
                        <option selected>Open this select menu</option>
                        <option value="1">Chennai</option>
                        <option value="2">Bangalore</option>
                        <option value="3">Hyderabad</option>
                    </select>
                </div>
                <div className="form-group1">
                    <label>Gender: </label>
                    <div className="check-group">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" required/>
                        <label class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" required/>
                        <label class="form-check-label" for="flexRadioDefault2">
                            Female
                        </label>
                        </div>
                    </div>
                <div className="form-group">
                <div className="desc">
                 <label>Description: </label><br />
                        <textarea className="inner-desc" placeholder="write about your idea" required/>
                </div>
                </div>
            
        
            <div className="col2">
            <h4>Education Details</h4>
            <div className="form-group">
            <span htmlFor="edu">Education:</span>
            <select class="form-select" aria-label="Default select example" >
                  <option selected>Open this select menu</option>
                        <option value="1">Doctrate/PhD</option><br />
                        <option value="2">Master/Post Graduate</option><br />
                        <option value="3">Bachelor/Under Graduate</option><br />
                        <option value="4">12th</option><br />
                        <option value="5">10th</option><br />
            </select>
            </div>
            <div>
                <span htmlFor="courses">Courses:</span>
                <input type="text" name="courses" id="courses" placeholder="Enter your Your Courses" onChange={e => setDetails({...details, courses: e.target.value})} value={details.courses}  required/>
            </div>
            </div>
            <div className="form-group1">
                 <span htmlFor="uploadfile">Upload File:</span>
                 <div className="check-group">
                  <input type="file" name="uploadfile" id="uploadfile" 
                  onChange={e => setDetails({...details, uploadfile: e.target.value})} value={details.uploadfile}  required/>
                </div>
            </div>
        <input type="submit" value="SUBMIT" />{ isOpen && <Popup
                    content={<>
                    Thanks for yor Registration!!!
                  </>}
                  handleClose={togglePopup}
                  />}
            
            
        </form>
        </div>
    )
}
export default Form;