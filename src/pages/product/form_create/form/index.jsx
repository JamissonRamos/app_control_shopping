import * as S from './styled'
import Fields from './fields'
import { Theme } from '../../../../theme'

const FormCreate = () => {


    return (

        <S.Container>
            <S.Form >
                <S.WrapFields>
                    <Fields />
                </S.WrapFields>

                <S.WrapButtons>

                    <S.ButtonCancel>
                        <span>Cancelar</span>
                        <Theme.Icons.MdCancel />
                    </S.ButtonCancel>

                    <S.ButtonRegister>
                        <span>Registrar</span>
                        <Theme.Icons.MdSaveAlt />
                    </S.ButtonRegister>

                </S.WrapButtons>
            </S.Form>
        
        </S.Container>
    )
}

export default FormCreate