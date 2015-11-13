/* 
 * Copyright 2014 Fulup Ar Foll
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Config () {
   'use strict';
   var Var=[];
   var conf;

   // Vars file path last one supersead first one.
   var files= ["./Defaults", "/etc/default/noderc", process.env.NODERC, process.env.HOME + "/.noderc", "../.noderc"];

   for (var idx in files) { // Merge config files 
      if (files[idx]) {
        try {conf = require (files[idx]);} catch(e) {conf=[];}
        for (var i in conf) Var[i] = conf[i];
      }     
   }
 return Var;
}

// console.log ("config=", Config);
module.exports = Config();

