import utils from '../video/utils';

describe('CreateVideoPlugin\'s  utils can parse correct youtube and vimeo ulr without config', () => {
  it('default video plugin handle youtube url', () => {
    const url = 'https://www.youtube.com/watch?v=YsRMoWYGLNA';
    const { isYoutube, getYoutubeSrc } = utils;
    const result = isYoutube(url);
    expect(result).toEqual(true);
    const src = getYoutubeSrc(url);
    const expectSrc = {
      srcID: 'YsRMoWYGLNA',
      srcType: 'youtube',
      url: 'https://www.youtube.com/watch?v=YsRMoWYGLNA',
    };
    expect(src).toEqual(expectSrc);
  });
  it('default video plugin handle vimeo url', () => {
    const url = 'https://vimeo.com/153979733';
    const { isVimeo, getVimeoSrc } = utils;
    const result = isVimeo(url);
    expect(result).toEqual(true);
    const src = getVimeoSrc(url);
    const expectSrc = {
      srcID: '153979733',
      srcType: 'vimeo',
      url: 'https://vimeo.com/153979733',
    };
    expect(src).toEqual(expectSrc);
  });
});
