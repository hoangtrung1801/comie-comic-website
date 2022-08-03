import { parse } from "node-html-parser";
import { NumberEight } from "phosphor-react";
import axios from "../axios";

const getComic = async (id: string): Promise<any> => {
    try {
        const path = `truyen-tranh/${id}`;

        const source = (await axios.get(path)).data;
        const dom = parse(source);
        const comic = dom.querySelector("#item-detail");

        return {
            id: id,
            title: comic?.querySelector(".title-detail").textContent,
            imageSrc: comic?.querySelector("img")?.getAttribute("src"),
            author: comic
                ?.querySelector(".author")
                .querySelector("p:nth-child(2)").textContent,
            status: comic
                ?.querySelector(".status")
                .querySelector("p:nth-child(2)").textContent,
            categories: comic
                ?.querySelector(".kind")
                .querySelector(".col-xs-8")
                .querySelectorAll("a")
                .map((item) => item.textContent),
            description: comic?.querySelector(".detail-content p").textContent,
            views: comic.querySelector(".list-info li:last-child p:last-child")
                .textContent,
            likes: comic.querySelector(".follow > span b").textContent,
            chapters: comic
                ?.querySelectorAll(".list-chapter ul li")
                // .slice(0, 20)
                .map((item) => {
                    const chapterId = parseInt(
                        item
                            .querySelector(".chapter a")
                            .textContent.split(" ")[1]
                    );
                    return {
                        chapterId,
                        updateAt:
                            item.querySelector("div:nth-child(2)").textContent,
                        href: `/comic/${id}/${chapterId}`,
                    };
                }),
        };
    } catch (e) {
        throw e;
    }
};

const getMoreChapterComic = async (
    id: string,
    page: number = 0
): Promise<Array<any>> => {
    const NUMBER_OF_PAGE = 20;
    try {
        const path = `truyen-tranh/${id}`;

        const source = (await axios.get(path)).data;
        const dom = parse(source);
        const comic = dom.querySelector("#item-detail");

        return [
            comic
                ?.querySelectorAll(".list-chapter ul li")
                .slice(
                    NUMBER_OF_PAGE * page,
                    NUMBER_OF_PAGE * page + NUMBER_OF_PAGE
                )
                .map((item) => {
                    const chapterId = parseInt(
                        item
                            .querySelector(".chapter a")
                            .textContent.split(" ")[1]
                    );
                    return {
                        chapterId,
                        updateAt:
                            item.querySelector("div:nth-child(2)").textContent,
                        href: `/comic/${id}/${chapterId}`,
                    };
                }),
        ];
    } catch (e) {
        throw e;
    }
};

export { getComic, getMoreChapterComic };
