import { View, Image, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { Divider } from "react-native-elements/dist/divider/Divider";

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("Please provide a valid image url."),
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
                width: 130,
                height: 130,
                resizeMode: "contain",
                borderRadius: 3,
              }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                placeholder="Caption"
                style={{
                  color: "white",
                  fontSize: 18,
                  paddingBottom: 2,
                }}
                placeholderTextColor={"white"}
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>

          <Divider width={0.5} orientation="horizontal" />

          <View style={{ alignItems: "flex-start" }}>
            {/* //Image URL text input */}
            <TextInput
              onChange={(e) => {
                setThumbnailUrl(e.nativeEvent.text);
              }}
              placeholder="Enter image url to upload photo"
              style={{
                color: "white",
                fontSize: 16,
                borderBottomWidth: 0.7,
                marginBottom: 3,
                marginTop: 10,
                marginStart: 10,
                marginEnd: 10,
                borderColor: "#fff",
                // padding: ,
                paddingBottom: 2,
              }}
              placeholderTextColor={"white"}
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />

            {/* Error message for when the image url is wrong or empty. */}
            {errors.imageUrl && (
              <Text
                style={{
                  color: "red",
                  fontSize: 15,
                  marginHorizontal: 10,
                  // marginBottom: 10,
                }}
              >
                {errors.imageUrl}
              </Text>
            )}

            {/* Upload button */}
            <View style={{ marginStart: 10, marginTop: 10 }}>
              <Button
                color={"#0396ef"}
                title="Upload"
                onPress={handleSubmit}
                disabled={!isValid}
              />
            </View>
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
