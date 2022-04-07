import { parse } from 'node-html-parser';
import { Comic } from '../../types/Comic';
import axios from '../axios';

const getHome = async (): Promise<any> => {
  const path = {
    mostView: 'tim-truyen?status=-1&sort=10',
    lastUpdate: 'tim-truyen'
  }
  const sources = await Promise.all(
    Object.keys(path)
   .map(async (section, i) => {
     return ( await axios.get(path[section]) ).data;
   })
  )

  let data = {};
  sources.map((source, i) => {
    const dom = parse(source);
    const items = dom.querySelectorAll('.item').map(item => {
      return {
        id: item?.querySelector('a').getAttribute('href').split('/').slice(-1)[0].split('/').slice(-1)[0].split('.')[0],
        title: item.querySelector('.jtip')?.textContent,
        imageSrc: item.querySelector('img')?.getAttribute('data-original'),
        author: null,
        status: null,
        categories: [],
        chapters: []
      }
    })
    data[Object.keys(path)[i]] = items;
    return {
      name: Object.keys(path)[i],
      data: items
    };
  })

  return data;
}

export {getHome};