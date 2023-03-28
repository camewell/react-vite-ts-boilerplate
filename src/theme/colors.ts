export const colors = {
  white: '#FFFFFF',
  black: '#000000',
};

export type ColorsTheme = typeof darkTheme;

const commonTheme = {
  white: colors.white,
  black: colors.black,
};

export const darkTheme = {
  ...commonTheme,
};

export const lightTheme: ColorsTheme = {
  ...commonTheme,
};
