export interface RecipeType {
    id?: string;
    name: string;
    description: string;
    imageURL: string[];
    cuisineType: string[];
    courseType: string;
    difficulty: string[];
    technique: string[];
    tags: string[];
    prepTime: number;
    noOfServings: number;
    calories: number;
    ingredients: {
        ingredient:string;
        amount:string;
        unit:string;
        comment:string;
    }[];
    prepSteps: string[];
    nutrition: {
        content:string;
        quantity:number;
        unit:string

    }[];


}






export interface RecipeType {
    name: string;
    description: string;
    ingredients: {
        ingredient: string;
        amount: string;
        unit: string;
        comment: string;
    }[];
    difficulty: string[];
    prepSteps: string[];
}

export type distinctType = 'cuisineType' | 'techniqueType' | 'tagType'
