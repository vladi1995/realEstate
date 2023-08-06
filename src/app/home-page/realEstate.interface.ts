import { User } from "../auth/user.model";
import { TypeOfHouse } from "../shared/typeOfHouses";

export interface RealEstateInterface {
    description: string;
    imagePath: string;
    name: string;
    owner: User;
    price: number;
    quadratMeter: number;
    town: string;
    type: TypeOfHouse;
}