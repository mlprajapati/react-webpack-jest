import * as React from 'react';
import { Component } from 'react';
import App from '../components/App';
import {shallow, mount} from 'enzyme';
describe('<App />', () => {
it('renders without crashing', () => {
    shallow(<App color='blue'/>);
});
it('get app children correctly', () => {
    const wrapper = mount(<App color='blue'/>)
    const mainDom = wrapper.children().length;
    expect(mainDom).toBe(1)
})
it('renders app having <h1> correctly', () => {
    const wrapper = mount(<App color='blue'/>)
    const mainDom = wrapper.find('h1').first().text();
    expect(mainDom).toMatch('Lets Paly Tic Tac Toe Game');
})
it('renders app having <p> correctly', () => {
    const wrapper = mount(<App color='blue'/>)
    const mainDom = wrapper.find('p').first().text();
    expect(mainDom).toMatch('The color of this page is: blue');
})
it('renders app having <Game> correctly', () => {
    const wrapper = shallow(<App color='blue'/>)
    expect(wrapper.find('Game')).toBeDefined();
})
})