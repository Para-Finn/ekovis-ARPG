const UserDetails = ({user}) => {
    return (
        <div>
            <h3>{user.username} {user.role}</h3>
            <h5>{user.currency}</h5>
        </div>
    )
}

export default UserDetails