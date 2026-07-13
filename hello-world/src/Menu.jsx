import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const handleOrder = (itemName, ItemPrice) => {
        alert(`You ordered ${itemName} for ${ItemPrice}`)
    }

    return (
        <div>
            <h2>Our Menu</h2>
            <MenuItem name="Pizza" price={230} onOrder={handleOrder} />
            <MenuItem name="Burger" price={200} onOrder={handleOrder} />
            <MenuItem name="Creep" price={100} onOrder={handleOrder} />
        </div>
    )
}