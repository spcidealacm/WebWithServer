## For Developer:
- Install requirement tools
  ```
  yarn require
  ```
- Install project dev library
  ```
  yarn install
  ```
- Run on devlope mode
  ```
  yarn dev
  ```
- <h4 id='preview'>Build preview production</h4>

  ```
  yarn build
  ```
- Run on project mode (need [Build preview production](#preview))
  ```
  yarn start 
  ```
- <h4 id='prod'>Export production</h4>

  ```
  yarn prod (without library)
  yarn prod_offline (with library)
  ```

  production without library means you need install library in target machines. it needs network install library but the prodcution size is smaller.  
  production offline mode with library which means you don't need install library by yourself.  
## For User:
1. Export prodcution  
  see [Export production](#prod)
2. Copy production folder to target machnies
3. Install require (only first time need, internet required.)
    ```
    yarn require 
    yarn install (only if you use online mode)
    ```
4. Run Server
    ```
    yarn start
    ```