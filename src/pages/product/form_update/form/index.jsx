import * as S from './styled'
import Fields from './fields'
import { Theme } from '../../../../theme'

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Product } from '../../../../contants/validations/product'
import { ClearFormatCurrency, FormattedDate, ConvertDate } from '../../scripts';
import { usePostDocumentsCreate } from '../../../../hooks/product/usePostDocumentsCreate';
import { Spinner } from 'react-bootstrap';
import { TextC } from '../../../../components/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


const FormUpdate = ({uid}) => {
    const [ records, setRecords] = useState(null);
    const {createStudent, loading: loadingCreate } = usePostDocumentsCreate()
    const navigate = useNavigate();

    const getFromLocalStorage = () => {
        // Obtém a string JSON do localStorage
        const jsonString = localStorage.getItem('productUpdateItem');
        // Se a string não for nula, converte de volta para um objeto
        if( jsonString ){
            const result = JSON.parse(jsonString) 
            setRecords(result)
        }else {
            console.log('Sem dados');
        }
    }
    
    const { register, handleSubmit, setValue, getValues, reset, formState:{ errors } } = useForm({
        resolver: yupResolver(Product)
    });

    //Pegar os dados no local storage
    useEffect(() => {
        getFromLocalStorage();
    }, []); // Executa apenas uma vez ao montar o componente

    //Passar os dados para os campos
    useEffect(() => {
        if (records) {
            Object.keys(records).forEach(key => {
                if (key === 'datePurchase') {
                    const newDate = ConvertDate( records[key])                   
                    setValue(key, newDate);
                }else if (key === 'valuePurchase') {
                    const newValuePurchase = new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                    }).format( records[key]);                  
                    setValue(key, newValuePurchase);
                }else {
                    setValue(key, records[key]);
                }
            });
        }
    }, [records]); // Este useEffect depende de 'records'

    const handleOnSubmit = async (data) => {
        data.datePurchase = FormattedDate(data.datePurchase);
        data.valuePurchase = ClearFormatCurrency(data.valuePurchase);
        data.quantityPurchase = Number(data.quantityPurchase);
        
        const result = await createStudent(data)
        const { success, message } = result;

        if(success){
            reset();
            navigate('/notifications/create')
            
        }else{
            console.log('Error: ', message);
            navigate('/notifications/error')
        }
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
                        uid={uid}
                    />
                </S.WrapFields>
                
                <S.WrapButtons>
                    <S.ButtonCancel
                        onClick={() =>  navigate('/home')}
                    >
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
                            </> :
                            <>
                                <Theme.Icons.MdUpdate />
                                <span>Atualizar</span>
                            </>
                        } 
                    </S.ButtonRegister>

                </S.WrapButtons>
            </S.Form>
        
        </S.Container>
    )
}

export default FormUpdate