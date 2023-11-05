import Logo from '../images/logo.png';

function TopHeader() {
    return <nav className="level">
        <div className="logo level-item has-text-centered">
            <img src={Logo} />
        </div>
    </nav>
}
export default TopHeader