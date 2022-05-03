import { globalCss } from './stitches.config';

const styles = {};

export const localStyles = () => {
  globalCss(styles)();
};
