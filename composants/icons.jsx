export function FlecheLeft(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M20 6L10 16l10 10" /></svg>
    )
}
export function FlecheRight(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="m12 26l10-10L12 6"/></svg>
    )
}
export function InfosIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><g fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 14h1v9h1m12-7a13 13 0 1 1-26 0a13 13 0 0 1 26 0Z"/><path fill="currentColor" d="M17 9.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/></g></svg>
    )
}
export function ModifIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M27 5L17 15m0-10H8a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-9"/></svg>
    )
}
export function DeleteIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 23L23 9m0 14L9 9"/></svg>
    )
}
export function AddIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 25V7m-9 9h18"/></svg>
    )
}
export function LabelIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 19l5.5-5.5M13 22l2.5-2.5M4.414 16.586l11-11A2 2 0 0 1 16.828 5H25a2 2 0 0 1 2 2v8.172a2 2 0 0 1-.586 1.414l-11 11a2 2 0 0 1-2.828 0l-8.172-8.172a2 2 0 0 1 0-2.828Z"/><path fill="currentColor" d="M23 10a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z"/></g></svg>
    )
}
export function PlayIcon(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 24.414V7.586c0-1.746 2.081-2.653 3.36-1.465l9.062 8.413a2 2 0 0 1 0 2.932l-9.061 8.413C13.08 27.067 11 26.16 11 24.414Z"/></svg>
    )
}

/**
 * 
 * @param {JSX.IntrinsicElements['svg']} props 
 * @param {string} key 
 * @returns {JSX.Element}
 */
export function MdiCartMinus(props, key) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props} key={key}><path fill="currentColor" d="M16 6V4H8v2M7 18c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-9.8-3.2v-.1l.9-1.7h7.4c.7 0 1.4-.4 1.7-1l3.9-7l-1.7-1l-3.9 7h-7L4.3 2H1v2h2l3.6 7.6L5.2 14c-.1.3-.2.6-.2 1c0 1.1.9 2 2 2h12v-2H7.4c-.1 0-.2-.1-.2-.2"></path></svg>
    )
  }



  export function MdiBasket(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M5.5 21c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10a1 1 0 0 1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22a1 1 0 0 1 1 1l-.04.29l-2.67 9.61c-.33.65-1.01 1.1-1.79 1.1zM12 4.74L9 9h6zM12 13a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></path></svg>
    )
  }

  
export function MdiBasketPlus(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M20 15v3h3v2h-3v3h-2v-3h-3v-2h3v-3zm3-5l-.04.29L22 13.8a6.005 6.005 0 0 0-9 5.2c0 .7.13 1.37.35 2H5.5c-.78 0-1.46-.45-1.79-1.1L1.1 10.44L1 10c0-.55.45-1 1-1h4.58l4.6-6.57a.997.997 0 0 1 1.65.01L17.42 9H22c.55 0 1 .45 1 1m-9 5c0-1.1-.89-2-2-2s-2 .9-2 2s.9 2 2 2s2-.89 2-2m1-6l-3-4.26L9 9z"></path></svg>
    )
  }