import web3 from "../web3";
import VaccineRegistryAbi from '../../contracts/VaccineRegistry.json'

class VaccineRegistry {
    constructor() {
        this.contract = null;
        // this.init();
    }

    async init() {
        if(this.contract != null) return;
        this.contract = await web3.buildContractWithAbi(VaccineRegistryAbi);
        window.VaccineRegistry = this.contract;
    }

    async vaccinate(patientAddress, doctorAddress, vaccineLotId, aadharNumber) {}

    async validateLegitemecy(vaccineLotId) {}

    async getRequiredVaccineCount() {}

    async registerVaccineLots(vaccineLotId, quantity, temperature) {
        return this.contract.methods
            .registerVaccineLot(vaccineLotId, Number.parseInt(quantity), Number.parseInt(temperature))
            .send({
                from: await web3.getCurrentAccount()
            })
    }

    // called by admin & drug producer to get data of lot
    async monitor(vaccineLotId) {}

    async updateMonitor(vaccineLotId, temperature) {}
}


export default new VaccineRegistry();