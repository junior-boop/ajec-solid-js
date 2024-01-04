import { createStore } from 'solid-js/store'

export default function Store(){
    const [store, setStore] = createStore({})

    return {store, setStore}
}