import { create } from 'zustand'
import { IRecords } from '..'
import { COMPANIES } from '../services/allPlacesWorked'
interface WebsiteStore {
    selectedWebsite: IRecords,
    listOfRecords: IRecords[],
    setActiveWebsite: (website: IRecords) => void
    setActiveList: (website: IRecords[]) => void
}
export const websiteStore = create<WebsiteStore>((set) => ({
    selectedWebsite: {
        id:null,
        name: null,
        website: null,
        description: null,
        dates: null,
        technical: [],
        position: null,
        image: null,
        colour: null
    },
    listOfRecords: COMPANIES,
    setActiveWebsite: (website) => {
        console.log(website)
        set(() => ({
            selectedWebsite: website
        }))
    },
    setActiveList: (list:IRecords[]) => {
        console.log(list)
        set(() => ({
            listOfRecords: list
        }))
    }
}))