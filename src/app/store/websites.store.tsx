import { create } from 'zustand'
import { IRecords } from '..'
interface WebsiteStore {
    selectedWebsite: IRecords,
    setActiveWebsite: (website: IRecords) => void
}
export const websiteStore = create<WebsiteStore>((set) => ({
    selectedWebsite: {
        name: null,
        website: null,
        description: null,
        dates: null,
        technical: [],
        position: null,
        image: null,
        colour: null
    },
    setActiveWebsite: (website) => {
        console.log(website)
        set(() => ({
            selectedWebsite: website
        }))
    }
}))