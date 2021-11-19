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
        window.Beneficiary = this.contract  // TODO : remove
    }

    async getRegisteredCount() {
        await this.init();
        return await this.contract.methods.getRegisteredCount().call();
    }

    async vaccineRegistration(aadharNumber, name, age, complicacy) {
        await this.init();
        return this.contract.methods
            .registerBeneficiary(aadharNumber, name, age, complicacy)
            .send({
                from: await web3.getCurrentAccount()
            })
    }

    async validate(aadharNumber, address) {
        return false;
    }
}


export default new Beneficiary();