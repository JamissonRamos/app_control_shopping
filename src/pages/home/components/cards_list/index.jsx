import { useState } from "react";
import * as S from './styled';
import { TextC } from "../../../../components/Typography";
import { useNavigate } from "react-router-dom";

const CardsList = ({data}) => {
    const navigate = useNavigate();  

    const handleFormatCurrency = (value) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    }

    const handleShowFormUpdate = (i) => { 
        navigate('/product/update')
        // Converte o objeto em uma string JSON
        const jsonString  = JSON.stringify(data[i]);
        // Salva a string JSON no localStorage
        localStorage.setItem('productUpdateItem', jsonString );
    };
    return (

        <S.Content>
            {
                data && data.map(({datePurchase, productName, valuePurchase}, i) => (

                    <S.WrapButton
                        key={i}
                        onClick={() => handleShowFormUpdate(i)}
                    >
                        <S.CardItem >
                            <S.WrapItem>
                                <S.WrapDescriptionIndex>
                                    <S.Index>
                                        {/* 
                                            * Foi preciso passar o span puro para fica flex o contesto do span
                                        */}
                                        <span> {i + 1} - </span>
                                    </S.Index>

                                    <S.Product>
                                        {/*
                                            * Foi preciso passar o span puro para fica flex o contesto do span
                                        */}
                                        <span>
                                            { productName }
                                        </span>

                                    </S.Product>

                                </S.WrapDescriptionIndex>

                                <S.WrapDateValue>
                                    <S.DatePurchase>
                                        <TextC.Label level={3}> { datePurchase } </TextC.Label>
                                    </S.DatePurchase>

                                    <S.ValuePurchase>
                                        <TextC.Label level={3}> { handleFormatCurrency(valuePurchase)  } </TextC.Label>
                                    </S.ValuePurchase>
                                </S.WrapDateValue>
                            </S.WrapItem>
                        </S.CardItem>
                    </S.WrapButton>
                ))
            }
        </S.Content>
    )
}

export default CardsList