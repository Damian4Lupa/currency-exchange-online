import React from 'react';


const Header = () => {

    return (
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal">Currency exchange online</h5>
            <nav class="my-2 my-md-0 mr-md-3">
                <a class="p-2 text-dark" href="#">About Us</a>
                <a class="p-2 text-dark" href="#">Security policy</a>
                <a class="p-2 text-dark" href="#">Help</a>
                <a class="p-2 text-dark" href="#">Contact</a>

            </nav>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <div class="form-inline-append">
                    <button class="btn btn-outline-dark" type="submit">Search</button>
                </div>
            </form>

            <a class="btn btn-outline-primary" href="#">Sign up</a>
            <a class="btn btn-outline-primary" href="#">Registration</a>


        </div>


    )
}


export default Header