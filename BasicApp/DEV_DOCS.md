[Run](#run)
[Run with Expo](#run-with-expo)
[Environments](#environments)
[Building](#building)
[Reusing Screens](#reusing-screens)

# Run

Before running, application dependencies should be installed and linked.

`yarn && npx react-native link && cd ios && pod install` from the project root.

By default, Demo Application starts like a regular React Native application. In case you want it to run
with Expo, see [Expo](#run-with-expo) section.

`yarn start` from the project root to start Metro Bundler.
`yarn ios` or `yarn android` to run application on the device.

# Run with Expo

`expo start` from the project root. This will start a local Expo server and output an options to run
application on iOS, Android or Web.

When running with Expo, `ios` and `android` folder are not needed for this project.
Also, some of the business logic may have different implementation for Expo and Bare React Native apps.
In Demo App, we handle it with [`.expo` file extension](https://docs.expo.io/versions/latest/bare/using-expo-client/#practical-patterns-for-client-compatible-bare-apps).


# Environments

Demo Application supports two environments: 

- **Production**  

- **Development**  

Environment configuration can be found in [./env](./env) dir.
It includes `.env` files to locate environment-dependent modules and tsconfig files for each environment.
To switch environment manually, you can run `yarn env prod` or `yarn env dev`.

## Production mode

`yarn start`

## Development mode
  
# Building

## Transpile to JavaScript

We use [Typescript](https://www.typescriptlang.org/) to build Demo App.
Use `yarn build` to compile it to JavaScript. This will output the source code with `.js` files in
[`./dist/tsc-out`](./dist/tsc-out) dir.

Don't use this output as source code in your project in case you would like to [reuse screens](#reusing-screens).

## Web Bundle

`expo build:web` from the project root to build runnable web bundle.
This will output web bundle in [`./web-build`](./web-build) dir.
 
## Structure

Each screen is structured in the same way:

- index.ts - Screen itself
- extra - Directory containing components, data, and 3rd-party modules used by screen
- assets - Directory containing assets used by screen
