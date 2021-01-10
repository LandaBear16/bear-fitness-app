const colours = {
  primary: '#353535',
  secondary: '#3C6E71',
  white: '#FFFFFF',
  gray: '#D9D9D9',
  black: '#000000',
  plight: '#d7fff1',
  ming: '#3C6E71',
  iceBlue: '#90e0ef',
  neonBlue: '#8FFCFF',
  danger: '#d62839'
}

// const colours = {
//   primary: "#0f3057",
//   secondary: "#00587a",
//   black: "#000",
//   white: "#fff",
//   gray: "#e6e8e6",
//   medium: "#6e6969",
//   light: "#d6e5e3",
//   dark: "#0c0c0c",
//   danger: "#ff5252",
//   pdark: "#061833",
//   green: "#00587a",
//   pdarkblue: "#0f3f86",
//   plight: "#d7fff1"
// };

const sizes = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
  borderWidth: 0.5,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  h4: 14,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,
  largeTitle: 38
};

const fonts = {
  largeTitle: { fontFamily: "Marvel_700Bold", fontSize: sizes.largeTitle, lineHeight: 35 },
  h1: { fontFamily: "Marvel_700Bold", fontSize: sizes.h1, lineHeight: 36 },
  h2: { fontFamily: "Marvel_700Bold", fontSize: sizes.h2, lineHeight: 30 },
  h3: { fontFamily: "Marvel_700Bold", fontSize: sizes.h3, lineHeight: 22 },
  h4: { fontFamily: "Marvel_700Bold", fontSize: sizes.h4, lineHeight: 22 },
  header: { fontFamily: "Marvel_700Bold", fontSize: sizes.header, lineHeight: 22 },
  title: { fontFamily: "Marvel_400Regular", fontSize: sizes.title, lineHeight: 30 },
  body: { fontFamily: "Marvel_400Regular", fontSize: sizes.body, lineHeight: 22 },
  caption: { fontFamily: "Marvel_400Regular_Italic", fontSize: sizes.caption, lineHeight: 22 },
}

export { colours, sizes, fonts }