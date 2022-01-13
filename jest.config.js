module.exports = {
  preset: 'ts-jest',
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        expand: true,
        filename: 'report.html',
        publicPath: './html-report',
      },
    ],
  ],
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
};
