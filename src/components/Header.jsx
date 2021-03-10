import logo from '../assets/logo.png'

function Header() {
    return (
        <header className="mg-header">
            <img 
                src={logo} 
                alt="meme portlet"
            />
            <p>Awesome Meme Portlet!</p>
        </header>
    )
}

export default Header