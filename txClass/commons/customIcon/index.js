import { createIconSet } from 'react-native-vector-icons';
import iconfontInfo from "./iconfont.json";
const glyphmap = {};
iconfontInfo.glyphs.forEach(item => {
    glyphmap[item.font_class] = unescape(`%u${item.unicode}`);
});
export default createIconSet(glyphmap, iconfontInfo.font_family, 'iconfont.ttf');