import { useState } from "react";
import * as S from './styled';
import { TextC } from "../../../../components/Typography";
import { Theme } from "../../../../theme";

const CardsList = ({data}) => {
    const [registered] = useState(data || []);

    return (

        <S.Content>
            <S.CardItem >
                <S.WrapItem>
                    <S.WrapDescriptionIndex>
                        <S.Index>
                            <TextC.Body level={1}> 1000002 </TextC.Body>
                        </S.Index>

                        <S.Product>
                            <TextC.Body level={1}>  
                                Jamisson Lira Lorem ipsum dolor sit amet.
                                
                            </TextC.Body> 
                        </S.Product>

                    </S.WrapDescriptionIndex>

                    <S.WrapDateValue>
                        <S.DatePurchase>
                            <TextC.Body level={2}> 10 - 11 -2024 </TextC.Body>
                        </S.DatePurchase>

                        <S.ValuePurchase>
                            <TextC.Body level={2}> R$ 100,00</TextC.Body>
                        </S.ValuePurchase>
                    </S.WrapDateValue>
                </S.WrapItem>

                <S.WrapButtons>

                    <S.WrapButtonDelete>
                        <Theme.Icons.MdDelete />
                    </S.WrapButtonDelete>

                    <S.WrapButtonEdit>
                        <Theme.Icons.MdEdit />
                    </S.WrapButtonEdit>

                </S.WrapButtons>

            </S.CardItem>
        </S.Content>
    )
}

export default CardsList