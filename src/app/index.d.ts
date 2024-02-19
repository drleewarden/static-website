
export interface IRecords {
    dates: string | null
    website: string | null
    technical: string[] | null
    name: string | null
    position: string | null
    description: string | null
    image: string | null
    colour: string | null
}
interface IRecipeRecord {
    name: string;
    description: string;
    ingredients: string[];
    instructions: string[];
    image: string;
}
export interface IRecipes {
    recipes: IRecipeRecord[]
}

export type AllRecords = IRecords[] //| IRecipes