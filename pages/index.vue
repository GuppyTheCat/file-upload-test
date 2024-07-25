<template>
  <Toast />
  <FileUpload
    mode="basic"
    name="demo[]"
    url="/api/upload"
    :auto="true"
    @upload="onUpload" />
</template>

<script setup lang="ts">
import { useToast } from 'primevue/usetoast'
const toast = useToast()

const onUpload = () => {
  toast.add({
    severity: 'info',
    summary: 'Success',
    detail: 'File Uploaded',
    life: 3000,
  })
}
</script>
