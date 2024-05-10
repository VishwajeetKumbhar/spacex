import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { showdata } from '../features/createSlice'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Table } from "react-bootstrap";

function MissionDetails() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    console.log("state", state)

    const { id } = useParams();
    console.log("id is ", id)

    const alluser = useSelector((state) => state.app.data)
    console.log(alluser)
    const singleuser = alluser.filter((ele) => ele.flight_number == id)
    console.log("singluser", singleuser)

    useEffect(() => {
        dispatch(showdata())
    }, [])
    return (
        <>
            <Card className='px-4 py-5 my-5 text-center' >
                <div className='w-100 text-center'>
                    <img className='w-10' src={singleuser[0].links.mission_patch_small} alt="" style={{ height: "600px", width: "600px" }} />
                </div>
                <Card.Body>
                    <h1> Mission Name : {singleuser[0].mission_name} </h1>
                    <Card.Text>
                        {singleuser[0].details}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item> launch_year : {singleuser[0].launch_year} </ListGroup.Item>
                </ListGroup>
            </Card>
            <div className='container text-center'>

                
                <h1> Summery </h1>
            </div>
            <Table striped bordered hover className='container mt-4 mb-4' >
                <thead>
                    <tr>
                        <th>Mission Name</th>
                        <th>Launch Year</th>
                        <th>Launch Date</th>
                        <th> Launch_date_utc</th>
                        <th>Tentative_max_precision</th>
                        <th>Upcoming</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        singleuser.map((item) =>
                            <tr>
                                <td> {item.mission_name} </td>
                                <td> {item.launch_year} </td>
                                <td> {item.launch_date_local} </td>
                                <td> {item.launch_date_utc} </td>
                                <td> {item.tentative_max_precision} </td>
                                <td> {item.upcoming} </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            <div className='container text-center'>
                <h1> Rocket Data </h1>
            </div>
            <Table striped bordered hover className='container mt-4 mb-4' >
                <thead>
                    <tr>
                        <th>Rocket_id</th>
                        <th>Rocket_name</th>
                        <th>Rocket_type</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        singleuser.map((item) =>
                            <tr>
                                <td> {item.rocket.rocket_id} </td>
                                <td> {item.rocket.rocket_name} </td>
                                <td> {item.rocket.rocket_type} </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


{/* Rocket first Stage details */}
            <div className='container text-center'>
                <h1> Rocket First Stage Data </h1>
            </div>
            <Table striped bordered hover className='container mt-4 mb-4' >
                <thead>
                    <tr>
                        <th>core_serial</th>
                        <th>flight</th>
                        <th>block</th>
                        <th>gridfins</th>
                        <th>landing_vehicle</th>
                        <th>landing_type</th>
                        <th>reused</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        singleuser.map((item) =>
                            <tr>
                                <td> {item.rocket.first_stage.cores.map(data => (
                                    <div>
                                        <td> {data.core_serial} </td>
                                        <td> {data.flight} </td>
                                        <td> {data.block} </td>
                                        <td> {data.gridfins} </td>
                                        <td> {data.landing_vehicle} </td>
                                        <td> {data.landing_type} </td>
                                        <td> {data.reused} </td>

                                    </div>
                                ))} </td>

                            </tr>
                        )
                    }
                </tbody>
            </Table>



{/* Launch site details */}
            <div className='container text-center'>
                <h1> Launch Site Details</h1>
            </div>
            <Table striped bordered hover className='container mt-4 mb-4' >
                <thead>
                    <tr>
                        <th>site_id</th>
                        <th>site_name</th>
                        <th>site_name_long</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        singleuser.map((item) =>
                            <tr>
                                <td> {item.launch_site.site_id} </td>
                                <td> {item.launch_site.site_name} </td>
                                <td> {item.launch_site.site_name_long} </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>

            {/* Second Stage Data */}
            <div className='container text-center'>
                <h1> Rocket First Stage Data </h1>
            </div>
            <Table striped bordered hover className='container mt-4 mb-4' >
                <thead>
                    <tr>
                        <th>payload_id</th>
                        <th>nationality</th>
                        <th>manufacturer</th>
                        <th>payload_type</th>
                        <th>payload_mass_kg</th>
                        <th>payload_mass_lbs</th>
                        <th>orbit</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        singleuser.map((item) =>

                            <tr> {item.rocket.second_stage.payloads.map(data => (
                                
                                    <td>
                                        <td> {data.payload_id} </td>
                                        <td> {data.nationality} </td>
                                        <td> {data.manufacturer} </td>
                                        <td> {data.payload_type} </td>
                                        <td> {data.payload_mass_kg} </td>
                                        <td> {data.payload_mass_lbs} </td>
                                        <td> {data.orbit} </td>
                                    </td>

                            ))} </tr>


                        )
                    }
                </tbody>
            </Table>

        </>

    )
}

export default MissionDetails