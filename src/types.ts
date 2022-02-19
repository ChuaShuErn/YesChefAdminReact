import { StringLiteralLike } from "typescript";

export interface RecipeType {
    id?: string;
    name: string; // search
    description: string; //search
    imageURL: string[];
    cuisineType: string[]; //search
    courseType: string; //search
    difficulty: string[]; //search
    technique: string[];
    tags: string[]; //search
    prepTime: number;
    noOfServings: number;
    calories: number;
    ingredients: {
        ingredient:string;
        amount:string;
        unit:string;
        comment:string;
    }[]; //search
    prepSteps: string[];
    // userReviews: {
    //     userEmail: string;
    //     rating: number;
    //     description:string;
    // }
    nutrition: {
        content:string;
        quantity:number;
        unit:string

    }[];

    searchString: string
}

export interface UploadRecipeType extends Omit<RecipeType, 'searchString' > {
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


export interface cuisineDataType {
    name: string;
    value: number;
}

export interface recentRecipeType {
    date: string;
    name: string;
    cuisine: string;
}

export interface mostViewedRecipeType {
    views: number;
    name: string;
    cuisine: string;
}

export interface topRatedRecipeType {
    rating: number;
    name: string;
    cuisine: string;
}

export interface usershipType {
    date: string;
    users: string;
    views: number;
}

export interface usershipType {
    date: string;
    users: string;
    views: number;
}

export interface usershipDerivedType {
    date: string;
    views: number;
    newusers: number;
    totalusers: number;
    viewsperuser: number;
}


export interface cuisineViewsType {
    date: string;
    cuisine: string;
    views: number;
}

export interface cuisineNameViewsType {
    day: string;
    Japanese: number;
    Vietnamese: number;
    Chinese: number;
    Indian: number;
    Korean: number;
    American: number;
    Fusion: number;
    British: number;
    Taiwanese: number;
    Thai: number;

}


export interface totalViewsCountType {
    allViews: number
}

