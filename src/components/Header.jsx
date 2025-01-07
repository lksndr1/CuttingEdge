import Button from "./Button/Button"

export default function Header() {
    return (
        <header>
            <a href="/">
                <img className='header-logo' src="/public/logo.jpg" alt="CE-logo" />
            </a>
            <Button>Calculator</Button>
            <Button>Tools library</Button>
            <Button>Home</Button>
            <Button>Home</Button>
        </header>
    )
}