<template>
  <div class="flex flex-col justify-center items-center">
    <h1 class="text-red-500">Welcome to the homepage</h1>
    <ui-button>Click me</ui-button>
    <div class="flex flex-col">
      <div v-tooltip:right.group="'Hi binhle'">
        test directives
      </div>
      <div v-tooltip:right.group="'Hi thuminh'">
        test directives
      </div>
      <ui-tabs as="div" class="px-5 w-32 flex flex-col items-center py-12 space-y-4">
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2 bg-red-50 rounded-xl">
            abc
          </button>
        </ui-tab>
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2">
            abc
          </button>
        </ui-tab>
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2">
            abc
          </button>
        </ui-tab>
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2">
            abc
          </button>
        </ui-tab>
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2">
            abc
          </button>
        </ui-tab>
        <ui-tab v-tooltip:right.group="'Hi thuminh'">
          <button class="px-4 py-2">
            abc
          </button>
        </ui-tab>
      </ui-tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
useGroupTooltip();
</script>