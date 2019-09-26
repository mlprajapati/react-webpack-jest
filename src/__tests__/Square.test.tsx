import * as React from 'react';
import { Component } from 'react';
import Square from '../components/TicTak/Square';
import {shallow} from 'enzyme';
it('renders without crashing', () => {
    shallow(<Square value='X'/>);
});