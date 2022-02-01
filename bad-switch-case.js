/**
 * @author Baxtiyor Mardonov<jbalancer@mail.ru>
 * @name TransactionProcessorByCardSystem
 * @description Argument against "switch case" construct for extensible code. Example with transaction processor by card system
 **/

// -------- Non-extensible code
class Bad_TransactionProcessorByCardSystem {

	processTransactionByVisa(...args) {
		console.log('processTransactionByVisa', ...args);
	}

	processTransactionByMastercard(...args) {
		console.log('processTransactionByMastercard', ...args);
	}

	processTransactionByDefault(...args) {
		console.log('processTransactionByDefault', ...args);
	}

	processTransaction(cardSystem, ...args) {
		// Or "if else", no difference
		switch (cardSystem) {
			case 'VISA':
				this.processTransactionByVisa(...args);
				break;

			case 'MASTER_CARD':
				this.processTransactionByMastercard(...args);
				break;

			default:
				this.processTransactionByDefault(...args);
				break;
		}
	}

}

// -------- Easy extensible code
class TransactionProcessorByCardSystem {

	methodsByCardSystem = {
		VISA: 'processTransactionByVisa',
		MASTER_CARD: 'processTransactionByMastercard'
	}

	processTransactionByVisa(...args) {
		console.log('processTransactionByVisa', ...args);
	}

	processTransactionByMastercard(...args) {
		console.log('processTransactionByMastercard', ...args);
	}

	processTransactionByDefault(...args) {
		console.log('processTransactionByDefault', ...args);
	}

	processTransaction(cardSystem, ...args) {
		this.getTransactionProcessorMethodByCardSystem(cardSystem)(...args);
	}

	getTransactionProcessorMethodByCardSystem(cardSystem) {
		return (cardSystem && this.methodsByCardSystem[cardSystem] && this[this.methodsByCardSystem[cardSystem]])
			|| this.processTransactionByDefault;
	}

}
