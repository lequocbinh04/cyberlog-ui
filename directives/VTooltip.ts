import createTippy from "@/lib/tippy";

function getContent(content: string | object | null) {
  if (typeof content === "string") {
    return { content };
  }

  if (typeof content === "object" && content !== null) {
    return content;
  }

  return {};
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("tooltip", {
    mounted(el: any, { value, arg = "top", instance, modifiers }: any) {
      const content = getContent(value);

      const tooltip = createTippy(el, {
        ...content,
        theme: "tooltip-theme",
        placement: arg,
      });

      if (modifiers.group) {
        if (!Array.isArray(instance._tooltipGroup)) instance._tooltipGroup = [];

        instance._tooltipGroup.push(tooltip);
      }
    },
    updated(el: any, { value, arg = "top" }: any) {
      const content = getContent(value);

      el._tippy.setProps({
        placement: arg,
        ...content,
      });
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });
});
