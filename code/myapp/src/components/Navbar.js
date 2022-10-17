import React from 'react'

function Navbar() {
  return (
    <>
      <navbar>
                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class=" navbar-brand" href="#" ></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>

                    </div>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul class="navbar-nav">
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
    </>
  )
}

export default Navbar