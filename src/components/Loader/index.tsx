import { ComponentType, Suspense } from "react";
import LoadingScreen from "../loading-screen/index";

export const Loader = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props: P) => (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );

  return WrappedComponent;
};
