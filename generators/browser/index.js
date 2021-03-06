"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Base = require("yeoman-generator");
module.exports = class TheiaBrowser extends Base {
    path() {
        this.sourceRoot(__dirname + '/../../templates');
    }
    writing() {
        this.fs.copyTpl(this.templatePath('app-package.json'), this.destinationPath('browser-app/package.json'), {
            appMode: 'browser',
            params: this.options.params
        });
    }
};
//# sourceMappingURL=index.js.map