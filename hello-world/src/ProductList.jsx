export const ProductList = () => {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 500
        },
        {
            id: 2,
            name: "IPhone",
            price: 450
        },
        {
            id: 3,
            name: "TV",
            price: 600
        }
    ]

    const cheapProductElements = products
    .filter((product) => {
        return product.price < 2000
    })
    .map((product) => {
        return (
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
            </div>
        )
    })

    return (
        <>
            <h2>Our Products</h2>
            {cheapProductElements}
        </>
    )
}