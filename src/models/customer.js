export default {
  objectWithDefaults () {
    return {
      id: undefined,
      type: 'Customer',

      code: '',
      status: 'internal',
      firstName: '',
      lastName: '',
      pointAccount: {}
    }
  },

  fullName (customer) {
    if (!customer.firstName && !customer.lastName) {
      return ''
    }

    return `${customer.firstName} ${customer.lastName}`
  }
}
