export const MapData = (data) => {
  let cropDta = [];
  if (data.length > 0) {
    cropDta = data.map((d) => ({
      Id: d.id,
      cropName: d.crop_name,
      image: d.thumbnails[0].image,
    }));
  }
  return cropDta;
};
