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
                            {/* <TextC.Label level={3}>
                                Lorem ipsum dolor sit 
                                amet.jajajajajajajaja2
                                jajaajajajajajajjajajajajajajajajajajajajajajajajajajajajajajajajajasjaaajjabcllacblabclbajcbbcabjanjcknkacnjacnacjancjancjkn
                            </TextC.Label> */}

                            <span>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eius neque necessitatibus voluptatem quia aliquam blanditiis fugiat esse corporis inventore dolor similique, odit aspernatur consectetur earum qui veniam delectus. Ipsa quas, ratione dolores accusantium distinctio ut in ipsum, perspiciatis laborum quam officia. Corrupti quia commodi laborum consectetur officiis quidem eaque!
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