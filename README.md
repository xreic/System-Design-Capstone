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
5. [Notes](#notes)

## [Stats](https://docs.google.com/spreadsheets/d/1S8Af02fTtTmnbA80wFej19aTLSGP5QH5kyQQp2dVEQc/)

## Usage

  * Clone all related projects
  * Install the dependencies for each
    * Scroll down to see installation procedure
  * `npm start`


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Testing
Run ***npm test*** after performing the following:

```sh
npm install
npm run data
npm run pGen
npm run pSeed
```

### Installing Dependencies
From within the root directory:

```sh
npm install
npm run data
npm run react
npm run pGen
npm run pSeed
```

## Notes
If you receive this error upon testing for pSQL, just run it again
```sh
error: syntax error at or near "s"
  at Connection.parseE (node_modules/pg/lib/connection.js:600:48)
  at Connection.parseMessage (node_modules/pg/lib/connection.js:399:19)
  at Socket.<anonymous> (node_modules/pg/lib/connection.js:115:22)
```

If `npm pSeed` shows an error saying *Fail*, exit immediately and re-run