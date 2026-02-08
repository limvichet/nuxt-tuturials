<script setup>
const props = defineProps({
  modelValue: Object,
  categories: Array,
  submitText: String,
})

const emit = defineEmits(["submit"])

const form = reactive({
  name: props.modelValue?.name || "",
  category_id: props.modelValue?.category_id || "",
})

const submit = () => {
  emit("submit", { ...form })
}
</script>

<template>
  <div class="space-y-4">
    <input v-model="form.name" placeholder="Product name" class="border p-2 w-full" />

    <select v-model="form.category_id" class="border p-2 w-full">
      <option value="">-- Select Category --</option>
      <option v-for="c in categories" :key="c.id" :value="c.id">
        {{ c.name }}
      </option>
    </select>

    <button @click="submit" class="bg-blue-600 text-white px-4 py-2 rounded">
      {{ submitText }}
    </button>
  </div>
</template>
