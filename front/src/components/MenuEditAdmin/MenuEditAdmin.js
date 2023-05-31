function MenuEditAdmin() {
    return (
        <>
            <form className="menuAddForm">
                {/* <label for="picture">Picture:</label>
        <input type="file" required></input> */}

                <label for="name">Name:</label>
                <input type="text" name="name" placeholder="Food Name" required></input>


                <label for="description">Description:</label>
                <textarea name="description" placeholder="List of ingredients and the dishes characteristics" required></textarea>

                <label for="price">Single Unit Price:</label>
                <input type="number" required min="0"></input>
            </form>

            <div className="menuItem">
                <span>1</span>

            </div>
        </>
    );
}

export default MenuEditAdmin;