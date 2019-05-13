import React from 'react';
import { Route } from 'react-router-dom';
import Configuration from './configuration/Configuration';
import Segments from './segments/Segments';

export default [
    <Route exact path="/configuration" component={Configuration} />,
    <Route exact path="/segments" component={Segments} />,
    <Route exact path="/invoices" component={Configuration} />,  // 这里定义的url会在Admin里面自动生成url的前面
];


