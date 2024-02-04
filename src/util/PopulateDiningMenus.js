import {scrapeAllMenus} from "../src/calendar/Dining.js";


scrapeAllMenus().then(() => {
    console.log('Updated all menus!');
    console.log('If you\'re on your laptop: \n Dont forget to run "\nscp -r /Users/henryabrahamsen/WebstormProjects/henhen1227-api/database/dining henry@api.henhen1227.com:/home/henry/Projects/henhen1227-api/database/\n"');
});

/*
    scp -r /Users/henryabrahamsen/WebstormProjects/henhen1227-api/database/dining henry@api.henhen1227.com:/home/henry/Projects/henhen1227-api/database/
*/
