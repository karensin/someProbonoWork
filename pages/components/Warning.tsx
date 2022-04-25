import React, { useState, useEffect, useRef } from 'react';
import { Row, Col, Button, Toast } from 'react-bootstrap';

export function Warning() {
    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

    return (
        <Row>
            <Col md={6} className="mb-2">
                <Button onClick={toggleShowA} className="mb-2">
                    Toggle Toast <strong>with</strong> Animation
                </Button>
            </Col>

        </Row>
    );
}
