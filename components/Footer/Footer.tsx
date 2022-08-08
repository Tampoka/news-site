import {Center} from "../Center"
import {Container} from "./styles"

export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <Container>
            <Center>
                <a href="https://github.com/Tampoka" target="_blank"
                   rel="noopener noreferrer">Tampoka</a> {currentYear}
            </Center>
        </Container>
    )
}