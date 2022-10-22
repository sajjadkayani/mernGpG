import React from 'react'
import "./Forgetpass.css"

function Forgetpass() {

  return (
    <main className='d-flex justify-content-center' >
      <div className='cardpass'>
        <form className='text-light'>
          <div >
            <h1> login to Account</h1>
          </div>
          <div class="mb-3 ">
            <label for="exampleInputEmail1" class="form-label mt-5 h4">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-50 d-block m-auto " id='submit'>Submit</button> <br />
        </form>
      </div>

    </main>
  )
}

export default Forgetpass