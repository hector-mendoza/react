const Main = ({ theme, texts }) => {
    return (
        <main className={theme}>
            <p>{texts.mainWelcome}</p>
            <p>{texts.mainHello}</p>
            <p>{texts.mainContent}</p>
        </main>
    );
}

export default Main;