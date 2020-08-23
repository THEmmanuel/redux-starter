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


//Updating Arrays

const someArray = [1,2,3,4,5];


//Reducers
const reducer = (store, action) => {
    const updated = {...store}


}


//Cirrying
