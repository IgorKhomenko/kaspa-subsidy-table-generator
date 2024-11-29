

const subsidyTable = [];

const SompiPerKaspa = 100_000_000
const deflationaryPhaseBaseSubsidy = 440 * SompiPerKaspa

const halvingDuration = 12;

const calcDeflationaryPeriodBlockSubsidyFloatCalc = (month) => {
  const baseSubsidy = deflationaryPhaseBaseSubsidy
	const subsidy =
    Number.parseFloat(baseSubsidy).toFixed(2) /
    Math.pow(2, Number.parseFloat(month).toFixed(2) / halvingDuration);
	return Math.floor(subsidy);
}

for (let m = 0; ; ++m) {
  const subsidy = calcDeflationaryPeriodBlockSubsidyFloatCalc(m)
  subsidyTable.push(subsidy)
  if (subsidy == 0) {
    break
  }
}

console.log(subsidyTable.length)
console.log(subsidyTable)
