import { NextApiHandler } from "next";
import axios from "axios";
import { API_URL } from "../../../utils/constant";
import { getMoreChapterComic } from "../../../utils/api/comic";

const handler: NextApiHandler = (req, res) => {
    if (!req.query.id)
        return res.status(400).send("Id comic must not be empty");

    getMoreChapterComic(req.query.id as string).then((chapters) => {
        res.status(200).json(chapters);
    });

    // axios
    //     .get(url, {
    //         responseType: "arraybuffer",
    //         headers: {
    //             referer: API_URL,
    //         },
    //     })
    //     .then(({ data, headers: { "content-type": contentType } }) => {
    //         res.setHeader("cache-control", "max-age=99999")
    //             .setHeader("content-type", contentType)
    //             .send(data);
    //     });
};

export default handler;
