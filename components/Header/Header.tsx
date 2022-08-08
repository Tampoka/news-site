import Link from "next/link"
import {Logo, Container} from './styles';
import {Center} from '../Center'

export const Header = () => {
    return (
        <Container>
            <Center>
                <Logo>
                    <Link href="/">
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <a>Nextニュース!</a>
                    </Link>
                </Logo>
            </Center>
        </Container>
    )
}