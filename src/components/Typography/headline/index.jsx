import * as S from './styled';

const Headline = ({children, level}) => {
    return (
        <>
            <S.Headline  $level={level} >
                {children}
            </S.Headline>
        </>
    )
};

export default Headline
