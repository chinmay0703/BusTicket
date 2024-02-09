import React from 'react';
import Nav from '../routes/Nav';
import { Link } from 'react-router-dom';
import "../components/Home.css"
function Home() {
    const search = () => {

    }
    return (
        <div>
            <Nav />

            <div className='bodyu'>
                <h1 className='fo'><b>Bus Tickets</b></h1>
                <form >
                    <div class="row">
                        <label for="city">From</label>
                        <input type="text" name="from" autocomplete="off" placeholder="Enter city" />
                    </div>
                    <div class="row">
                        <label for="city">to</label>
                        <input type="text" name="to " placeholder='Enter city' />
                    </div>
                    <div class="row">
                        <label for="date">to</label>
                        <input type="date" name="to " placeholder='Enter city' />
                    </div>
                    <Link to={"/buslist"}>  <button className='btn btn-danger w-100' onClick={search}>Search Buses</button></Link>
                </form>
            </div>
        </div>
    );
}

export default Home;
