import { createContext } from "react";

interface LayoutContextType {
    layout: string;
    toggleLayout: ()=> void;
}

const LayoutContext = createContext<LayoutContextType>({
    layout: 'light',
    toggleLayout: ()=> {},
});

export default LayoutContext;