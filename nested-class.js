class Logger {

	message = 'Logger'

	log() {
		console.log(this.message);
	}

	static Out = class {

		message = 'Out'

		log() {
			console.log(this.message);
		}

	}

}

new Logger.Out().log();