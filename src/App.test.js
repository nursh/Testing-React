import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';


Enzyme.configure({ adapter: new EnzymeAdapter() });

// Setup function to setup create a shallow wrapper for the App Component
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) return wrapper.setState(state);
  return wrapper;
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

test('renders decrement button', () => {
  const wrapper = setup();
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  expect(decrementButton.length).toBe(1);
})

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
  const counter = 7;
  const wrapper = setup(null, { counter });

  // find button, click and then update wrapper
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  // find display and test value
  const updatedCounter = 8;
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(updatedCounter);
});

test('clicking button decrements counter display', () => {
  const counter = 5
  const updatedCounter = 4;
  const wrapper = setup(null, { counter });

  // Find the button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(updatedCounter);
});

test('display error message when counter is negative', () => {
  const counter = 0;
  const wrapper = setup(null , { counter });

  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click')
  wrapper.update();

  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(1);
});

test('error message is gone after negative counter has been incremented', () => {
  const counter = -5;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  const errorMessage = findByTestAttr(wrapper, 'error-message');
  expect(errorMessage.length).toBe(0);
});

test('counter is positive after value has been incremented', () => {
  const counter = -5;
  const updatedCounter = 0;
  const wrapper = setup(null, { counter });

  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();

  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(updatedCounter);
})
