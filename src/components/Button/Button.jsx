import './Button.css'

export default function Button({ children }) {
    function handleClick() {
        console.log('click')
    }

    return (
        <button className='button' onClick={handleClick}>{children}</button>
    )
}