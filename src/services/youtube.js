const KEY = "?key=AIzaSyCKVwTKb9XgP2DdNKuTH-5Nxp2UEcc5f-0";
const DEFAULT_URL = "https://www.googleapis.com/youtube/v3/search";
const PART = "&part=id,snippet";

const YOUTUBE = {};

YOUTUBE.search = async (search) => {
    console.log(DEFAULT_URL + KEY + PART + `&q=${search}`)
    const result = await fetch(DEFAULT_URL + KEY + PART + `&q=${search + " bo&type=video"}`);
    const json = await result.json();
    const id = json.items[0].id;
    return id
}

export default YOUTUBE;