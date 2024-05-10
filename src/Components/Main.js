import React from 'react'
import { NavLink } from 'react-router-dom'
// bootstrap css for responcive desing
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Main({ data }) {


    return (
        <>
            <section class="py-4  container " >
                <div class="row py-2">
                    <div class=" col-lg-6 col-lg-10 mx-auto">
                        <div class="maincontainer  row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div class="col p-4 d-flex flex-column position-static">
                                <h3 class="mb-4"> Mission Name -  {data.mission_name}</h3>
                                <h3 class="mb-4"> Flight NO -  {data.flight_number}</h3>
                                <div class="mb-4 "> Launch Date - {data.launch_date_local} </div>
                                <p class="card-text mb-auto"> {data.details}</p>
                                <p className='mb-4'>
                                    <NavLink to={`/details/${data.flight_number}`}>
                                        <button className=' btn my-2' > Details</button>
                                    </NavLink>
                                </p>
                            </div>
                            <div class="col-auto d-none d-lg-block">
                                <img src={data.links.mission_patch_small} class="bd-placeholder-img" width="350" height="330" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           
        </>
    )
}
