import { store } from "@/state/store";
import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { Provider } from "react-redux";

// eslint-disable-next-line react-refresh/only-export-components
const ProviderWrapper = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>{children}</Provider>
);

const customRender = (ui: ReactNode, options = {}) =>
  render(ui, { wrapper: ProviderWrapper, ...options });

export { customRender as render };
