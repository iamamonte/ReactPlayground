import React from "react";
import { Row, Container} from "react-bootstrap";

import '../styles/ConfirmationBox.css'

function ConfirmationBox({header, content}) {

    const _header = header ?? "Success!";
    const _content = content ?? "";
    return (
        <Container className="confirm-box">
            <Row> <span className="body-modal-icon"><i class="fas fa-check-circle fa-3x"></i></span></Row>
            <Row ><h1>{_header}</h1></Row>
            <Row ><p>{_content}</p></Row>
        </Container>
    );
}

export default ConfirmationBox;