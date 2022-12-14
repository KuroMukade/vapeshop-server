import React, {useState} from 'react'

import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

import { ModalComponentProps } from './CreateType';

const CreateBrand = ({show, onHide}: ModalComponentProps) => {
  const [value, setValue] = useState('');

  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('');
      onHide();
    });
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size={'lg'}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Добавить бренд</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
            <Form.Control  
                placeholder={"Введите название типа"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => onHide()} >Закрыть</Button>
        <Button variant="dark" onClick={() => addBrand()}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateBrand