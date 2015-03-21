module.exports = muid

muid.prefix = ''

function muid(len) {
	len = len || 7
	var random = Math.random().toString(35).substr(2, len)
	return muid.prefix + random
}
