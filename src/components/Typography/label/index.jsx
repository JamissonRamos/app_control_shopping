import * as S from './styled';

const Label = ({children, level}) => {
    return (
        <>
            <S.Label  $level={level} >
                {children}
            </S.Label>
        </>
    )
};

export default Label