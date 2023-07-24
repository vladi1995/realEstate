import { User } from "../auth/user.model";
import { TypeOfHouse } from "../shared/typeOfHouses";

export class RealEstate {
    public name: string;
    public description: string;
    public imagePath: string;
    public type: TypeOfHouse;
    public price: number;
    public quadratMeter: number;
    public town: string;
    public owner: User;

    constructor(
        name: string,
        description: string,
        imagePath: string,
        type: TypeOfHouse,
        price: number,
        quadratMeter: number,
        town: string,
        owner: User,
    ) { 
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.type = type;
        this.price = price;
        this.quadratMeter = quadratMeter;
        this.town = town;
        this.owner = owner;
    }
}