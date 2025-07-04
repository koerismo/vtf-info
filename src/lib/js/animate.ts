const TIME_PADDING = 0.1;

export function linear(x: number) {
	return x;
}

export function quartic_in_out(x: number) {
	if (x >= 1) return 1;
	if (x <= 0) return 0;
	if (x <= 0.5) return 2*x**2;
	return -1 - (2*x**2 - 4*x);
}

export function quartic_out(x: number) {
	return x <= 0 ? 0 : x >= 1 ? 1 : (x*2 - x**2);
}

// https://easings.net/#easeInOutQuint
export function quintic_in_out(x: number): number {
	return x < 0.5 ? 16 * (x**5) : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export function quintic_out(x: number): number {
	return 1 - (1 - x)**5;
}

type AnimFunc = (x: number) => number;

export interface AnimTrack {
	startTime: number;
	endTime: number;
	startValue: number;
	endValue: number;
	object: any;
	property: string;
	func: AnimFunc;
}

export class AnimRunner {
	tracks: AnimTrack[] = [];
	running = false;
	startTime = 0;
	maxTime = 0;

	linear(object: any, p: string, start: number, end: number, v1: number, v2: number) {
		return this.key(object, p, start, end, v1, v2, linear);
	}

	quint_out(object: any, p: string, start: number, end: number, v1: number, v2: number) {
		return this.key(object, p, start, end, v1, v2, quintic_out);
	}

	quint_in_out(object: any, p: string, start: number, end: number, v1: number, v2: number) {
		return this.key(object, p, start, end, v1, v2, quintic_in_out);
	}

	quart_out(object: any, p: string, start: number, end: number, v1: number, v2: number) {
		return this.key(object, p, start, end, v1, v2, quartic_out);
	}

	quart_in_out(object: any, p: string, start: number, end: number, v1: number, v2: number) {
		return this.key(object, p, start, end, v1, v2, quartic_in_out);
	}

	clear(ensureFinished: boolean=true) {
		if (ensureFinished) {
			for (const track of this.tracks) {
				track.object[track.property] = track.endValue;
			}
		}

		this.running = false;
		this.tracks.length = 0;
	}

	key(object: any, property: string, startTime: number, endTime: number, startValue: number, endValue: number, func: AnimFunc=quartic_out) {
		return this._key({
			object, property,
			startTime,
			endTime,
			startValue,
			endValue,
			func
		});
	}

	_key(t: AnimTrack) {
		this.tracks.push(t);
		this.maxTime = Math.max(this.maxTime, t.endTime + TIME_PADDING);
		return this;
	}
	
	start() {
		this.startTime = Date.now();
		this.running = true;
	}

	stop() {
		this.running = false;
	}

	/** @returns Returns true if any updates were made, otherwise false. */
	frame(): boolean {
		if (!this.running) return false;
		const time = (Date.now() - this.startTime) / 1000;
		if (time > this.maxTime) { this.running = false; return false; }
		let hit = false;
		for (let i=0; i<this.tracks.length; i++) {
			const track = this.tracks[i];
			if (time < track.startTime || time > track.endTime) continue;
			const trackTime = (time - track.startTime) / (track.endTime - track.startTime);
			const trackValue = track.func(trackTime) * (track.endValue - track.startValue) + track.startValue;
			track.object[track.property] = trackValue;
			hit = true;
		}
		return hit;
	}
}
