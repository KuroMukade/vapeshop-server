import React, { useEffect } from 'react';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchBrands } from '../../store/reducers/ActionCreators';
import { brandSlice } from '../../store/reducers/BrandSlice';

import './brandbar.scss';

const BrandBar = () => {
  const { brands, selectedBrand } = useAppSelector((state) => state.brandReducer);
  const { setSelectedBrand } = brandSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  return (
    <div className="brandbar">
      <div className="brandbar-wrapper">
        <nav className="brands">
          {brands.map((brand) => (
            <li
              onClick={() => dispatch(setSelectedBrand(brand.id))}
              className={classNames('brand', { selected: brand === selectedBrand })}
              key={brand.id}>
              {brand.name}
            </li>
          ))}
        </nav>
      </div>
      
    </div>
  );
};

export default BrandBar;
