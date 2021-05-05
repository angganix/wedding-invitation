import {useState, useEffect} from "react";
import storyFile from "../data/brideStoryList.json";

export const useBrideStory = () => {
    const [storyList, setStoryList] = useState([]);

    const loadStory = async () => {
        let data = await new Promise((resolve, reject) => {
            if (storyFile.length) {
                resolve(storyFile);
            } else {
                reject([]);
            }
        })
        setStoryList(data);
    }

    useEffect(() => {
        loadStory();
    }, [])

    return { storyList };
}
