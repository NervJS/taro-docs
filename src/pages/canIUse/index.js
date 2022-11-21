/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';

import Layout from '@theme/Layout';

import types from 'miniapp-types/dist/jsonSchema.json';
import './index.css'
function CanIUse() {
  const [search, setSearch] = useState('onChange');

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  const filterTypes = (key) => {
    const result = [];
    types.forEach((item) => {
      const filtered = item.value.filter(
        (subItem) =>
          subItem.value.properties[key] ||
          subItem.value.properties[key.replace(/^on/, 'bind')],
      );

      if (filtered.length) {
        result.push({
          key: item.key,
          value: filtered,
        });
      }
    });

    return result;
  };

  const filteredTypes = filterTypes(search);
  const componentName = [];
  filteredTypes.forEach((item) => {
    item.value.forEach((subItem) => {
      if (componentName.includes(subItem.key)) return;
      componentName.push(subItem.key);
    });
  });

  return (
    <Layout permalink="/caniuse">
      <div className='can-i-use-wrap'>
        <input type="text" value={search} onChange={handleChanges} />
        <table>
          <thead>
            <tr>
              <th></th>
              {filteredTypes.map((item) => {
                return <th key={item.key} width="14.5%">{item.key}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {componentName.map((item) => {
              return (
                <tr key={item}>
                  <td>{item}</td>
                  {filteredTypes.map((subItem) => {
                    const isSupport = subItem.value.find(
                      (subSubItem) => subSubItem.key === item,
                    );
                    return <td key={subItem.key}>{isSupport ? '✅' : '❌'}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default CanIUse;
