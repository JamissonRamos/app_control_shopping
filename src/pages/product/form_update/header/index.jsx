import * as S from "./styled"
import { TextC } from "../../../../components/Typography"

const Header = () => {
    return (
        <S.Container>
            <TextC.Title level={2}> Atualizar compras </TextC.Title>
            <TextC.Body level={2}> Vamos atualizar os dados da compra. </TextC.Body>
        </S.Container>
    ) 
}

export default Header