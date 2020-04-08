# Project Name

>For this project, we will be attempt to webscale and improve the response time of another group's FEC.

## Related Projects

  - https://github.com/HRLA35-SDC/repo
  - https://github.com/HRLA35-SDC/repo
  - https://github.com/HRLA35-SDC/repo
  - https://github.com/HRLA35-SDC/repo

## Table of Contents

1. [Stats](#Stats)
2. [Usage](#Usage)
3. [Requirements](#requirements)
4. [Development](#development)

## [Stats](https://docs.google.com/spreadsheets/d/1S8Af02fTtTmnbA80wFej19aTLSGP5QH5kyQQp2dVEQc/)

## Usage

 Usage Instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Testing
Before testing, do the following:
* Change "xdescribe" to "describe" in the test file for the DMBS of choice
* Run one of the sets of commands below
* Finally, run ***npm test***

MongoDB
```sh
npm install
npm run data
npm run mSeed
```
PostgreSQL
```sh
npm install
npm run data
npm run pSeed
```

### Installing Dependencies

From within the root directory for the desired DMBS:

MongoDB
```sh
npm install
npm run data
npm run react
npm run mSeed
npm run mServer
```
PostgreSQL
```sh
npm install
npm run data
npm run react
npm run pGen
npm run pSeed
npm run pServer
```