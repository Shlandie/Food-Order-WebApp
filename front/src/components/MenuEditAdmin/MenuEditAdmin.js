import { useState } from "react";
import { useEffect } from "react";


function MenuEditAdmin() {

    const [menu, setMenu] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [toggle, setToggle] = useState(false);

    const [itemCreate, setItemCreate] = useState({
        // name: "",
        // description: "",
        // price: 0
    });



    const handleSubmit = async (e) => {
        e.preventDefault();
        setItemCreate(itemCreate => ({ ...itemCreate, name: name, description: description, price: price }));
        setName("");
        setDescription("");
        setPrice(0);
    }

    useEffect(() => {
        setMenu(menu => [...menu, itemCreate]);
    }, [itemCreate])

    // useEffect(() => {
    //     fetch("https://localhost:5000/menu")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setMenu(data);
    //         })
    // }, [])

    // useEffect(() => {
    //     fetch("https://localhost:5000/menu",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content Type": "application/json"
    //             },
    //             body: JSON.stringify(menu)
    //         }
    //     )
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             SetMenu(data);
    //         })
    // }, [menu])
    return (
        <>
            <form className="menuAddForm" onSubmit={handleSubmit}>
                {/* <label for="picture">Picture:</label>
        <input type="file" required></input> */}

                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Food Name" value={name} required
                    onChange={(e) => setName(e.target.value)}
                ></input>


                <label for="description">Description:</label>
                <textarea name="description" placeholder="List of ingredients and the dishes characteristics" value={description} required
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label for="price">Single Unit Price:</label>
                <input type="number" value={price} required min="0"
                    onChange={(e) => setPrice(e.target.value)}
                ></input>

                <button>Create Menu Item</button>
            </form >

            <div className='orderItems'>
                {menu.map((item) => (
                    <div className='orderItem' key={item.id}>
                        <img src="" alt="Pancakes" />
                        <h4>{item.name}</h4>
                        <p>
                            {item.description}
                        </p>
                        <h6>{item.price}</h6>
                    </div>
                ))}
            </div>
            {/* <div className='orderItems'>
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
            </div> */}
        </>
    );
}

export default MenuEditAdmin;