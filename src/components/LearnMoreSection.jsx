import ImportantFeatures from "./ImportantFeatures"
import { features } from '../data'

export default function LearnMoreSection() {
    return (
        <section>
            <h3>Why cutting parameters in machinning are important</h3>

            <ul>
                {features.map((feature) => {
                    return (
                        <ImportantFeatures key={feature.title} {...feature} />
                    )
                })}
            </ul>
        </section >
    )
}