import React from 'react';
import './signuppharm.css'
function Signuppharma() {
  return (
    <>

      <div className='back'>
        <form>
          <section class="h-50   ">
            <div class="container py-1  h-50">
              <div class="row d-flex justify-content-center align-items-center h-50">
                <div class="col">
                  <div class="card card-registration my-5">
                    <div class="row g-0">
                      <div class="col-xl-5 d-none d-xl-block">
                        <div class="img-fluid"></div>
                      </div>
                      <div class="col-xl-7">
                        <div class="card-body  text-light">
                          <h2 class="mb-5 text-uppercase">Pharmacy registration form</h2>
                          <div class="row ">
                            <div class="col-md-6 mb-2">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m">First name</label>
                                <input type="text" id="form3Example1m" class="form-control form-control-lg" />
                              </div>
                            </div>
                            <div class="col-md-6 mb-2">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1n">Last name</label>
                                <input type="text" id="form3Example1n" class="form-control form-control-lg" />
                              </div>
                            </div>
                          </div>

                          <div class="row">
                            <div class=" mb-2">
                              <div class="form-outline">
                                <label class="form-label" for="form3Example1m1">Email id</label>
                                <input type="email" id="form3Example1m1" class="form-control form-control-lg" />
                              </div>
                            </div>

                            <div class="form-outline mb-2">
                              <label class="form-label" for="form3Example9">DOB</label>
                              <input type="Date" id="form3Example9" class="form-control form-control-lg" />
                            </div>

                            <div className='col-md-6'>
                              <div class="mb-2">
                                <div class="form-outline " >
                                  <label class="form-label" for="form3Example1n1">Password</label>
                                  <input type="password" placeholder='********' id="form3Example1n1" class="form-control form-control-lg" />
                                </div>
                              </div>
                            </div>
                            <div class="form-outline col-md-6 mb-2">
                              <label class="form-label" for="form3Example8">Confirm Password</label>
                              <input type="text" placeholder='********' id="form3Example8" class="form-control form-control-lg" />
                            </div>
                            <div class="form-outline mb-4">
                              <label class="form-label" for="form3Example90">Contact no</label>
                              <input type="Number" placeholder='03xxxxxxxx' id="form3Example90" class="form-control form-control-lg" />
                            </div>
                          </div>
                            <h6 class="mb-1 me-5">Select Gender: </h6>
                          <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">


                            <div class="form-check form-check-inline mb-0 me-5">
                              <input class="form-check-input1 me-3" type="radio" name="inlineRadioOptions" id="femaleGender"
                                value="option1" />
                              <label class="form-check-label " for="femaleGender">Female</label>
                            </div>

                            <div class="form-check form-check-inline mb-0 me-5">
                              <input class="form-check-input1 me-3" type="radio" name="inlineRadioOptions" id="maleGender"
                                value="option2" />
                              <label class="form-check-label " for="maleGender">Male</label>
                            </div>

                            <div class="form-check form-check-inline mb-0">
                              <input class="form-check-input1 me-3" type="radio" name="inlineRadioOptions" id="otherGender"
                                value="option3" />
                              <label class="form-check-label" for="otherGender">other</label>
                            </div>

                          </div>

                          <div class="d-flex justify-content-end ">
                            <button type="button" class="btn btn-light btn-lg w-25 me-3" >Reset all</button>
                            <button type="button" class="btn btn-primary btn-lg">Submit form</button>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>

    </>
  )
}

export default Signuppharma