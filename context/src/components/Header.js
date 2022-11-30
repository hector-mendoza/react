const Header = ({ theme, handleTheme }) => {
    return (
        <header className={theme}>
            <h2>App without Context API</h2>
            <h3>Header Content</h3>
            <div>
                <select name="language">
                    <option value="es">ES</option>
                    <option value="en">EN</option>
                </select>
            </div>
            <div>
                <input type="radio" name="theme" id="light"
                    onClick={handleTheme} value="light" />
                <label htmlFor="light">Light Theme</label>
                <input type="radio" name="theme" id="dark"
                    onClick={handleTheme} value="dark" />
                <label htmlFor="dark">Dark Theme</label>
            </div>
            <button>Start Session</button>
        </header>
    );
}

export default Header;