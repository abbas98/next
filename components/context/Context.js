import { createContext, useContext } from "react";

const userContext = createContext()
export function useUser() {
    return useContext(userContext)
}