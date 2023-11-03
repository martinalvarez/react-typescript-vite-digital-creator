import { ReactNode, useState } from "react";
import LayoutContext from "./LayoutContext";

function LayoutProvider({ children }: {children: ReactNode}) {
    const [ layout, setLayout ] = useState('light');
    
    function toggleLayout() {
        const newLayout = layout === 'light' ? 'dark' : 'light';
        setLayout(newLayout);
    }

    return(
        <LayoutContext.Provider value={{ layout, toggleLayout }}>
            { children }
        </LayoutContext.Provider>
    );
}

export default LayoutProvider;