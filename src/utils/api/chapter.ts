import { parse } from 'node-html-parser';
import axios from '../axios';

const getChapter = async (comicId: string, chapterId: number) : Promise<any> => {
  try {
    const path = await getSource(comicId, chapterId);
    const source = (await axios.get(path)).data;
    const dom = parse(source);
    const images = dom.querySelectorAll('.reading-detail img').map(image => {
      return `/api/images?url=${encodeURIComponent(image.getAttribute('src'))}`;
    })

    return {
      comicId: comicId,
      title: dom?.querySelector('.txt-primary a').textContent,
      chap: chapterId,
      images
    }
  } catch(e) {
    console.log("getChapter error");
    throw e;
  }
  return undefined;
}

const getSource = async (comicId: string, chapterId: number) => {
  try {
    const pathComic = `truyen-tranh/${comicId}`;
    const source = (await axios.get(pathComic)).data;
    const dom = parse(source);
    const comic = dom.querySelector('#item-detail');

    const chapters = comic.querySelectorAll('.chapter');
    const chapter = chapters.filter(chapter => {
      const a = chapter.querySelector('a');
      if(a.textContent == `Chapter ${chapterId}`) return true;
      return false;
    })[0];

    return chapter.querySelector('a').getAttribute('href');
  } catch(e) {
    console.log("getSource error");
    throw e;
  }
  return null;
}

export {getChapter};