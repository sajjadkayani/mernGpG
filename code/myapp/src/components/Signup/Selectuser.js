import React from 'react'
import './Selectuser.css'

function Selectuser() {
    return (
        <div className='signup'>
            <div className='signupopt d-flex  '>
                <div className='signcard m-auto'>
                    
                        <div class="form-check d-flex m-5">
                            <input class="form-check-input me-5 " type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
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
                    
                </div>
            </div>
        </div>
    )
}

export default Selectuser