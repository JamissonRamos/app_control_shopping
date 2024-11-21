import * as S from './styled';
import { TextC } from '../../../components/Typography';
import { Theme } from '../../../theme';
import { useNavigate } from 'react-router-dom';

const NotificationsDelete = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.Content>
                <S.Header>
                    <Theme.Icons.MdCancel />
                    <TextC.Title level={2}> Excluído </TextC.Title>
                </S.Header>
                <S.Body>
                    <TextC.Body level={1}> 
                        Seu item foi excluído com sucesso!
                    </TextC.Body>
                    <S.WrapImg>
                        <img src={Theme.ImgC.Delete} alt="sucesso" />
                    </S.WrapImg>
                </S.Body>
                <S.Footer>
                    <S.ButtonOutline
                        onClick={() =>  navigate('/home')}
                    >
                        <span>Lista Item</span>
                        <Theme.Icons.MdList />
                    </S.ButtonOutline>
                </S.Footer>
            </S.Content>
        </S.Container>
    )
}

export default NotificationsDelete