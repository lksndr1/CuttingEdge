import './Button.css'

export default function Button({ children, isActive, onClick }) {
    return (
        <button
            className={`button ${isActive ? 'active' : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}