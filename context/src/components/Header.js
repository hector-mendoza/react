const Header = ({ theme, handleTheme, handleLanguage, texts }) => {
    return (
        <header className={theme}>
            <h2>{texts.headerTitle}</h2>
            <h3>{texts.headerSubtitle}</h3>
            <div>
                <select name="language" onChange={handleLanguage}>
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <div>
                <input type="radio" name="theme" id="light"
                    onClick={handleTheme} value="light" />
                <label htmlFor="light">{texts.headerLight}</label>
                <input type="radio" name="theme" id="dark"
                    onClick={handleTheme} value="dark" />
                <label htmlFor="dark">{texts.headerDark}</label>
            </div>
            <button>{texts.buttonLogin}</button>
            <button>{texts.buttonLogout}</button>
        </header>
    );
}

export default Header;