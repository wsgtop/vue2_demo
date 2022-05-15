<template>
  <div>
    <slot name="header" :user="user">
      {{ user.lastName }}
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return { user: { firstName: "Jay", lastName: "wang" } };
  },
};
</script>
