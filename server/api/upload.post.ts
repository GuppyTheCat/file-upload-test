export default defineEventHandler(async (event) => {
  try {
    console.log("Reading multipart form data...")
    const formData = await readMultipartFormData(event)
    console.log("Form data:", formData)
  } catch (err) {
    console.log("Error reading multipart form data:", err)
  }
})
