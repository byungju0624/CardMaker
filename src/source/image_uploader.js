class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "jq3zznt1");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/byungju0624/upload",
      {
        method: "POST",
        body: data,
      }
    );

    return await res.json();
  }
}
export default ImageUploader;
