
//
/**
  npm  is a global command and it comes with the node 

  local dependency : it is used only in a particular project (mostly prefered )
  npm i <packageName>

  global dependency : use it in any project (not prefered )
  npm install -g <packageName>
  sudo npm install -g <packageName>   ( for mac if above gives error )

  package.json - manifest file ( stores important information about project/package),
  there are three ways to create this package.json file:
  1. manual approach : create manualy package.json in the root directory ,and create properties
  2. use of npm init command ( step by step , press enter to skip )
  3. npm init -y command ( everything is default )

run these following commands and see the changes by refreshing the explorer

   npm init
   npm init -y
   npm i lodash
   npm i bootstrap
 */

   const _ = require('lodash');
   const item = [1,[2,[3,[4]]]];
   const newItems = _.flattenDeep(item);
   console.log(newItems); //o/p :  [ 1, 2, 3, 4 ]

