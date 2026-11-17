//  Add Binary

function addBinary(a: string, b: string): string {
    const result = BigInt("0b" + a) + BigInt("0b" + b)
    return result.toString(2)
};