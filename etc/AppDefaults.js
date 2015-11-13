/* 
 * Copyright (C) 2015 "IoT.bzh"
 * Author "Fulup Ar Foll"
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

// Default config will be superseaded by ProjectRoot/.config-l4a.js $HOME/.config-l4a.js /etc/default/config-l4a.js
config = {
    APPNAME: 'MySampleApp', 
    HOST   : 'localhost',
    PORT   : 8080,
    URLBASE: '/',
    SECRET : Math.random().toString(36).slice(2),
    LOGDIR : __dirname + '/log',
};

module.exports = config;

