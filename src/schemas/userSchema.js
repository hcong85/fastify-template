module.exports = {
    createUser: {
      body: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' }
        }
      }
    }
  };
  