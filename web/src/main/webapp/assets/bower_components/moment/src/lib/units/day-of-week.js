import { addFormatToken } from '../format/format';
import { addUnitAlias } from './aliases';
import { addRegexToken, match1to2, matchWord } from '../parse/regex';
import { addWeekParseToken } from '../parse/token';
import toInt from '../utils/to-int';
import { createLocal } from '../create/local';

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   matchWord);
addRegexToken('ddd',  matchWord);
addRegexToken('dddd', matchWord);

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
    var weekday = config._locale.weekdaysParse(input);
    if (weekday != null) {
        week.d = weekday;
    } else {
        config._pf.invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

function parseWeekday(input, locale) {
    if (typeof input === 'string') {
        if (!isNaN(input)) {
            input = parseInt(input, 10);
        }
        else {
            input = locale.weekdaysParse(input);
            if (typeof input !== 'number') {
                return null;
            }
        }
    }
    return input;
}

export var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
export function localeWeekdays (m) {
    return this._weekdays[m.day()];
}

export var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
export function localeWeekdaysShort (m) {
    return this._weekdaysShort[m.day()];
}

export var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
export function localeWeekdaysMin (m) {
    return this._weekdaysMin[m.day()];
}

export function localeWeekdaysParse (weekdayName) {
    var i, mom, regex;

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        if (!this._weekdaysParse[i]) {
            mom = createLocal([2000, 1]).day(i);
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        if (this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

export function getSetDayOfWeek (input) {
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

export function getSetLocaleDayOfWeek (input) {
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

export function getSetISODayOfWeek (input) {
    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
}