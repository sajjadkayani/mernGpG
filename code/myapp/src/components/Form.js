import React from 'react'
import './form.css'

function Form() {
    return (
        <>
            <navbar>
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <a class=" navbar-brand" href="#" ></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                     <div>
                        
                     </div>
                    <div class="collapse navbar-collapse justify-content-end   " id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item ">
                                <a class="nav-link text-dark " href="#"> <h4>Home</h4> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#"><h4>Link</h4></a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link " href="#"><h4>Disabled</h4></a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </navbar>

            <section >
                <div id='maindiv' className='m-auto'>
                    <div id='Logcard' className=' m-5 p-5'>
                        <form className='text-light'>
                            <div >
                                <h1> login to Account</h1>Login
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text text-light">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" />
                                <a href='www.google.com'>forget password </a>
                            </div>
                           
                            <button type="submit" class="btn btn-primary btn-lg w-75 " id='submit'>Submit</button><br/>
                            <a href='www.google.com'>SignUp / Register new account </a>
                           
                        </form>
                    </div>
                </div>
            </section>

            <footer class="bg-dark text-center text-lg-start text-light">

                <div class="container p-4">
                    <div class="row">

                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Footer text</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Footer text</h5>

                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                                aliquam voluptatem veniam, est atque cumque eum delectus sint!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                    © 2020 Copyright:
                    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                </div>

            </footer>

        </>
    )
}

export default Form