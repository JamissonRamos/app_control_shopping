import * as S from "./styled"
import { TextC } from "../../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Adicionar compras </TextC.Title>
            <TextC.Body level={1}> Vamos registrar mais uma compra no sistema. </TextC.Body>
        </S.Container>
    ) 
}

export default Header