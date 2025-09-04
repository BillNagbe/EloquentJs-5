const caRegEx = /ca[rt]/;

const pRegEx = /pr?op/;

const ferrRegEx = /ferr[et | y | ari]/;

const iousRegEx = /ious\b/;

const whiteSpaceRegEx = /\s[.,:;]/;

const longerThanSixRegEx = /\w{7}/;

const withOutERegEx = /\b[^\We]+\b/i;

console.log(withOutERegEx.test('longs'))