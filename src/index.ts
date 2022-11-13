/**
 * An enum containing the colors you can use in your log options.
 */

enum Colors {
	Blue = "\x1b[34m",
	Yellow = "\x1b[33m",
	Green = "\x1b[32m",
	Magenta = "\x1b[35m",
	Red = "\x1b[31m",
	Black = "\x1b[30m",
	White = "\x1b[37m",
	Cyan = "\x1b[36m",

	Reset = "\x1b[0m",
}

/**
 * An enum containing different types of a log you can use.
 */

enum LogType {
	Message = "\x1b[37m[:] ",
	Warning = "\x1b[33m[!] ",
	Error = "\x1b[31m[!!] ",
	Success = "\x1b[32m[+] ",
	Custom = ""
}

/**
 * The LogOptions type is used to style and customize your log.
 */

type LogOptions = {
	type: LogType,
	content: {
		color?: Colors,
		text: string
	},
	prefix?: {
		color?: Colors,
		text: string
	},
}

/**
 * Outputs a formatted log into the console, depending on your options.
 * 
 * @param {options} options Options to use for the log.
 */

function logOut(options:LogOptions):void {
	let consoleOutput:string;

	if(options.type === LogType.Custom) {
		let prefix:string;
		let content:string

		if(options.prefix) { prefix = (options.prefix?.color ? options.prefix?.color : "") + options.prefix.text + " "; }
		else {
			prefix = "";
		}

		if(options.content.color) {
			content = options.content.color + options.content.text;
		}
		else content = Colors.Reset + options.content.text; 

		consoleOutput = prefix + content + Colors.Reset;
	} else {
		consoleOutput = options.type + Colors.Reset + options.content.text;
	}

	console.log(consoleOutput);
}

export { LogOptions, logOut, LogType, Colors }