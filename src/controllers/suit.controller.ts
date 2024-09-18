type RPS = 'Rock' | 'Paper' | 'Scissor';

interface RPSResult {
    result: boolean;
    bot: RPS;
    player: RPS;
}

export default class Suit {
    private static instance: Suit;
    private name: string;
    private RPSCombination: RPS[] = ['Rock', 'Paper', 'Scissor'];

    constructor(name: string) {
        this.name = name;
    }

    public static initiate(name:string){
        if (!this.instance){
            return new Suit(name);
        }
        return this.instance
    }

    private generateRandomRPS(): RPS {
        return this.RPSCombination[Math.floor(Math.random() * 3)];
    }

    public validChoice(choice: string): boolean {
        return this.RPSCombination.includes(choice as RPS);
    }

    private checkWinner(RPS: RPS, bot: RPS):boolean{
        switch (RPS) {
            case "Scissor":
                return bot === "Paper";
            case "Paper":
                return bot === "Rock";
            case "Rock":
                return bot === "Scissor";
            default:
                return false;
        }
    }

    public play(RPSInput:RPS): RPSResult {
        const bot = this.generateRandomRPS();
        const result = this.checkWinner(RPSInput, bot);
        return {
            result,
            bot,
            player: RPSInput
        }
    }
}