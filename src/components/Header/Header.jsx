import imgLogo from "../../assets/logo.jpg"

export default function Header() {
    return (
        <header id="main-header">
            <div id="title">
                <img src={imgLogo} alt="a restaurant"/>
                <h1>Restuarant App</h1>
            </div>

            <nav>
                <button>Cart (0)</button>
            </nav>
        </header>
    )
}
