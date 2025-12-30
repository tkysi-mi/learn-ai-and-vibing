import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useLocalStorage } from "../../../src/hooks/useLocalStorage";

describe("useLocalStorage", () => {
  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  it("should return initial value", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  it("should update value", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));

    act(() => {
      result.current[1]("updated");
    });

    expect(result.current[0]).toBe("updated");
    expect(window.localStorage.getItem("test-key")).toBe(
      JSON.stringify("updated")
    );
  });

  it("should support functional updates", () => {
    const { result } = renderHook(() => useLocalStorage("count", 0));

    act(() => {
      result.current[1]((prev) => prev + 1);
    });

    expect(result.current[0]).toBe(1);
    expect(window.localStorage.getItem("count")).toBe(JSON.stringify(1));
  });

  it("should read from existing storage", () => {
    window.localStorage.setItem("existing", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("existing", "initial"));
    expect(result.current[0]).toBe("stored");
  });
});
