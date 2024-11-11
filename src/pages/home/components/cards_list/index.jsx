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
                            {/* <TextC.Label level={3}> 100000323365 </TextC.Label> */}
                            <span> 15586558965859687 </span>
                        </S.Index>

                        <S.Product>
                            {/* Foi preciso passar o span puro para fica flex o contesto do span
                            */}
                            <span>
                                Lorem ipsum dolor sit amet! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident distinctio dicta totam atque assumenda, molestias numquam consequuntur, vero ipsam recusandae cum, iure libero culpa temporibus repellendus a nihil ipsum inventore? Adipisci neque nesciunt dolorum ipsum exercitationem maxime culpa numquam placeat?
                            </span>

                        </S.Product>

                    </S.WrapDescriptionIndex>

                    <S.WrapDateValue>
                        <S.DatePurchase>
                            <TextC.Label level={3}> 10 - 11 -2024 </TextC.Label>
                        </S.DatePurchase>

                        <S.ValuePurchase>
                            <TextC.Label level={3}> R$ 100,00</TextC.Label>
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
            <S.CardItem >
                <S.WrapItem>
                    <S.WrapDescriptionIndex>
                        <S.Index>
                            {/* Foi preciso passar o span puro para fica flex o contesto do span
                            */}
                            <span> 2 </span>
                        </S.Index>

                        <S.Product>
                            {/* Foi preciso passar o span puro para fica flex o contesto do span
                            */}
                            <span>
                                Lorem ipsum dolor 
                            </span>

                        </S.Product>

                    </S.WrapDescriptionIndex>

                    <S.WrapDateValue>
                        <S.DatePurchase>
                            <TextC.Label level={3}> 14 - 10 -2024 </TextC.Label>
                        </S.DatePurchase>

                        <S.ValuePurchase>
                            <TextC.Label level={3}> R$ 1000.00,00</TextC.Label>
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