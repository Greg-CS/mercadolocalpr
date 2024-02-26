


export default class PostModel {

    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly price: number,
        public readonly location: string,
        public readonly userId: string,
        public readonly category: string,
        public readonly photoUrl: string,
        public readonly createdAt: string,
    ) {}
}