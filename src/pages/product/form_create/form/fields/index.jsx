import * as S from './styled'
import { Col, Form, Row } from 'react-bootstrap'

const Fields = () => {
    const today = new Date().toISOString().split('T')[0]; // Formata a data para YYYY-MM-DD

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
                            // {...register("productName")}
                            isInvalid={true}
                            // onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            {/* {errors.fullName && errors.fullName.message} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupDatePurchase">
                        <Form.Label className="m-0"> Data Compra </Form.Label>
                        <Form.Control   
                        /* 
                            -Coloca data do dia sempre inicial como padrão;
                        */
                            type="date" 
                            name="datePurchase"
                            defaultValue={today} // Define a data padrão como hoje
                            // {...register("birthDate")}
                            // isInvalid={!!errors.birthDate}
                        />
                        <Form.Control.Feedback type="invalid">
                            error
                            {/* {errors.fullName && errors.fullName.message} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupQuantityPurchase">
                        <Form.Label className="m-0"> QTD Produto </Form.Label>
                        <Form.Control 
                            /* 
                                - Criar uma validação para campo não aceita se não for numero
                            */
                            type="text" 
                            inputMode="numeric"
                            name="quantityPurchase"
                            placeholder="Digite a quantidade de produto." 
                            // {...register("fullName")}
                            // isInvalid={!!errors.fullName}
                            // onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            error
                            {/* {errors.fullName && errors.fullName.message} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-2 px-2 ">
                <Col>
                    <Form.Group className="p-1" controlId="GroupValuePurchase">
                        <Form.Label className="m-0"> Valor Compra </Form.Label>
                        <Form.Control 
                            /* 
                                - Criar mascara para aceita formato dinheiro
                            */
                            type="text" 
                            inputMode="numeric"
                            name="valuePurchase"
                            placeholder="Digite o nome do produto." 
                            // {...register("fullName")}
                            // isInvalid={!!errors.fullName}
                            // onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            error
                            {/* {errors.fullName && errors.fullName.message} */}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            </Row>
        </S.Content>
    )
}

export default Fields