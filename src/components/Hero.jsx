import Button from "./Button/Button"

export default function CalculatorSection() {
    function handleClick() {
        console.log('click')
    }

    return (
        <section>
            <h1>Learn more about the importance of correct cutting parameters</h1>
            <Button onClick={handleClick}>Learn more...</Button>
        </section>
    )
}