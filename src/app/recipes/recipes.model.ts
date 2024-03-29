import { Ingredients } from '../shared/ingredient.model';

export class Recipe {
    public name:string;
    public description:string;
    public imagePath:string;
    public ingredient: Ingredients[];

    constructor(name:string, description:string, imagePath:string, ingredients: Ingredients[]) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.ingredient = ingredients;
    }
}