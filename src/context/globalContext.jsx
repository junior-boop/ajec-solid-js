import { createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

const ContextGlobal = createContext()

export default function ContextGlobalProvide ({children}){

    const [routeState, setRouteState] = createStore({})

    const RouteState = {
        routeState, setRouteState
    }
    
    return(
        <ContextGlobal.Provider value={{RouteState}}>
            {children}
        </ContextGlobal.Provider>
    )
} 


/**
 * @returns {{RouteState : {routeState : {}, setRouteState : () => void}}}
 */
export function useContextGlobale() { return useContext(ContextGlobal)}