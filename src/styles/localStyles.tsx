import { globalCss } from './stitches.config';

const transitionTime = 300;

const styles = {};

export const localStyles = () => {
  globalCss(styles)();
};
