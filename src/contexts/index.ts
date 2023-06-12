import { createContext, useContext } from "react";
import { Network } from "../App";

export interface NetworkContextProps {
  network: Network;
  setNetwork: (network: Network) => void;
}

export const NetworkContext = createContext<NetworkContextProps | undefined>(
  undefined
);

export const useNetworkContext = (): NetworkContextProps => {
  const context = useContext(NetworkContext);
  if (!context) throw new Error("Network context not found");
  return context;
};
