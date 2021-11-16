import web3 from "../web3";
import BeneficiaryAbi from '../../contracts/Beneficiary.json'

class Beneficiary {
    constructor() {
        this.contract = null;
        // this.init();
    }

    async init() {
        if(this.contract != null) return;
        this.contract = await web3.buildContractWithAbi(BeneficiaryAbi);
    }

    async getRegisteredCount() {
        await this.init();
        return await this.contract.methods.getRegisteredCount().call();
    }
}


export default new Beneficiary();