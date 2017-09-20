# Flow
> Radically imrove healthcare in the world!

## Overview
Flow is a Node.js web application built using MongoDB, Seneca.js, Hapi.js and React.js.

## Getting started
1. Install [Node.js Active LTS](https://nodejs.org/)
2. Install [MongoDB](https://www.mongodb.com/)
2. Install [Redis](https://redis.io/)
3. Clone source code from [Bitbucket](https://bitbucket.org/vinnovera/eb-app)

## Dependencies
1. In root of project run `npm install`
2. In services folder run `npm install`
3. In apps folder run `npm install`

## Development

#### Services
1. Go to services folder
2. Run `npm run watch`
3. Run `npm start`

#### Admin
1. Go to apps folder
2. Run `npm run admin watch`
3. Run `npm run admin start`
4. Open app [http://localhost:3333](http://localhost:3333)
5. Open API documentaton [http://localhost:3333/documentation](http://localhost:3333/documentation)

#### Caregiver
1. Go to apps folder
2. Run `npm run caregiver watch`
3. Run `npm run caregiver start`
4. Open app [http://localhost:3222](http://localhost:3222)
5. Open API documentaton [http://localhost:3222/documentation](http://localhost:3222/documentation)

#### Patient
1. Go to apps folder
2. Run `npm run caregiver watch`
3. Run `npm run caregiver start`
4. Open [http://localhost:3000](http://localhost:3000)
5. Open API documentaton[http://localhost:3000/documentation](http://localhost:3000/documentation)

## Test
[Todo] Write about what testing tools that are used etc...

#### Services
1. Go to services folder
2. Run `npm test`

#### Admin
1. Go to apps folder.
2. Run `npm run test:admin`

#### Caregiver
1. Go to apps folder.
2. Run `npm run test:caregiver`

#### Patient
1. Go to apps folder.
2. Run `npm run test:caregiver`

#### Common
1. Go to apps folder.
2. Run `npm run test:common`

## Continous Integrations
[TODO] Write about how it is used
[Jenkins](https://jenkins.e-besok.se/)

## Deployment
TODO Deployment instructions copied from old readme need some loving
1. Make sure it works locally
2. Update `config/production.json` file in both `app` and `services`
3. Update `services/seed/*` files
4. Commit changes
5. Push `develop` branch
6. Jenkins notifies on slack when deploy is finished
7. https://e-besok.se

## Browser Support
TODO Verify these are the browsers that we support...
| Browser | Version |
| :- | :- |
| Chrome | Last 3 major versions |
| Firefox | Last 3 major versions |
| Safari | Last 2 major versions |
| Edge | Last 2 major versions |
| Internet Explorer | 11 |

## Versioning
Version each new release according to [semver.org](semver.org).