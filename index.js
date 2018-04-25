const inquirer = require('inquirer')
const fuzzy = require('fuzzy')
const Promise = require('promise')

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'))

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming'
]

const filterData = (data = []) => (answers, input) => {
  return new Promise((resolve, reject) => {
    try {
      const fuzzyResult = fuzzy.filter(input || '', data)
      return resolve(fuzzyResult.map(el => el.original))
    } catch (err) {
      return reject(new Error(err))
    }
  })
}

inquirer
  .prompt([
    {
      type: 'autocomplete',
      name: 'conventional',
      message: '[conventional] What did you work on?',
      source: filterData(states)
      // pageSize: 4,
      // validate: val => (val ? true : 'Type something!')
    },
    {
      type: 'autocomplete',
      name: 'state',
      message: 'Select a state to travel from',
      source: filterData(states)
    }
  ])
  .then(answers => {
    console.log(JSON.stringify(answers, null, 2))
  })
