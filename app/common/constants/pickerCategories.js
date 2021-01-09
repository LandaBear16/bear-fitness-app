import _ from 'lodash'

export const age = [
  { label: '', value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 }
]

export const generateAgeRange = () => {
  const ageRange = _.range(5, 150, 1)
  const ages = Array.from(ageRange, (age) => {
    return { label: age, value: age}
  })
 return ages
}