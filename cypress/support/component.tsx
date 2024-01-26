import { Provider } from 'react-redux';
import './commands';
import { mount } from 'cypress/react18';
import { store } from "../../src/infrastructure/redux/store";

Cypress.Commands.add('mount', (component, options = {}) => {
  const { reduxStore = store, ...mountOptions } = options;

  const wrapped = <Provider store={reduxStore}>{component}</Provider>;

  return mount(wrapped, mountOptions);
});
