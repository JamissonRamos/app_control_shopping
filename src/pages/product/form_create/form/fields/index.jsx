import * as S from './styled'
import { Col, Form, Row } from 'react-bootstrap'

const Fields = () => {

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
                            // {...register("fullName")}
                            isInvalid={true}
                            // onBlur={(e) => handleBlur(e)}
                        />
                        <Form.Control.Feedback type="invalid">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem sint nihil? Modi ducimus, placeat adipisci excepturi temporibus nihil tempore!
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
                            type="date" 
                            name="datePurchase"
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
                    <Form.Group className="p-1" controlId="GroupValuePurchase">
                        <Form.Label className="m-0"> Valor Compra </Form.Label>
                        <Form.Control 
                            type="text" 
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