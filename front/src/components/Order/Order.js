import React, { useState } from 'react';
import { useEffect } from 'react';



import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Offcanvas from 'react-bootstrap/Offcanvas'
// import OffCanvasExample from "./parts/offCanvasCart";

function Order() {

    // Menu items
    const [menu, setMenu] = useState([]);
    const [menuFilter, setMenuFilter] = useState("Main");
    // Order List

    const [orderItem, setOrderItem] = useState({});
    const [order, setOrder] = useState([]);

    // Offcanvas
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitOrder = () => {
        fetch("http://localhost:5000/order",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(order)
            })
    }

    const getData = async (menuFilter) => {
        const response = await fetch(`http://localhost:5000/menu/${menuFilter}`);
        const data = await response.json();
        // console.log(data);
        setMenu(data.data.allMenuItems.reverse());
    };
    useEffect(() => {
        console.log(order);
        getData(menuFilter);
    }, [menuFilter]);

    useEffect(() => {


        if (Object.keys(orderItem).length !== 0) {
            console.log(orderItem);
            setOrder(order => [...order, orderItem]);
        }
    }, [orderItem])

    useEffect(() => {

    }, [order])

    return (
        <>

            <Button className="cartButton" variant="primary" onClick={handleShow}>
                My Order
            </Button>

            <Offcanvas show={show} placement="end" onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className="offcanvasHeader">Your Order</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {order && order.map((item, index) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <label for="amount">Amount:</label>
                            {/* <input type="number" name="amount" value="1" min="0" required></input> */}
                            <h6>{item.price}</h6>
                            <button onClick={(e) => {
                                const copy = [...order];
                                copy.splice(index, 1);
                                console.log(copy);
                                setOrder(copy);
                            }}>Delete Item</button>
                        </div>
                    ))}
                    <div>
                        <button onClick={(e) => submitOrder()}>Submit Order</button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div className='buttonNavigation'>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Main")}>Main</button>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Desert")} > Deserts</button>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Drink")} > Drinks</button >
            </div >

            <div className='orderItems'>
                {menu && menu.map((item) => (

                    <div className='orderItem' key={item.id}>
                        <img src="" alt="Pancakes" />
                        <h4>{item.name}</h4>
                        <p>{item.description}</p>
                        {/* <input type="number" defaultValue="1" min="1" max="99"></input> */}
                        <button onClick={(e) => {
                            setOrderItem({
                                name: item.name,
                                price: item.price
                            })
                            console.log("works")
                        }}
                        >Add to order</button>
                    </div >

                ))}

            </div >
        </>
    );

}


export default Order;