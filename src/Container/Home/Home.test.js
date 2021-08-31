import React from 'react';
import Enzyme ,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { describe } from 'yargs';
import { it } from '@jest/globals';

Enzyme.configure({adapter:new Adapter()});

describe('Home',()=>{
    it('should show the text',()=>{
        const wrapper=shallow(<Home/>)
        const text=wrapper.find('ul li article div')
        expect(text.text()).toBe('Beverages');
    })
})