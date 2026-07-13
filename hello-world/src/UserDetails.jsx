export const UserDetails = ({ name , isOnline }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Status: {isOnline}</p>
        </div>
    )
}