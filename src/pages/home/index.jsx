import { Button, Spinner } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../theme'
import { TextC } from "../../components/Typography"
import CardsList from './components/cards_list'
import { useNavigate } from 'react-router-dom'
import { useGetDocuments } from '../../hooks/product/useGetDocuments'
import { useEffect, useState } from 'react'


const Home = () => {
  const [registered, setRegistered] = useState(null);
  const [subTotal, setSubTotal] = useState(null);
  const navigate = useNavigate();

  const{ getDocuments, loading } = useGetDocuments()

  const fetchDocuments = async () => {
    /* 
      - Erro na chamada, verifica o motivo do error;
    */
    const result = await getDocuments();
    const { success, data, message} = result;

    if(success)
    {
      setRegistered( data )
      const totalValuePurchase = data.reduce((accumulator, current) => {
        return accumulator + (current.valuePurchase || 0);
    }, 0);

    setSubTotal(handleFormatCurrency(totalValuePurchase))
    }else{
      console.log("Error: ", message);
      
    }
  }

  useEffect(() => {
    fetchDocuments();  // Chama a função ao renderizar o componente
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

    
  const handleFormatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
  }

  return (
    <S.Container>
      <S.CardsHeader >
        <S.Card>
          <S.ItemIcon>
            <Theme.Icons.FaDollarSign />
          </S.ItemIcon>
          <S.WrapText>
            <TextC.Title level={1}> Valor Total </TextC.Title>
            <TextC.Title level={1}>{subTotal}</TextC.Title>
          </S.WrapText>
        </S.Card>
      </S.CardsHeader>

      <S.WrapButton>
          <Button
            variant="success"
            onClick={() => navigate('/product/create')}
          > 
            <Theme.Icons.MdAddCircle />
            <span> Adicionar Item </span>  
          </Button>
      </S.WrapButton>

        <S.Content>
        {
            loading &&
            <S.SpinnerCustom>
              <Spinner
                  as="span"
                  animation="border"
                  role="status"
                  aria-hidden="true"
              />
              <span className="sr-only">Carregando os dados...</span>
            </S.SpinnerCustom>
        }
        
        {
          registered && registered.length === 0
          ? 
            <S.Empty>
              <TextC.Display level={2} >
                  Nenhum cadastro
              </TextC.Display>
              
              <TextC.Body level={2}>
                  Não encontramos nenhum cadastro em nossa base de dados.
              </TextC.Body>
            </S.Empty> 
          :   
            <CardsList data={registered} setSubTotal={setSubTotal}/>
        }

        </S.Content>
    </S.Container>
  )
}

export default Home