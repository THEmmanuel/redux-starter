//immutability with objects

const person = {
    name: 'Max',
    address: {
        houseNumber: '69, Nice street'
    }
}

const updatedPerson = {
    ...person,
    name: 'John',
    address : {
        ...person.address, 
        houseNumber: '420, high street'
    }
}

updatedPerson.address.houseNumber = '25 no street'

console.log(person)
console.log(updatedPerson)

