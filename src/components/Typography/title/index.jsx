import * as S from './styled';

const Title = ({children, level}) => {
    return (
        <>
            <S.Title  $level={level} >
                {children}
            </S.Title>
        </>
    )
};

export default Title