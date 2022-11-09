import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

export interface ModalComponentProps {
  show: boolean;
  onHide: () => void;
}

const CreateType = ({ show, onHide }: ModalComponentProps) => {
  const [value, setValue] = useState('');
  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal show={show} onHide={onHide} size={'lg'} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Control
            placeholder={'Введите название типа'}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="dark" onClick={() => addType()} >Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
