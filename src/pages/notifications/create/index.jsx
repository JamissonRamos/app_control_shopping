import * as S from './styled';
import { Button } from 'react-bootstrap';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';

const NotificationsCreate = () => {
    return (

        <S.Container>
            <S.Header>
                <TextC.Title level={2}> Sucesso </TextC.Title>
            </S.Header>
            <S.Body>
                <TextC.Body level={1}> Seu cadastro foi efetuado com sucesso  </TextC.Body>
                <S.WrapImg>
                    <img src={Theme.ImgC.Success} alt="sucesso" />
                </S.WrapImg>
            </S.Body>
            <S.Footer>
                <S.ButtonOutline>
                    <span>Lista Item</span>
                    <Theme.Icons.MdList />
                </S.ButtonOutline>
                <S.ButtonContainer>
                    <span>Novo Cadastro</span>
                    <Theme.Icons.MdAddCircle />
                </S.ButtonContainer>
            </S.Footer>
        </S.Container>
    )
}

export default NotificationsCreate