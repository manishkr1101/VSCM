import web3 from "../web3";
import BeneficiaryAbi from '../../contracts/Beneficiary.json'
import Table from "../db";
import { hash, getSecretKey } from "../util";



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
        this.userTable = new Table('USER_TABLE');
        // this.init();
    }

    async init() {
        if (this.contract != null) return;
        this.contract = await web3.buildContractWithAbi(BeneficiaryAbi);
        window.Beneficiary = this.contract  // TODO : remove
    }

    async getRegisteredCount() {
        await this.init();
        return await this.contract.methods.getRegisteredCount().call();
    }

    async vaccineRegistration(aadharNumber, name, age, complicacy) {
        await this.init();
        const account = await web3.getCurrentAccount();
        try {


            const hashPI = hash([aadharNumber, name, age, complicacy]);
            console.log('PI_Hash', hashPI); // TODO : remove
            const hashSecret = hash([getSecretKey(account)]);
            const hashAadhar = hash([aadharNumber]);
            console.log('P_Hash ', hash([hashPI, hashSecret])); // TODO : remove
            await this.contract.methods // here second paramater is using web3 for conversion to bytes beacause only this worked
                .registerBeneficiary(Buffer.from(hashAadhar), web3.utils.hexToBytes(hash([hashPI, hashSecret])))
                .send({
                    from: account
                })

            this.userTable.insert(account, { aadhar: aadharNumber, name, age, complicacy });
        } catch (error) {
            throw new Error(error.message)
        }

    }

    async validate(aadharNumber, name, age, complicacy, hashSecret, patientAddress) {
        await this.init();
        const accountAddress = await web3.getCurrentAccount();
        try {
            const hashPI = hash([aadharNumber, name, age, complicacy]);
            // this.contract.methods.validate2(Buffer.from(hashPI), Buffer.from(hashSecret), patientAddress).call()
            // .then(r => console.log('v2', r))
            // this.contract.methods.validate3(Buffer.from(hashPI), Buffer.from(hashSecret), patientAddress).call()
            // .then(r => console.log('v3', r))

            return await this.contract.methods
                .validate(Buffer.from(hashPI), Buffer.from(hashSecret), patientAddress)
                .call({
                    from: accountAddress
                })
        } catch (error) {
            throw error;
        }
    }

    async isRegistered() {
        await this.init();
        return await this.contract.methods.registered(await web3.getCurrentAccount()).call();
    }

    async getUser() {
        await this.init();

        const user = this.userTable.findById(await web3.getCurrentAccount());
        // console.log(user)
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