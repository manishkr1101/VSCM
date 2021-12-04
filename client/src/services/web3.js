import Web3 from 'web3';

class Web3Wrapper {
    /**@type {Web3} */
    static web3;
    static async load() {
        if(this.web3) return;
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider);
        }
        else {
            window.alert("Non Ethereum browser detected")
        }
        this.web3 = window.web3;
        this.utils = this.web3.utils;
    }

    static async getCurrentAccount() {
        if (window.web3 && window.web3.eth) {
            const accounts = await window.web3.eth.getAccounts()

            return accounts[0];
        }
        return null;
    }

    static async getNetworkId() {
        await this.load();
        return await this.web3.eth.net.getId();
    }

    static async buildContractWithAbi(ContractAbi) {
        const networkId = await this.getNetworkId();
        const networkData = ContractAbi.networks[networkId];

        if (networkData) {
            return new this.web3.eth.Contract(ContractAbi.abi, networkData.address);
            
        } else {
            alert('the smart contracts not deplo yed to the current network')
        }
        return null;

    }
}

export default Web3Wrapper;