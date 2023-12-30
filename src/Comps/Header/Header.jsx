import './Header.css';

const Header = () => {
    const handleMenuClick = () => {
        const menuBtn = document.querySelector('.menu-btn');
        menuBtn.classList.toggle('active');
        console.log('Menu button clicked');
        const menu = document.querySelector('.menu');
        menu.classList.toggle('active');
    };

    return (
        <div>
            <header>
                <img src="/assets/Logo.png" alt="Logo" />
                <button className="menu-btn" onClick={handleMenuClick}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </header>
        </div>
    );
}

export default Header;
