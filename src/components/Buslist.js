import React from 'react'
import Nav from '../routes/Nav'
import "../components/Buslist.css"
import Footer from '../routes/Footer'
function Buslist() {
  return (
    <div>
        <Nav></Nav>
        <div className="container col-sm-6 align-item-center bkody">
    <div className="row">
        <div className="col-sm-6">
            <div className="theatre">
                <div className="screen-side">
                    <div className="screen">  
                    </div>
                    
                </div>
               
                {/* <img src="https://cdn4.iconfinder.com/data/icons/automotive-glyph/64/automotive_vehicle-18-512.png"/> */}
         
                <ol className="cabin">
                    <li className="row row--1">
                        <ol class="seats" type="A">
                            <li class="seat">
                                {/* <input type="checkbox" id="1A" /> */}
                                {/* <label for="1A">01</label> */}
                            </li>
                            <li class="seat">
                                {/* <input type="checkbox" id="1B" /> */}
                                {/* <label for="1B">02</label> */}
                            </li>
                            <li class="seat">
                                {/* <input type="checkbox" id="1E" /> */}
                                {/* <label for="1E">03</label> */}
                            </li>
                            <li class="seat">
                                {/* <input type="checkbox" id="1F" /> */}
                                <img src="https://cdn4.iconfinder.com/data/icons/automotive-glyph/64/automotive_vehicle-18-512.png"/>
         
                            </li>
                        </ol>
                    </li>
                    <li className="row row--1">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="1A" />
                                <label for="1A">01</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="1B" />
                                <label for="1B">02</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="1E" />
                                <label for="1E">03</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="1F" />
                                <label for="1F">04</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--2">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="2A" />
                                <label for="2A">05</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="2B" />
                                <label for="2B">06</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="2C" />
                                <label for="2C">07</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" disabled id="2D" />
                                <label for="2D">08</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--3">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="3A" />
                                <label for="3A">09</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="3B" />
                                <label for="3B">10</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="3C" />
                                <label for="3C">11</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="3D" />
                                <label for="3D">12</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--4">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="4A" />
                                <label for="4A">13</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="4B" />
                                <label for="4B">14</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="4C" />
                                <label for="4C">15</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="4D" />
                                <label for="4D">16</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--5">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="5A" />
                                <label for="5A">17</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="5B" />
                                <label for="5B">18</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="5C" />
                                <label for="5C">19</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="5D" />
                                <label for="5D">20</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--6">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="6A" />
                                <label for="6A">21</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="6B" />
                                <label for="6B">22</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="6C" />
                                <label for="6C">23</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="6D" />
                                <label for="6D">24</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--7">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="7A" />
                                <label for="7A">25</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="7B" />
                                <label for="7B">26</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="7C" />
                                <label for="7C">27</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="7D" />
                                <label for="7D">28</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--8">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="8A" />
                                <label for="8A">29</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="8B" />
                                <label for="8B">30</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="8C" />
                                <label for="8C">31</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="8D" />
                                <label for="8D">32</label>
                            </li>
                        </ol>
                    </li>
                    <li class="row row--9">
                        <ol class="seats" type="A">
                            <li class="seat">
                                <input type="checkbox" id="9A" />
                                <label for="9A">33</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="9B" />
                                <label for="9B">34</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="9C" />
                                <label for="9C">35</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="9D" />
                                <label for="9D">36</label>
                            </li>
                            <li class="seat">
                                <input type="checkbox" id="9E" />
                                <label for="9E">9E</label>
                            </li>
                        </ol>
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>

{/* <div class="theatre">
    <div class="screen-side">
        <div class="screen"></div>
        <div class="row">
            <div class="col-sm-8">
            </div>
            <div class="col-sm-4">
                <img class=''
                    src="https://cdn4.iconfinder.com/data/icons/automotive-glyph/64/automotive_vehicle-18-512.png"/>
            </div>
        </div>
    </div>
    <ol class="cabin">
        <li class="row row--1">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="1A" />
                    <label for="1A">01</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="1B" />
                    <label for="1B">02</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="1E" />
                    <label for="1E">03</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="1F" />
                    <label for="1F">04</label>
                </li>
            </ol>
        </li>
        <li class="row row--2">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="2A" />
                    <label for="2A">05</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="2B" />
                    <label for="2B">06</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="2C" />
                    <label for="2C">07</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="2D" />
                    <label for="2D">08</label>
                </li>
            </ol>
        </li>
        <li class="row row--3">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="3A" />
                    <label for="3A">09</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="3B" />
                    <label for="3B">10</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="3C" />
                    <label for="3C">11</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="3D" />
                    <label for="3D">12</label>
                </li>
            </ol>
        </li>
        <li class="row row--4">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="4A" />
                    <label for="4A">13</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="4B" />
                    <label for="4B">14</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="4C" />
                    <label for="4C">15</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="4D" />
                    <label for="4D">16</label>
                </li>
            </ol>
        </li>
        <li class="row row--5">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="5A" />
                    <label for="5A">17</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="5B" />
                    <label for="5B">18</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="5C" />
                    <label for="5C">19</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="5D" />
                    <label for="5D">20</label>
                </li>
            </ol>
        </li>
        <li class="row row--6">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="6A" />
                    <label for="6A">21</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="6B" />
                    <label for="6B">22</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="6C" />
                    <label for="6C">23</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="6D" />
                    <label for="6D">24</label>
                </li>
            </ol>
        </li>
        <li class="row row--7">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="7A" />
                    <label for="7A">25</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="7B" />
                    <label for="7B">26</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="7C" />
                    <label for="7C">27</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="7D" />
                    <label for="7D">28</label>
                </li>
            </ol>
        </li>
        <li class="row row--8">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="8A" />
                    <label for="8A">29</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="8B" />
                    <label for="8B">30</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="8C" />
                    <label for="8C">31</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="8D" />
                    <label for="8D">32</label>
                </li>
            </ol>
        </li>
        <li class="row row--9">
            <ol class="seats" type="A">
                <li class="seat">
                    <input type="checkbox" id="9A" />
                    <label for="9A">33</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="9B" />
                    <label for="9B">34</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="9C" />
                    <label for="9C">35</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="9D" />
                    <label for="9D">36</label>
                </li>
                <li class="seat">
                    <input type="checkbox" id="9E" />
                    <label for="9E">9E</label>
                </li>
            </ol>
        </li>
    </ol>
</div>  */}

        <Footer></Footer>
    </div>
  )
}

export default Buslist