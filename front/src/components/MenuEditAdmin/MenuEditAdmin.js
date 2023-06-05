import { useState } from "react";
import { useEffect } from "react";


function MenuEditAdmin() {

    const [menu, setMenu] = useState([]);
    const [menuFilter, setMenuFilter] = useState("Main");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Main");
    const [price, setPrice] = useState("");

    const [itemCreate, setItemCreate] = useState("");



    const handleSubmit = async (e) => {
        e.preventDefault();
        setItemCreate(itemCreate => ({ ...itemCreate, name: name, description: description, category: category, price: price }));
        setName("");
        setDescription("");
        setCategory("Main");
        setPrice(0);
    }


    // GET Menu items

    const getData = async (menuFilter) => {
        const response = await fetch(`http://localhost:5000/menu/${menuFilter}`);
        const data = await response.json();
        // console.log(data);
        setMenu(data.data.allMenuItems.reverse());
    };
    useEffect(() => {
        getData(menuFilter);
    }, [menuFilter]);

    //    POST item
    useEffect(() => {
        if (itemCreate.length !== 0) {
            if (itemCreate.category === menuFilter) {
                setMenu(menu => [itemCreate, ...menu]);
            }
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

    // Handle Order DELETE

    const handleDelete = (itemID) => {
        console.log(itemID);
        fetch(`http://localhost:5000/menu/${itemID}`,
            {
                method: "DELETE",
            }
        )
    }

    return (
        <>

            <div className='buttonNavigation'>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Main")}>Main</button>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Desert")} > Deserts</button>
                <button className='buttonNavigation__button' onClick={(e) => setMenuFilter("Drink")} > Drinks</button >
            </div >

            <form className="menuAddForm" onSubmit={handleSubmit}>

                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Food Name" value={name} required
                    onChange={(e) => setName(e.target.value)}
                ></input>


                <label for="description">Description:</label>
                <textarea name="description" placeholder="List of ingredients and the dishes characteristics" value={description} required
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label>Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Main">Main</option>
                    <option value="Desert">Desert</option>
                    <option value="Drink">Drink</option>
                </select>

                <label for="price">Single Unit Price:</label>
                <input type="number" value={price} required step="0.01" min="0"
                    onChange={(e) => setPrice(e.target.value)}
                ></input>

                <button>Create Menu Item</button>
            </form >

            <div className='orderItems'>
                {menu && menu.map((item, index) => (
                    <div className='orderItem' key={item.id}>
                        <img src="" alt="Pancakes" />
                        <h4>{item.name}</h4>
                        <p>
                            {item.description}
                        </p>
                        <h6>{item.price} Eur</h6>
                        <button onClick={(e) => {
                            handleDelete(item._id);
                            const copy = [...menu];
                            copy.splice(index, 1);
                            setMenu(copy);
                        }}>Delete Menu Item</button>
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