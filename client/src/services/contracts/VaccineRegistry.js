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

    async vaccinate(patientAddress, doctorAddress, vaccineLotId, aadharNumber) {
        await this.init();
        return this.contract.methods
            .vaccinate(Number.parseInt(aadharNumber), patientAddress, doctorAddress, vaccineLotId)
            .send({
                from: await web3.getCurrentAccount()
            })
    }

    async validateLegitemecy(vaccineLotId) {
        await this.init();
        return this.contract.methods
            .checkLegitmacy(vaccineLotId)
            .call();
    }

    async getRequiredVaccineCount() {
        await this.init();
        return this.contract.methods
            .getRequiredCount()
            .call();
    }

    async registerVaccineLots(vaccineLotId, quantity, temperature) {
        await this.init();
        return this.contract.methods
            .registerVaccineLot(vaccineLotId, Number.parseInt(quantity), Number.parseInt(temperature))
            .send({
                from: await web3.getCurrentAccount()
            })
    }

    
    /**
     * called by admin & drug producer to get data of lot
     * @param {String} vaccineLotId 
     * @returns {Array<any>}
     */
    async getMonitoredData(vaccineLotId) {
        await this.init();
        
        const data = await this.contract.methods
            .getMonitoredData(vaccineLotId)
            .call()

        const monitoredData = data.map(el => {
            return {
                temp: Number.parseInt(el.temp),
                timestamp: 1000 * Number.parseInt(el.timestamp) // convert time into millisecond
            }
        });

        return monitoredData.reverse();

    }
    
    async monitor(vaccineLotId, temperature) {
        await this.init();
        return this.contract.methods
            .monitor(vaccineLotId, Number.parseInt(temperature))
            .send({
                from: await web3.getCurrentAccount()
            })
    }
}


export default new VaccineRegistry();