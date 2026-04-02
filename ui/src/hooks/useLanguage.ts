import { app } from "../utils/comfyapp"
import showcases from '../../../public/showcase/showcase.json';
import showcases_en from '../../../public/showcase/showcase_en.json';
import { useMemo } from "react";

const STAR_NUM = 3000

const useLanguage = () => {
    // Force English branding and showcase
    const languageData = useMemo(() => {
        let showcase_title = 'Welcome to ComfyUI Copilot!'
        let showcase_subtitle = `${STAR_NUM}+ developers joined🚀, Star us to support continuous updates, 👉🏻Star now.`
        let showcase_list = showcases_en
        let apikeymodel_title = '💖 Every ⭐ is our lifeline! Tap that star button to keep the magic alive!'
        let chatinput_title = 'Your Star = Our Power'
        let startpopview_title = `Join our family of ${STAR_NUM}+ Star supporiters \n Your Star makes us stronger!`
        let startpopview_join = 'Join Us! Star Now!'
        
        return {
          showcase_title,
          showcase_subtitle,
          showcase_list,
          apikeymodel_title,
          chatinput_title,
          startpopview_title,
          startpopview_join
        };
    }, [])

    return languageData
}

export default useLanguage