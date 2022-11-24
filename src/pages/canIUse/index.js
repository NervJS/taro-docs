import React, { useState, Fragment } from 'react';

import Layout from '@theme/Layout';

import types from 'miniapp-types/dist/jsonSchema.json';
import './index.css';

const useList = {}
types.forEach((e) => {
  const list = e.value || []
  list.forEach(item => {
    useList[item?.key] = true
    const props = item?.value?.properties || {}
    Object.keys(props).forEach((propName) => {
      useList[propName] = true
    })
  })
})

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
          <details>
            <summary>
              <label htmlFor="can-i-use">Can I use</label>
              <input list="use-list" id="can-i-use" name="can-i-use" type="text" value={search} onChange={handleChanges} />
              <label>?</label>
            </summary>
            当前支持<strong>组件库</strong>精确查询，可匹配组件名、属性名
          </details>
          <datalist id="use-list">
            {Object.keys(useList).map((name) => (<option value={name} />))}
          </datalist>
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
