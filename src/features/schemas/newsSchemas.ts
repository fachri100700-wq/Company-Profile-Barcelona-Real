import * as Yup from 'yup'

export const newsSchemas = Yup.object().shape({
  postTitle: Yup.string().required("Tittle is required"),
  category: Yup.string().required("Category is required"),
  imageURL: Yup.string()
    .url("Incorrect image link format")
    .required("Image URL is required"),
  content: Yup.string()
    .min(150, "Content is to short")
    .max(500, "Content is to long")
    .required("Content is required"),
});