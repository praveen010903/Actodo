function Header(props) {
    return (
        <div>
            <h1 className="text-2xl font-extrabold">Hello {props.username}</h1>
            <p>I help you manage youe activity!</p>
        </div>
    )
}
export default Header