export const CustomButton = () => {
    const handleClick = (e) => { // e is the event object
        alert('Thanks for clicking')
        console.log(e.target)
        console.log(e.button)
    }

    return (
        <button onClick={handleClick}>Click</button>
    )
}