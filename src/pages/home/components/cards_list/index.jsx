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
                            <TextC.Label level={3}> 1000002 </TextC.Label>
                        </S.Index>

                        <S.Product>
                        
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
                            <TextC.Label level={3}> 1000003 </TextC.Label>
                        </S.Index>

                        <S.Product>
                            {/* <TextC.Label level={3}>
                                Lorem ipsum dolor sit 
                                amet.jajajajajajajaja2
                                jajaajajajajajajjajajajajajajajajajajajajajajajajajajajajajajajajajasjaaajjabcllacblabclbajcbbcabjanjcknkacnjacnacjancjancjkn
                            </TextC.Label> */}

                            <span>
                                Lorem ipsum dolor sit 
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
        </S.Content>
    )
}

export default CardsList