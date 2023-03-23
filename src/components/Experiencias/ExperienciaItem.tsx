import { ItemContainer } from "./styles"

interface ExpericenciaProps {
    year: string;
    title: string;
    description: string;
}

export default function ExperienciaItem({ year, title, description }: ExpericenciaProps) {
    return (
        <ItemContainer data-aos='fade-up'>
            <div>
                <h1>{ year }</h1>
                <h2>{ title }</h2>
                <p>{ description }</p>
            </div>
        </ItemContainer>
    )
}