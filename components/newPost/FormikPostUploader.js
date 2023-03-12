import { View, Image, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("Image url is required."),
  caption: Yup.string().max(100, "Caption must be less than 100 characters."),
});

const PLACEHOLDER_IMAGE_URL = "https://via.placeholder.com/125";

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMAGE_URL);

  return (
    <Formik
      initialValues={{ imageUrl: "", caption: "" }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
      onSubmit={(values) => console.log(values)}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              source={{
                uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMAGE_URL,
              }}
              style={{
                width: 125,
                height: 125,
                resizeMode: "contain",
                borderRadius: 3,
              }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Caption"
                style={{ color: "white", fontSize: 20 }}
                placeholderTextColor={"white"}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>

          <Divider width={0.5} orientation="horizontal" />

          <TextInput
            onChange={(e) => {
              setThumbnailUrl(e.nativeEvent.text);
            }}
            placeholder="Image URL (required)"
            style={{ color: "white", fontSize: 18 }}
            placeholderTextColor={"white"}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: "red", fontSize: 15 }}>
              {errors.imageUrl}
            </Text>
          )}

          <Button title="Upload" onPress={handleSubmit} disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
