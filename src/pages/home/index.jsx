import { Button } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../theme'
import { TextC } from "../../components/Typography"
import CardsList from './components/cards_list'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  return (
    <S.Container>

      <S.CardsHeader>
        <S.Card>
          <S.ItemIcon>
            <Theme.Icons.FaDollarSign />
          </S.ItemIcon>
          <S.WrapText>
            <TextC.Title level={1}> Valor Total </TextC.Title>
            <TextC.Title level={1}>R$: 1000.000.000, 00</TextC.Title>
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
          {/* 
            -Ajusta para mostra msg não tem algo ou lista de itens;
            -Passar o data de lista para mostra na tela;
          */}
          <CardsList />
        </S.Content>


    </S.Container>
  )
}

export default Home