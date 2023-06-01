import { useState } from "react";
import { useEffect } from "react";


function MenuEditAdmin() {

    const [menu, setMenu] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [itemCreate, setItemCreate] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        setItemCreate(itemCreate => ({ ...itemCreate, name: name, description: description, price: price }));
        setName("");
        setDescription("");
        setPrice(0);
    }

    useEffect(() => {
        if (itemCreate.length !== 0) {
            setMenu(menu => [itemCreate, ...menu]);

            fetch("http://localhost:5000/menu",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(itemCreate)
                }
            )
        }
    }, [itemCreate])

    const getData = async () => {
        const response = await fetch("http://localhost:5000/menu");
        const data = await response.json();
        // console.log(data);
        setMenu(data.data.allMenuItems.reverse());
    };
    useEffect(() => {
        getData();
    }, []);

    // useEffect(() => {
    //     fetch("http://localhost:5000/menu")
    //         .then(res => {
    //             return res.json();
    //         })
    //         .then(data => {
    //             setMenu(data.allMenuItems);
    //         })
    // }, [])


    // useEffect(() => {
    //     fetch("https://localhost:5000/menu",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify(menu)
    //         }
    //     )
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
                <input type="number" value={price} required step="0.01" min="0"
                    onChange={(e) => setPrice(e.target.value)}
                ></input>

                <button>Create Menu Item</button>
            </form >

            <div className='orderItems'>
                {menu && menu.map((item) => (
                    <div className='orderItem' key={item.id}>
                        <img src="" alt="Pancakes" />
                        <h4>{item.name}</h4>
                        <p>
                            {item.description}
                        </p>
                        <h6>{item.price} Eur</h6>
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