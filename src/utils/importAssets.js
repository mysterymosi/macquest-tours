export default function importAssets() {
  const modules = import.meta.glob("../assets/images/*.png");
  return { modules };
}
