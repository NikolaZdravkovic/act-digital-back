### `clone project`

```
git clone https://github.com/NikolaZdravkovic/act-digital-back.git
```

### `install`

Go to source folder and install npm/yarn package

```
npm install
# or
yarn install
```
Run (if needed)

```
npm audit fix
```
### `create .env file`
Create .env file inside project and setup environment keys

## ✨  Setup editor js
inside project go to **cd src/plugins/strapi-plugin-react-editorjs**
Run : 

```
npm install
```
After npm is installed for Editor js , go back to main strapi folder
Run : 

```
npm run build 
# and then 
npm run develop
```

After Strapi is up, stop running Strapi for setting the **database** in next step 
Press :

```
'Control'+'c' keys on your keyboard to quit strapi server
```

## 📚 Setup database
Search for **.tmp folder** inside project and copy the **data.db**
If **.tmp** folder is hidden inside project do next thing 

```
1. Open the folder where you want to search for hidden files.
2. Press the “Command” + “Shift” + “.” (period) keys at the same time.
3. The hidden files will show up as translucent in the folder.
````
Now go to **.tmp** folder and copy given **data.db** and replace with new database

### `run strapi`

Go to main source folder and start strapi

```
npm run develop
```
### `login to your strapi account`
Go to **http://localhost:1337/admin** and login

## ✨ Enjoy!