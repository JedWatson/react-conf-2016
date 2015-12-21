// NOTE: Start times are minutes from midnight for easier maths
// add them to the day using moment for proper formatting and display

exports.days = [
	{ date: '2016-02-22', start: 540, day: 'Monday' },
	{ date: '2016-02-23', start: 540, day: 'Tuesday' },
];

var lastDay = 0;
var lastStart = 0;
var nextStart = 0;

var DEFAULT_DURATION = 30;

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
	if (!time.duration) time.duration = DEFAULT_DURATION;
	if (time.day !== lastDay) {
		lastDay = time.day;
		lastStart = time.start;
	} else {
		time.start = nextStart;
	}
	nextStart = time.start + time.duration;
	return time;
});

exports.talkTimes = exports.times.filter(time => {
	return time.type === 'talk' || time.type === 'lightning';
}).map((time, i) => {
	var mins = time.start % 60;
	var hour = (time.start - mins) / 60;
	var hour24 = hour;
	var m = hour < 12 ? 'am' : 'pm';
	if (mins < 10) mins = '0' + mins;
	if (hour > 12) hour -= 12;
	return {
		value: `${time.date} ${hour24}:${mins}`,
		label: `${time.day} - ${hour}:${mins}${m} (${time.type})`,
	};
});
