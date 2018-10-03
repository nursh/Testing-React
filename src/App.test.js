import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new EnzymeAdapter() });

// Setup function to setup create a shallow wrapper for the App Component
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
}

// Test Wrapper to pass a value to be tested from the dom
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`);
}

test('renders without crashing', () => {
  const wrapper = setup();
  // add an html element to the component with data-test attribute to test it is rendering
  // check its length then implement it
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});


// Check to see if an element exists on the page that is crucial to the application
test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});



test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking button increments counter display', () => {

});
