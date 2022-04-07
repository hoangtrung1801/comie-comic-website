import { parse } from 'node-html-parser';
import { Comic } from '../../types/Comic';
import axios from '../axios';

const getComic = async (id: string): Promise<any> => {
  try{
    const path = `truyen-tranh/${id}`;
    const source = (await axios.get(path)).data;
    const dom = parse(source);
    const comic = dom.querySelector('#item-detail');
    return {
      id: id,
      title: comic?.querySelector('.title-detail').textContent,
      imageSrc: comic?.querySelector('img')?.getAttribute('src'),
      author: comic?.querySelector('.author').querySelector('p:nth-child(2)').textContent,
      status: comic?.querySelector('.status').querySelector('p:nth-child(2)').textContent,
      categories: comic?.querySelector('.kind').querySelector('.col-xs-8').querySelectorAll('a').map(item => item.textContent),
      chapters: []
    }
  } catch(e) {
    console.log(e);
  }
}

export {getComic};