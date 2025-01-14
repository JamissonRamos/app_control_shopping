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
                                        <TextC.Body level={5} > {i + 1} - </TextC.Body>
                                    </S.Index>

                                    <S.Product>
                                        <TextC.Body level={3} > { productName } </TextC.Body>
                                    </S.Product>
                                </S.WrapDescriptionIndex>

                                <S.WrapDateValue>
                                    <S.DatePurchase>
                                        <TextC.Body level={3}> { datePurchase } </TextC.Body>
                                    </S.DatePurchase>

                                    <S.ValuePurchase>
                                        <TextC.Body level={4}> { handleFormatCurrency(valuePurchase)  } </TextC.Body>
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