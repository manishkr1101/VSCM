import web3 from "../web3";
import FeedbackAbi from '../../contracts/Feedback.json'

class Feedback {
    constructor() {
        this.contract = null;
        
    }

    async init() {
        if(this.contract != null) return;
        this.contract = await web3.buildContractWithAbi(FeedbackAbi);
    }

}


export default new Feedback();