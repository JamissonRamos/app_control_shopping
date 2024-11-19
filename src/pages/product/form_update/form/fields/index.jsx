import { Theme } from '../../../../../theme';
import { CapitalizedValue, FormatCurrency } from '../../../scripts';
import * as S from './styled'
import { Col, Form, Row } from 'react-bootstrap'

const Fields = ({register, setValue, errors, uid}) => {

    const handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let maskedValue =   FormatCurrency(fieldValue)
        setValue(fieldName, maskedValue)
    };

    const handleBlur = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        let capitalized = CapitalizedValue(fieldValue)
        setValue(fieldName, capitalized)
    }


    return (
        <S.Content>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupProductName">
                        <Form.Label className="m-0"> Produto </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="productName"
                            placeholder="Digite o nome do produto." 
                            {...register("productName")}
                            isInvalid={!!errors.productName}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.productName && errors.productName.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupDatePurchase">
                        <Form.Label className="m-0"> Data Compra </Form.Label>
                        <Form.Control   
                            type="date" 
                            name="datePurchase"
                            {...register("datePurchase")}
                            isInvalid={!!errors.datePurchase}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.datePurchase && errors.datePurchase.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupQuantityPurchase">
                        <Form.Label className="m-0"> QTD Produto </Form.Label>
                        <Form.Control 
                            type="text" 
                            inputMode="numeric" 
                            name="quantityPurchase"
                            placeholder="Digite a quantidade de produto." 
                            {...register("quantityPurchase")}
                            isInvalid={!!errors.quantityPurchase}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.quantityPurchase && errors.quantityPurchase.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupUnitMeasure">
                        <Form.Label className="m-0"> UND </Form.Label>
                        <Form.Control 
                            type="text" 
                            name="unitMeasure"
                            placeholder="Digite a UND MTS, KG, CDA." 
                            {...register("unitMeasure")}
                            isInvalid={!!errors.unitMeasure}
                            onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.unitMeasure && errors.unitMeasure.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupValuePurchase">
                        <Form.Label className="m-0"> Valor Compra </Form.Label>
                        <Form.Control 
                            type="text" 
                            inputMode="numeric"
                            name="valuePurchase"
                            placeholder="Digite o nome do produto." 
                            {...register("valuePurchase")}
                            isInvalid={!!errors.valuePurchase}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.valuePurchase && errors.valuePurchase.message}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>

            <S.WrapButtonDelete>
                <S.ButtonDelete
                    onClick={() =>  console.log('deletar:', uid)
                    }
                >
                    <span>Excluir</span>
                    <Theme.Icons.MdDelete />
                </S.ButtonDelete>
            </S.WrapButtonDelete>
        </S.Content>
    )
}

export default Fields