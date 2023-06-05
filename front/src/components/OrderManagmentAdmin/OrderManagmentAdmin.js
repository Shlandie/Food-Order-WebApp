import { useState } from "react";
import { useEffect } from "react";

function OrderManagmentAdmin() {

    const [orders, setOrders] = useState([]);


    // Get All Orders
    const getData = async () => {
        const response = await fetch("http://localhost:5000/order");
        const data = await response.json();
        console.log(data);
        setOrders(data.data.allOrderItems.reverse());
    };

    useEffect(() => {
        getData();
    }, []);

    // Handle Order Deletion

    const handleDelete = (itemID) => {
        fetch(`http://localhost:5000/order/${itemID}`,
            {
                method: "DELETE",
            }
        )
    }


    return (
        <>
            <div className='orderItemsAdmin'>
                {orders && orders.map((item, index) => (

                    <div className='orderItem' key={item.id}>
                        <h2>Order 123123123681276378126387126</h2>
                        <h5>{item.dishes.join(", ")}</h5>
                        <div>{item.full_amount}</div>
                        <button onClick={(e) => {
                            handleDelete(item._id);
                            const copy = [...orders];
                            copy.splice(index, 1);
                            setOrders(copy);
                        }}>Complete Order</button>
                        {/* <button>Delete Order</button> */}
                    </div>

                ))}
            </div>
        </>
    );
}

export default OrderManagmentAdmin;