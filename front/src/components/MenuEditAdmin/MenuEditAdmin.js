import React, { useState } from 'react';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

function MenuEditAdmin() {

    const [menu, SetMenu] = useState("Main");

    const changeMenu = (e) => {

    }


    return (
        <>
            <div className='buttonNavigation'>
                <button className='buttonNavigation__button'>Main</button>
                <button className='buttonNavigation__button'>Deserts</button>
                <button className='buttonNavigation__button'>Drinks</button>
            </div>

            <div className='orderItems'>
                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>

                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>

                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>

                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>

                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>

                <div className='orderItem'>
                    <img src="" alt="Pancakes" />
                    <h4>Pancakes</h4>
                    <p>Double glazed with butter, mega packed with juicy jam
                        with a monster load of whipping cream. 4 of these in 1 serving!
                    </p>
                    <input type="number"></input>
                    <button>Add to order</button>
                </div>
            </div>
        </>
    );

}


export default MenuEditAdmin;