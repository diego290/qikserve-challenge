import { MountOptions, MountReturn } from "cypress/react";
import { EnhancedStore } from "@reduxjs/toolkit";
import { RootState } from "../../src/infrastructure/redux/store";

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mounts a React node
       * @param component
       * @param options
       */
      mount(
        component: React.ReactNode,
        options?: MountOptions & { reduxStore?: EnhancedStore<RootState> }
      ): Cypress.Chainable<MountReturn>
    }
  }
}
