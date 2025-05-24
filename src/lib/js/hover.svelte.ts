export class HoverManager {
	message?: string = $state();
	special: boolean = $state(false);

	setHover(message: string | undefined, special: boolean=false) {
		this.message = message;
		this.special = special;
	}
}

export const hover = new HoverManager();
