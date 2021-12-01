import web3 from "../web3";
import BeneficiaryAbi from '../../contracts/Beneficiary.json'

export const ROLE = {
    USER: 0,
    DOCTOR: 1,
    PRODUCER: 2,
    GOVT_AUTHORITY: 3,
    ADMIN: 99
};

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

    async isRegistered() {
        await this.init();
        return await this.contract.methods.registered(await web3.getCurrentAccount()).call();
    }

    async getUser() {
        await this.init();
        const userArray = await this.contract.methods.getUser().call({from: await web3.getCurrentAccount()});
        const user = {
            aadhar: userArray[0],
            name: userArray[1],
            age: userArray[2],
            complicacy: userArray[3]
        }
        return user;
    }

    async addRole(address, role) {
        await this.init();
        await this.contract.methods
            .addRole(address, role)
            .send({
                from: await web3.getCurrentAccount()
            })
    }

    async getRole() {
        await this.init();
        const roleString = await this.contract
                                    .methods
                                    .roles(await web3.getCurrentAccount())
                                    .call();
        return Number.parseInt(roleString);
    }
}


export default new Beneficiary();