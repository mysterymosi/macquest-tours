export default function importAssets() {
  const destinationImages = import.meta.glob("../assets/images/destination/*.png");
  const packageImages = import.meta.glob("../assets/images/packages/*.png");
  return { destinationImages, packageImages };
}
