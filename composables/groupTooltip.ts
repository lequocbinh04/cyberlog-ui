import { getCurrentInstance, shallowRef, nextTick, onUnmounted } from "vue";
import { createSingleton } from "tippy.js";
import createTippy, { defaultOptions } from "@/lib/tippy";

export const useGroupTooltip = (elements?: any, options = {}) => {
  const singleton = shallowRef<any>(null);
  const instance = getCurrentInstance();
  const context: any = instance && (instance.exposed || (instance as any).ctx);
  nextTick(() => {
    let cnt = 0;
    let itv = setInterval(() => {
      cnt++;
      if (cnt > 100) {
        clearInterval(itv);
      }

      let tippyInstances = [];

      if (Array.isArray(elements)) {
        tippyInstances = elements.map((el) => el._tippy || createTippy(el));
      } else {
        tippyInstances = context._tooltipGroup || [];
        if (tippyInstances.length !== 0) {
          clearInterval(itv);
        }
      }

      singleton.value = createSingleton(tippyInstances, {
        ...defaultOptions,
        ...options,
        theme: "tooltip-theme",
        placement: "right",
        moveTransition: "transform 0.2s ease-out",
        overrides: ["placement", "theme"],
      });
    }, 100);
    // if (!elements) {
    //   context.__tpSingleton = singleton.value;
    // }
  });
  onUnmounted(() => {
    singleton.value?.destroy();
  });

  return singleton;
};
