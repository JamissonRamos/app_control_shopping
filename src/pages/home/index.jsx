import { Button } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../theme'
import { TextC } from "../../components/Typography"
import CardsList from './components/cards_list'


const Home = () => {
  return (
    <S.Container>

      <S.CardsHeader>
        <S.Card>
          <S.ItemIcon>
            <Theme.Icons.FaDollarSign />
          </S.ItemIcon>
          <S.WrapText>
            <TextC.Title level={1}> Valor Total </TextC.Title>
            <TextC.Label level={3}>R$: 1000.000, 00</TextC.Label>
          </S.WrapText>
        </S.Card>
      </S.CardsHeader>

      <S.WrapButton>
          <Button
            variant="success"
          > 
            <Theme.Icons.MdAddCircle />
            <span> Adicionar Item </span>  
          </Button>
      </S.WrapButton>

        <S.Content>
          <CardsList />
        </S.Content>


    </S.Container>
  )
}

export default Home