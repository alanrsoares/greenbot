import type { TabKind } from "~/domain/types";
import { assoc } from "rambda";
import { writable } from "svelte/store";

const INITIAL_STATE = {
  selectedTab: "dependencies" as TabKind,
  highlightedRowIndex: -1,
};

function createUIStore() {
  const { subscribe, update } = writable(INITIAL_STATE);

  return {
    subscribe,
    selectTab: (tab: TabKind) => update(assoc("selectedTab", tab)),
    highlightRow: (index: number) =>
      update(assoc("highlightedRowIndex", index)),
  };
}

export const uiStore = createUIStore();
