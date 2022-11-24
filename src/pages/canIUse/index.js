import React, { useState, Fragment } from 'react';

import Layout from '@theme/Layout';

import types from 'miniapp-types/dist/jsonSchema.json';
import './index.css';

function CanIUse() {
  const [search, setSearch] = useState('');

  const handleChanges = (e) => {
    setSearch(e.target.value);
  };

  const filterTypes = (key) => {
    const result = [];
    if (key.match(/^bind/)) {
      return result;
    }

    types.forEach((item) => {
      const filtered = item.value.filter(
        (subItem) =>
          subItem.key.toLowerCase() === key.toLowerCase() ||
          subItem.value.properties[key] ||
          subItem.value.properties[key.replace(/^on/, 'bind')] ||
          Object.keys(subItem.value.properties).some((subKey) => {
            return (
              subKey.toLowerCase() === key.toLowerCase() ||
              subKey.toLowerCase() === key.replace(/^on/, 'bind').toLowerCase()
            );
          }),
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
      <div className="can-i-use-wrap">
        <div className="d-flex align-items-center justify-content-center w-100 mb-5">
          <label>Can I use</label>
          <input type="text" value={search} onChange={handleChanges} />
          <label>?</label>
        </div>
        <div className="w-100">
          {componentName.map((item) => {
            return (
              <Fragment key={item}>
                <h3>{item}</h3>
                <table className="mb-5">
                  <thead>
                    <tr>
                      {filteredTypes.map((type) => {
                        return (
                          <th
                            width={`${1000 / filteredTypes.length}px`}
                            key={type.key}
                          >
                            {type.key}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {filteredTypes.map((subItem) => {
                        const isSupport = subItem.value.find(
                          (subSubItem) => subSubItem.key === item,
                        );
                        return (
                          <td key={subItem.key}>{isSupport ? '✅' : '❌'}</td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default CanIUse;
