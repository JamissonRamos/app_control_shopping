import * as S from './styled';

const Display = ({children, level}) => {
    return (
        <>
            <S.Display  $level={level} >
                {children}
            </S.Display>
        </>
    )
};

export default Display