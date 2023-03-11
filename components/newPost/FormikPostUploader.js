import { View, Text } from "react-native";
import React from "react";
import * as Yup from "yup";
import { formik } from "formik";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("Image url is required."),
  caption: Yup.string().max(100, "Caption must be less than 100 characters."),
});

const FormikPostUploader = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Formik</Text>
    </View>
  );
};

export default FormikPostUploader;
