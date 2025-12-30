import "@testing-library/jest-dom";
import { vi } from "vitest";

Object.defineProperty(global, "crypto", {
  value: {
    randomUUID: () => "test-uuid-1234",
  },
});
