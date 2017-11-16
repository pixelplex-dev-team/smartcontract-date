'use strict';

const moment = require('moment');

const DateContract = artifacts.require("./Date.sol");
console.log(DateContract.bytecode);

let DateInstance;

contract('SolumToken', (accounts) => {
	
	before(async () => {
		DateInstance = await DateContract.new();
	});
	
	it('getYear', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		const currentYear = currentDate.format('YYYY');
		
		let year = (await DateInstance.getYear(time)).valueOf();
		assert.equal(year, currentYear);
	});
	
	it('getDaysInMonth', async () => {
		for(let year = 2000; year < 2009; year++) {
			for(let month = 1; month <= 12; month++) {
				let days = (await DateInstance.getDaysInMonth(month, year)).valueOf();
				assert.equal(days, moment(`${year}-${month}`, "YYYY-MM").daysInMonth(), `${year}-${month}`);
			}
		}
	});
	
	it('getMonth', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		const currentMont = currentDate.format('M');
		
		let month = (await DateInstance.getMonth(time)).valueOf();
		assert.equal(month, currentMont);
	});
	
	it('getDay', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		let day = (await DateInstance.getDay(time)).valueOf();
		assert.equal(day, currentDate.format('D'));
	});
	
	it('getHours', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		let hours = (await DateInstance.getHours(time)).valueOf();
		assert.equal(hours, currentDate.format('H'));
	});
	
	it('getMinutes', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		let minutes = (await DateInstance.getMinutes(time)).valueOf();
		assert.equal(minutes, currentDate.format('m'));
	});
	
	it('getSeconds', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		let seconds = (await DateInstance.getSeconds(time)).valueOf();
		assert.equal(seconds, currentDate.format('s'));
	});
	
	it('getWeekday', async () => {
		const currentDate = moment.utc();
		const time = parseInt(currentDate.format('X'));
		
		let weekday = (await DateInstance.getWeekday(time)).valueOf();
		assert.equal(weekday, currentDate.weekday());
	});
});