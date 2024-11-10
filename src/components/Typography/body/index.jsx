import * as S from './styled';

const Body = ({children, level}) => {
    return (
        <>
            <S.Body  $level={level} >
                {children}
            </S.Body>
        </>
    )
};

export default Body