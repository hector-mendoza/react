const Main = ({ theme, texts, auth }) => {
    return (
        <main className={theme}>
            <p>
                {
                    auth ? texts.mainWelcome : texts.mainHello
                }
            </p>
            <p>{texts.mainContent}</p>
        </main>
    );
}

export default Main;