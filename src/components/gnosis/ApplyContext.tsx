import { createContext, useContext, useState, ReactNode } from "react";
import { ApplyModal } from "./ApplyModal";

type Ctx = { open: () => void };
const ApplyCtx = createContext<Ctx>({ open: () => {} });

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ApplyCtx.Provider value={{ open: () => setIsOpen(true) }}>
      {children}
      <ApplyModal open={isOpen} onClose={() => setIsOpen(false)} />
    </ApplyCtx.Provider>
  );
}

export const useApply = () => useContext(ApplyCtx);