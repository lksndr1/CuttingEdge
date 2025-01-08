import Button from "./Button/Button"

export default function Hero({ active, onChange }) {
    return (
        <section>
            <h1>Learn more about the importance of correct cutting parameters</h1>
            <Button isActive={active === 'learnmore'} onClick={() => onChange('learnmore')}>Learn more...</Button>
        </section>
    )
}