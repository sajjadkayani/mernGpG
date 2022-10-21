import React from 'react'
import { Link } from 'react-router-dom'
import './form.css'


function Form() {
    return (
        <main >
            <section >
                <div id='maindiv' className='m-auto d-flex justify-content-center align-items-center '>
                    <div id='Logcard' className='m-5 p-5'>
                        <form className='text-light'>
                            <div >
                                <h1> login to Account</h1>
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label mt-5 h4">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label h4">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                <Link to="Forgetpass"  href='/'>forget password </Link>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg w-50 d-block m-auto " id='submit'>Submit</button> <br/>
                            <Link to="Selectuser" type="submit" class="btn btn-danger btn-lg w-50 d-block m-auto " id='submit'>SignUP/Register</Link>
                            

                        </form>
                    </div>
                </div>
            </section>

          
        </main>
    )
}

export default Form