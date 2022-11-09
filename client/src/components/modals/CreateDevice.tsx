import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, Dropdown, Col, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createDevice } from '../../http/deviceAPI';
import { fetchBrands, fetchTypes } from '../../store/reducers/ActionCreators';
import { brandSlice } from '../../store/reducers/BrandSlice';
import { typeSlice } from '../../store/reducers/TypeSlice';

import { ModalComponentProps } from './CreateType';

const CreateDevice = ({ show, onHide }: ModalComponentProps) => {
  const { types, selectedType } = useAppSelector((state) => state.typeReducer);
  const { brands, selectedBrand } = useAppSelector((state) => state.brandReducer);
  const { setSelectedBrand } = brandSlice.actions;
  const { setSelectedType } = typeSlice.actions;
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState<string | undefined>(undefined);
  const [info, setInfo] = useState<any>([]);

  const dispatch = useAppDispatch();

  const addDevice = () => {
    console.log('add device')
    if (file !== undefined) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', `${price}`);
      formData.append('img', file);
      formData.append('brandId', selectedBrand.id);
      formData.append('typeId', selectedType.id);
      formData.append('info', JSON.stringify(info));      
      createDevice(formData).then(data => {
        onHide()})
    }
  };

  const removeInfo = (number: any) => {
    setInfo(info.filter((i: any) => i.number !== number));
  }

  const changeInfo = (key: any, value: any, number: any) => {
    setInfo(info.map((i: any) => i.number === number ? {...i, [key]: value} : i));
  }

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now()}]);
  };

  const selectFile = (e: any) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    dispatch(fetchTypes());
    dispatch(fetchBrands());
  }, []);

  return (
    <Modal show={show} onHide={onHide} size={'lg'} centered>
      <Modal.Header closeButton>
        <Modal.Title>Добавить устройство</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>{selectedType.name || `Выберите тип`}</Dropdown.Toggle>
            <Dropdown.Menu>
              {types.map((type) => (
                <Dropdown.Item key={type.id} onClick={() => dispatch(setSelectedType(type))}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3 mb-3">
            <Dropdown.Toggle>{selectedBrand.name || `Выберите бренд`}</Dropdown.Toggle>
            <Dropdown.Menu>
              {brands.map((brand) => (
                <Dropdown.Item key={brand.id} onClick={() => dispatch(setSelectedBrand(brand))}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="string"
            className="mt-3"
            placeholder="Введите название устройства"></Form.Control>
          <Form.Control
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            type="number"
            className="mt-3"
            placeholder="Введите стоимость устройства"></Form.Control>
          <Form.Control
            onChange={(e) => selectFile(e)}
            type="file"
            className="mt-3"
            placeholder="Загрузите картинку"></Form.Control>
          <hr />
          <Button variant={'outline-dark'} onClick={addInfo}>
            Добавить новое свойство
          </Button>
          {info.map((i: any) => (
            <Row className="mt-4" key={i.number}>
              <Col md={4}>
                <Form.Control
                  value={i.title}
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  value={i.description}
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)} variant={'outline-danger'}>
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={() => onHide()}>
          Закрыть
        </Button>
        <Button variant="dark" onClick={addDevice}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateDevice;
