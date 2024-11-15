import * as S from './styled'
import Fields from './fields'
import { Theme } from '../../../../theme'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Product } from '../../../../contants/validations/product'
import { ClearFormatCurrency, FormattedDate } from '../../scripts';
import { usePostDocumentsCreate } from '../../../../hooks/product/usePostDocumentsCreate';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../../../components/Typography';



const FormCreate = () => {

    const {createStudent, loading: loadingCreate } = usePostDocumentsCreate()

    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Product),
        defaultValues: {
            datePurchase: new Date().toISOString().split('T')[0], // Data de hoje
            quantityPurchase: 1,
            unitMeasure: "",
            valuePurchase: 'R$ 0,00',
        },

    });

    
    const handleOnSubmit = async (data) => {
        data.datePurchase = FormattedDate(data.datePurchase);
        data.valuePurchase = ClearFormatCurrency(data.valuePurchase);
        data.quantityPurchase = Number(data.quantityPurchase);
        
        const result = await createStudent(data)
        const { success, uid, message } = result;

        if(success){
            /* 
                - direcionar para uma page de successo!
                - levar nome do produto e mostra na page;
                - podenso sendo redirecionado para novo cadastro ou home;

            */
            console.log("Cadastro feito com suceso !", uid);
            
        }else{
            console.log('Error: ', message);
            
        }
        console.log(data);
    }

    return (

        <S.Container>
            {
                loadingCreate &&
                <S.SpinnerCustom >
                    <Spinner
                        as="span"
                        variant="warning"
                        animation="border"
                        role="status"
                        aria-hidden="true"
                    />
                    <TextC.Title level={1} > Salvando os dados... </TextC.Title>
                </S.SpinnerCustom>
            }

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
                        disabled={loadingCreate ? true : false}
                    >
                        { loadingCreate ?
                            <>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                                <span > Salvando... </span>
                            </> :
                            <>
                                <Theme.Icons.MdSaveAlt />
                                <span>Salvar</span>
                            </>
                        } 
                    </S.ButtonRegister>

                </S.WrapButtons>
            </S.Form>
        
        </S.Container>
    )
}

export default FormCreate