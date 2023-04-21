export type HeroRotateProps = {
  scale: number;
  animSpeed: number;
};

export type BaseParams = {
  width: number;
  height: number;
  rotatingImagesPercent: number;
  centerImagePercent: number;
  duration: number;
};

export type PopulatedParams = {
  scale: number;
  width: number;
  height: number;
  duration: number;
  widthRotatingImages: number;
  heightRotatingImages: number;
  widthCenterImage: number;
  heightCenterImage: number;
};
