import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsError = () => {
    const navigate = useNavigate();

    return (

        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCancel />
                    <TextC.Title level={2}> Error </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={1}> 
                        Todos nós cometemos enganos, e desta vez foi conosco. Por favor, tente novamente. Se o problema persistir, entre em contato com o administrador do sistema.
                    </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Error} alt="sucesso" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() =>  navigate('/home')}
                    >
                        <span>Lista Item</span>
                        <Theme.Icons.MdList />
                    </S.ButtonOutline>
                    <S.ButtonContainer
                        onClick={() =>  navigate('/product/create')}
                    >
                        <span>Novo Cadastro</span>
                        <Theme.Icons.MdAddCircle />
                    </S.ButtonContainer>
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsError