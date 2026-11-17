// Length of Last Word


function lengthOfLastWord(s: string): number {
    let text = s.trim()
    const result = text.slice(text.lastIndexOf(" ") + 1).length
    return result
};