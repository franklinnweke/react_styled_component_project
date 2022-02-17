import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { StyledFooter } from "./styles/Footer.styled"


export default function Footer() {
    return (
        <StyledFooter>
            <Container>
                <img src="./images/logo_white.svg" alt="" />
            

            <Flex>
                <ul>
                    <li>
                        lorem ipsum sdklnbv siohgvnkn vnifsngvon snbvfknh,
                    jhfsgvusbsnbjfdruj,
                    sjufjubbjsh vjhfxguh sugufybu7e4 fer tujeh8gu gusifhsin
                    sruigfs
                    </li>
                    <li>
                        +1-354-3546-464
                    </li>
                    <li>
                        contact@techhaven.com
                    </li>
                </ul>
                <ul>
                    <li>About Us</li>
                    <li>What we do</li>
                    <li>FAQ</li>
                </ul>
                <ul>
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                </ul>
                
            </Flex>
            <p>&copy; 2021 Techhaven. All rights reserved</p>
            </Container>
        </StyledFooter>
    )
}
