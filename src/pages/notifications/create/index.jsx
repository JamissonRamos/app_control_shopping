import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsCreate = () => {
    const navigate = useNavigate();

    return (

        <S.Container>
            <div>
                <S.Header>
                    <Theme.Icons.MdCheckCircleOutline />
                    <TextC.Title level={2}> Sucesso </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={2}> Seu cadastro foi efetuado com sucesso!  </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Success} alt="sucesso" />
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
            </div>
        </S.Container>
    )
}

export default NotificationsCreate