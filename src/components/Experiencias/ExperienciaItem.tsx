import { ItemContainer } from "./styles"

interface ExpericenciaProps {
    year: string;
    title: string;
    description: string;
    enterprise: string;
}

export default function ExperienciaItem({ year, title, description, enterprise }: ExpericenciaProps) {
    return (
        <ItemContainer data-aos='fade-up'>
            <div>
                <h1>{ year }</h1>
                <h2>{ title }</h2>
                <small>{ enterprise }</small>
                <p>{ description }</p>
            </div>
        </ItemContainer>
    )
}