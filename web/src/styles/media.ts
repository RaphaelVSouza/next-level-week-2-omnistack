const desktopWidth = 1024;
const tabletWidth = 768;

const MediaQuery = {
  desktop: `@media (min-width: ${desktopWidth}px)`,
  tablet: `@media (min-width: ${tabletWidth}px )`,
  mobile: `@media (max-width: ${tabletWidth - 1}px)`,
};

export default MediaQuery;
