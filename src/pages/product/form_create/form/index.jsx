import * as S from './styled'
import Fields from './fields'
import { Theme } from '../../../../theme'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Product } from '../../../../contants/validations/product'

const FormCreate = () => {

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Product),
        defaultValues: {
            datePurchase: new Date().toISOString().split('T')[0], // Data de hoje
            quantityPurchase: 1,
            valuePurchase: 'R$ 0,00',
        },

    });

    

    const handleOnSubmit = (data) => {
        /* 
            - Transforma data em dd-mm-aaaa;
            - limpar mascara de valor campo;
            
        
        */


        console.log(data);
        
    }

    return (

        <S.Container>
            <S.Form onSubmit={handleSubmit(handleOnSubmit)} >
                <S.WrapFields>
                    <Fields 
                        register={register}
                        setValue={setValue}
                        getValues={getValues}
                        errors={errors}
                    />
                </S.WrapFields>

                <S.WrapButtons>
                    <S.ButtonCancel>
                        <span>Cancelar</span>
                        <Theme.Icons.MdCancel />
                    </S.ButtonCancel>

                    <S.ButtonRegister
                        type='submit'
                    >
                        <span>Registrar</span>
                        <Theme.Icons.MdSaveAlt />
                    </S.ButtonRegister>

                </S.WrapButtons>
            </S.Form>
        
        </S.Container>
    )
}

export default FormCreate