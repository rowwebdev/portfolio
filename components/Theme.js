const THEMES = {
  1: {
    bgMain: "#44417D",
    bgSeconary: "#F8F8F8",
    bgVideo: "video-abstract.mp4",
    fontMain: "#fff",
    fontSeconary: "#3E3E3E",
    fontStyleMain: "Poppins",
    fontStyleSecondary: "Poppins",
  },
};

THEMES["2"] = {
  ...THEMES["1"],
  fontMain: "#000",
  bgMain: "#FFE456",
  bgVideo: "video-yellow.mp4",
  fontStyleMain: "Yrsa",
  fontStyleSecondary: "Oswald",
};

const Theme = ({ themeId }) => {
  const theme = THEMES[themeId];

  return (
    <style>
      :root
      {`{
        --bg-main: ${theme.bgMain};
        --bg-secondary: ${theme.bgSeconary};
        --font-main: ${theme.fontMain};
        --font-secondary: ${theme.fontSeconary};
        --font-style-main: ${theme.fontStyleMain};
        --font-style-secondary: ${theme.fontStyleSecondary};
      }`}
    </style>
  );
};

export default Theme;

export { THEMES };
