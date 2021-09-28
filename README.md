# Suduko
Mobile Suduko application. The motivation for this project is that I have always loved playing Suduko and wanted to create my own version!

# Game Play Demo
<div align ="center">
   <video src="https://user-images.githubusercontent.com/79802526/134953155-a1901aa9-2cdc-40bf-86e1-74429a1a9e1c.mp4"/>
</div>

# Tech/Frameworks used
- [Expo](https://expo.dev/)
- [Jest](https://jestjs.io/)
- [React Native](https://reactnative.dev/)
- [Redux](https://redux.js.org/)
- [TypeScript](https://www.typescriptlang.org/)

# Directory Structure
<details>
<summary><b>suduko/</b></summary>
   
*  <details>
   <summary><b>assets/</b></summary>
   
   *  <details>
      <summary><b>fonts/</b></summary>
   
       - [JustAnotherHand\-Regular.ttf](assets/fonts/JustAnotherHand-Regular.ttf)
       - [SpaceMono\-Regular.ttf](assets/fonts/SpaceMono-Regular.ttf)
   
      </details>
   
   *  <details>
      <summary><b>images/</b></summary>
   
       - [adaptive\-icon.png](assets/images/adaptive-icon.png)
       - [desk.webp](assets/images/desk.webp)
       - [favicon.png](assets/images/favicon.png)
       - [icon.png](assets/images/icon.png)
       - [splash.png](assets/images/splash.png)
       - [square.webp](assets/images/square.webp)
   
      </details>
   
   </details>
   
*  <details>
   <summary><b>src/</b></summary>
   
   *  <details>
      <summary><b>__tests__/</b></summary>
   
      *  <details>
         <summary><b>Component_Tests/</b></summary>
   
         - [DifficultySelection.test.tsx](src/__tests__/Component_Tests/DifficultySelection.test.tsx)
         - [GameDisplay.test.tsx](src/__tests__/Component_Tests/GameDisplay.test.tsx)
         - [Home.test.tsx](src/__tests__/Component_Tests/Home.test.tsx)
         - [TextStroke.test.jsx](src/__tests__/Component_Tests/TextStroke.test.jsx)
 
          </details>
   
       - [mock.ts](src/__tests__/mock.ts)
       - [renderWithRedux.tsx](src/__tests__/renderWithRedux.tsx)
   
      </details>
   
   *  <details>
      <summary><b>components/</b></summary>
  
       - [Board.tsx](src/components/Board.tsx)
       - [DifficultySelection.tsx](src/components/DifficultySelection.tsx)
       - [GameDisplay.tsx](src/components/GameDisplay.tsx)
       - [GridSquare.tsx](src/components/GridSquare.tsx)
       - [Home.tsx](src/components/Home.tsx)
       - [SelectionBar.tsx](src/components/SelectionBar.tsx)
       - [SelectionSquare.tsx](src/components/SelectionSquare.tsx)
       - [SubBox.tsx](src/components/SubBox.tsx)
       - [TextStroke.tsx](src/components/TextStroke.tsx)
       - [Timer.tsx](src/components/Timer.tsx)
       - [Title.tsx](src/components/Title.tsx)
       - [Toggle.tsx](src/components/Toggle.tsx)
       - [Winner.tsx](src/components/Winner.tsx)
   
      </details>
   
     *  <details>
        <summary><b>state/</b></summary>

        *  <details>
           <summary><b>actions/</b></summary>

           - [actions.ts](src/state/actions/actions.ts)
           - [types.ts](src/state/actions/types.ts)

           </details>

        *  <details>
           <summary><b>reducers/</b></summary>

            - [boardReducer.ts](src/state/reducers/boardReducer.ts)
            - [colorReducer.ts](src/state/reducers/colorReducer.ts)
            - [difficultyReducer.ts](src/state/reducers/difficultyReducer.ts)
            - [entryModeReducer.ts](src/state/reducers/entryModeReducer.ts)
            - [gameStateReducer.ts](src/state/reducers/gameStateReducer.ts)
            - [index.ts](src/state/reducers/index.ts)
            - [notesReducer.ts](src/state/reducers/notesReducer.ts)
            - [selectionReducer.ts](src/state/reducers/selectionReducer.ts)
            - [timerReducer.ts](src/state/reducers/timerReducer.ts)

           </details>

          - [boardController.ts](src/state/boardController.ts)
          - [index.ts](src/state/index.ts)
          - [store.ts](src/state/store.ts)

        </details>

- [app.json](app.json)
- [App.tsx](App.tsx)
- [babel.config.js](babel.config.js)
- [jest.config.js](jest.config.js)
- [LICENSE](LICENSE)
- [package\-lock.json](package-lock.json)
- [package.json](package.json)
- [README.md](README.md)
- [tsconfig.json](tsconfig.json)
- [types.tsx](types.tsx)
 
</details>
   
# Installation
Clone this repository:
```
git clone https://github.com/aps1226/suduko
cd suduko
```
Install npm packages:
```
npm install
```

# NPM Scripts
Serve the app:
```
npm start
```
Run the app through an android emulator:
```
npm run android
```
Run the app through an ios simulator:
```
npm run ios
```
Run the app in the browser:
```
npm run web
```
Create native IOS and Android project files:
```
npm run eject
```
Run tests:
```
npm run tests
```

# License

MIT License

Copyright (c) 2021 aps1226

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
