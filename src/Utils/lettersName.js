const lettersName = (element) =>{

    var name = element.split()

    const names = []

    name.forEach((el) =>{

        var nomeArray = el.split('')
        var firstLetter = nomeArray[0].toUpperCase()
        var prefix = nomeArray.splice(1)
        var suffix = prefix.join('')
        var conclusion = firstLetter+suffix
        names.push(conclusion)

    })
    const full_names = names.join(' ')
    return full_names

}


module.exports = lettersName
