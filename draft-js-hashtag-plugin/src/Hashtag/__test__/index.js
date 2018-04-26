/* eslint-disable react/no-children-prop */
import React from 'react';
import { shallow } from 'enzyme';
import Hashtag from '../index';

describe('Hashtag', () => {
  it('applies the className based on the theme property `hashtag`', () => {
    const theme = { hashtag: 'custom-class-name' };
    const result = shallow(<Hashtag theme={theme} />);
    expect(result.prop('className')).toBe('custom-class-name');
  });

  it('applies any custom passed prop', () => {
    const result = shallow(<Hashtag data-custom="unicorn" />);
    expect(result.prop('data-custom')).toBe('unicorn');
  });

  it('renders the passed in children', () => {
    const result = shallow(<Hashtag children="#longRead" />);
    expect(result.prop('children')).toBe('#longRead');
  });

  it('applies a custom className as well as the theme', () => {
    const theme = { hashtag: 'custom-class-name' };
    const result = shallow(<Hashtag theme={theme} className="hashtag" />);
    expect(result.prop('className')).toBe('hastag');
    expect(result.prop('className')).toBe('custom-class-name');
  });
});
