import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import './Selectuser.css'


function Selectuser() {
    
    const navigate = useNavigate();
    const handleonclick =()=>{
    navigate("/pharmasignup");
    }
    return (
        <>
        <div className='signup'>
            <div className='signupopt d-flex justify-content-center align-items-center  '>
                <div className='signcard  "d-flex justify-content-center'>
                    <div class="form-check d-flex m-5">
                        <input onClick={handleonclick} class="form-check-input me-5 " type="radio" name="flexRadioDefault" id="flexRadioDefault1"/> 
                        <label class="form-check-label " for="flexRadioDefault1">
                            <h2> Sign in as Pharmacy </h2>
                        </label>
                    </div>
                    <div class="form-check d-flex m-5 ">
                        <input class=" form-check-input me-5 " type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            <h2> Sign in as Doctor </h2>
                        </label>
                    </div>
                    <div> 
                    <Link to="/" type="submit" class="btn btn-primary btn-lg w-50 d-block m-auto " id='submit'>login</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Selectuser