import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext({
    toggleDarkMode: false,
    ToggleTheme: () => { }
});

const Layout = ({ children }) => {
    const [toggleDarkMode, setToggleDarkMode] = useState(true);

    const ToggleTheme = () => {
        setToggleDarkMode(prev => !prev);
    };

    const contextValue = useMemo(() => ({
        toggleDarkMode, ToggleTheme
    }), [toggleDarkMode]);

    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    );
}

export default Layout;

export const useAppContext = () => {
    return useContext(AppContext);
};