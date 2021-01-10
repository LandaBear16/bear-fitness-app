export const circleDiameter = (width, height) => {
  if (width > 350) {
    return { width: 300, height: 300}
  } else {
    return { width: 200, height: 200}
  }
}