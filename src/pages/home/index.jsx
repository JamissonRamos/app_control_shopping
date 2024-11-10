import { Button } from 'react-bootstrap'
import * as S from './styled'
import { Theme } from '../../theme'
import { TextC } from "../../components/Typography"


const Home = () => {
  return (
    <S.Container>

      <S.CardsHeader>

        <S.Card>
          <S.ItemIcon>
            <Theme.Icons.FaDollarSign />
          </S.ItemIcon>
          <S.WrapText>
            <TextC.Headline level={1}> Valor Total </TextC.Headline>
            <TextC.Label level={3}>R$: 1000.000, 00</TextC.Label>
          </S.WrapText>
        </S.Card>

      </S.CardsHeader>

      <S.WrapButton>
          <Button> 
            <Theme.Icons.MdAddCircle />
            <span> Adicionar Item </span>  
          </Button>
      </S.WrapButton>

        <div>
          lista
        </div>


    </S.Container>
  )
}

export default Home