System.register(["aurelia-binding", "aurelia-templating", "aurelia-pal"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_binding_1, aurelia_templating_1, aurelia_pal_1, AttachFocus;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            },
            function (aurelia_templating_1_1) {
                aurelia_templating_1 = aurelia_templating_1_1;
            },
            function (aurelia_pal_1_1) {
                aurelia_pal_1 = aurelia_pal_1_1;
            }
        ],
        execute: function () {
            AttachFocus = /** @class */ (function () {
                function AttachFocus(element) {
                    this.element = element;
                    this.value = true;
                }
                AttachFocus.prototype.attached = function () {
                    if (this.value === '' || (this.value && this.value !== 'false')) {
                        this.element.focus();
                    }
                };
                /**
                 * @internal
                 */
                // tslint:disable-next-line:member-ordering
                AttachFocus.inject = [aurelia_pal_1.DOM.Element];
                AttachFocus = __decorate([
                    aurelia_templating_1.customAttribute('attach-focus', aurelia_binding_1.bindingMode.oneTime)
                ], AttachFocus);
                return AttachFocus;
            }());
            exports_1("default", AttachFocus);
        }
    };
});
