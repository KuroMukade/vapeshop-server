import classNames from 'classnames';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchTypes } from '../../store/reducers/ActionCreators';
import { typeSlice } from '../../store/reducers/TypeSlice';
import './typebar.scss';

const TypeBar = () => {
  const { types, selectedType } = useAppSelector((state) => state.typeReducer);
  const { setSelectedType } = typeSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTypes());
  }, []);

  return (
    <nav className="typebar">
      <div className="typebar-container">
        {types.map((type) => (
          <li
            className={classNames('nav-option', {
              'selected': selectedType === type
            })}
            onClick={() => dispatch(setSelectedType(type.id))}
            key={type.id}>
            {type.name}
          </li>
        ))}
      </div>
      
    </nav>
  );
};

export default TypeBar;
