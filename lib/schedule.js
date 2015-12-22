// NOTE: Start times are minutes from midnight for easier maths
// add them to the day using moment for proper formatting and display

exports.days = [
	{ date: '2016-02-22', start: 540, day: 'Monday' },
	{ date: '2016-02-23', start: 540, day: 'Tuesday' },
];

// these are used to calculate start times for the items on each day
var lastDay = 0;
var lastStart = 0;
var nextStart = 0;

// the default duration of schedule times
var DEFAULT_DURATION = 30;

// NOTE: Day number is abbreviated to `d` for brevity in source data
// most other fields are calculated by the `map` function below

exports.times = [
	// Day 1
	{ d: 1, type: 'meta', duration: 60, description: 'Registration & Breakfast' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'meta', description: 'Break' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'meta', duration: 90, description: 'Lunch' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'meta', description: 'Break' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'meta', description: 'Break' },
	{ d: 1, type: 'talk' },
	{ d: 1, type: 'lightning' },
	{ d: 1, type: 'special', description: 'Buffer in case lightning talks go over' },
	{ d: 1, type: 'meta', duration: 240, description: 'Food & Drinks at the Conference Venue' },
	// Day 2
	{ d: 2, type: 'meta', duration: 60, description: 'Registration & Breakfast' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'meta', description: 'Break' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'lightning' },
	{ d: 2, type: 'meta', duration: 90, description: 'Lunch' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'meta', description: 'Break' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'meta', description: 'Break' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'talk' },
	{ d: 2, type: 'lightning' },
	{ d: 2, type: 'meta', duration: 240, description: 'Food & Drinks at the Conference Venue' },
].map((time, i) => {
	Object.assign(time, exports.days[time.d - 1]);
	time.dayNumber = time.d;
	if (!time.duration) time.duration = DEFAULT_DURATION;
	if (time.day !== lastDay) {
		lastDay = time.day;
		lastStart = time.start;
	} else {
		time.start = nextStart;
	}
	nextStart = time.start + time.duration;
	var mins = time.start % 60;
	var hour = (time.start - mins) / 60;
	var hour24 = hour;
	var m = hour < 12 ? 'am' : 'pm';
	if (mins < 10) mins = '0' + mins;
	if (hour > 12) hour -= 12;
	time.time = `${hour}:${mins}${m}`;
	time.time24 = `${hour24}:${mins}`;
	time.key = `${time.date} ${time.time24}`;
	time.label = `${time.day} - ${time.time} (${time.type})`;
	return time;
});

exports.talkTimes = exports.times.filter(time => {
	return time.type === 'talk' || time.type === 'lightning';
}).map(time => ({
	value: time.key,
	label: time.label,
}));
