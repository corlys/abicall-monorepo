"use client";

import { useConnect } from "wagmi";

import { Modal } from "@web/components/Modal";
import { ModalProps } from "@web/components/Modal/Modal";
import Button from "@web/components/Buttons";

export const ModalConnectWallet = ({ ...props }: ModalProps) => {
  const { connectors, connect } = useConnect();

  return (
    <Modal {...props}>
      <div className="flex flex-col items-center justify-center mt-4">
        {connectors
          .filter((connector) => connector.ready)
          .map((connector) => (
            <Button
              className="w-full"
              key={connector.name}
              onClick={() => {
                connect({ connector });
                props.onClose();
              }}
            >
              {connector.name}
            </Button>
          ))}
      </div>
    </Modal>
  );
};
