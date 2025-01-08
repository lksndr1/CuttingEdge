import Button from "./Button/Button"

export default function TabsSection({ active, onChange }) {
    return (
        <section>
            <Button isActive={active === 'calculator'} onClick={() => onChange('calculator')}>Calculator</Button>
            <Button isActive={active === 'toollibrary'} onClick={() => onChange('toollibrary')}>Tools Library</Button>
            <Button isActive={active === 'hero'} onClick={() => onChange('hero')}>Home</Button>
        </section >
    )
}