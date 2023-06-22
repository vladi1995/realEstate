export class WishList {
    constructor(
        public owner: string, 
        public ownerId: string, 
        public name: string, 
        public imagePath: string, 
        public price: number
    ) {}
}