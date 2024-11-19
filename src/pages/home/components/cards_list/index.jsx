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

    
    const handleShowFormUpdate = (uid) => { 
       // navigate('/responsibleStudents/responsibleList/', { state: { uid: uid } });
        navigate('/product/update/', { state: { uid: uid } })
    };
    return (

        <S.Content>
            {
                data && data.map(({uid, datePurchase, productName, valuePurchase}, i) => (

                    <S.WrapButton
                        key={i}
                        onClick={() => handleShowFormUpdate(uid)}
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

                            {/* <S.WrapButtons>

                                <S.WrapButtonDelete>
                                    <Theme.Icons.MdDelete />
                                </S.WrapButtonDelete>

                                <S.WrapButtonEdit
                                    onClick={() => navigate('/product')}
                                >
                                    <Theme.Icons.MdEdit />
                                </S.WrapButtonEdit>

                            </S.WrapButtons> */}
                        </S.CardItem>
                    </S.WrapButton>
                ))
            }
        </S.Content>
    )
}

export default CardsList