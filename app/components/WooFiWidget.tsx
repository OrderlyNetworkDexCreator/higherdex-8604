import { useCallback } from "react";
import { useWalletConnector } from "@orderly.network/hooks";
import { WooFiSwapWidgetReact } from "woofi-swap-widget-kit/react";
import "woofi-swap-widget-kit/style.css";
import "../styles/woofi-widget.css";

export default function WooFiWidget() {
  const { wallet, setChain, connectedChain, connect } = useWalletConnector();

  const handleConnectWallet = useCallback(() => {
    connect();
  }, [connect]);

  const handleChainSwitch = useCallback(
    (targetChain: { chainName: string; chainId?: string; key: string }) => {
      if (targetChain.chainId) {
        setChain({ chainId: Number(targetChain.chainId) });
      }
    },
    [setChain]
  );

  return (
    <WooFiSwapWidgetReact
      evmProvider={wallet?.provider}
      currentChain={connectedChain?.id}
      onConnectWallet={handleConnectWallet}
      onChainSwitch={handleChainSwitch}
    />
  );
}

