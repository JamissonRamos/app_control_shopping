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
                            <TextC.Label level={2}> 1000002 </TextC.Label>
                        </S.Index>

                        <S.Product>
                            <TextC.Label level={2}> Lorem ipsum dolor sit amet. </TextC.Label>
                        </S.Product>

                    </S.WrapDescriptionIndex>

                    <S.WrapDateValue>
                        <S.DatePurchase>
                            <TextC.Label level={2}> 10 - 11 -2024 </TextC.Label>
                        </S.DatePurchase>

                        <S.ValuePurchase>
                            <TextC.Label level={2}> R$ 100,00</TextC.Label>
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