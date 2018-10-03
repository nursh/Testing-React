import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new EnzymeAdapter() });

// Setup function to setup create a shallow wrapper for the App Component
const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
}

test('renders without crashing', () => {
  const wrapper = setup();
  // add an html element to the component with data-test attribute to test it is rendering
  // check its length then implement it
  const appComponent = wrapper.find(`[data-test='component-app']`);
  expect(appComponent.length).toBe(1);
});


// Check to see if an element exists on the page that is crucial to the application
test('renders increment button', () => {
  const wrapper = setup();
  const incrementButton = wrapper.find(`[data-test='increment-button']`);
  expect(incrementButton.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = wrapper.find(`[data-test='counter-display']`);
  expect(counterDisplay.length).toBe(1);
});



test('counter starts at 0', () => {

});

test('clicking button increments counter display', () => {

});
