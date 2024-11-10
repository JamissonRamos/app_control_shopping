import { Button } from "react-bootstrap"
import { TextC } from "../../components/Typography"
import { Theme } from "../../theme"
import * as S from './styled'

const Splash = () => {
    return (
        <S.Container>
            <S.Header>
                <img src={Theme.ImgC.House} alt="construção de uma casa" />
            </S.Header>

            <S.Body>
                <TextC.Display level={3} > Bem-vindo! </TextC.Display>
                <TextC.Display level={1} > Sistema de Controle de Compras </TextC.Display>
            </S.Body>
            
            <S.Footer>
                <Button
                    variant="outline-success"
                >
                    <TextC.Label level={3}>  Vamos Começar! </TextC.Label>
                    <Theme.Icons.MdOutlineArrowForwardIos />
                </Button>
                

            </S.Footer>

        </S.Container>

    )
}

export default Splash