var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
import { Controller, Post, Get, Patch, HttpCode, HttpStatus, Delete, } from '@nestjs/common';
import { Car } from './car.entity.js';
let CarsController = (() => {
    let _classDecorators = [Controller('cars')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _create_decorators;
    let _getAll_decorators;
    let _getById_decorators;
    let _update_decorators;
    let _deleteById_decorators;
    let _setOwner_decorators;
    var CarsController = class {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _create_decorators = [Post()];
            _getAll_decorators = [Get()];
            _getById_decorators = [Get(':id')];
            _update_decorators = [Patch(':id'), HttpCode(HttpStatus.NO_CONTENT)];
            _deleteById_decorators = [Delete(':id'), HttpCode(HttpStatus.NO_CONTENT)];
            _setOwner_decorators = [Patch(':carId/set-owner/:userId'), HttpCode(HttpStatus.NO_CONTENT)];
            __esDecorate(this, null, _create_decorators, { kind: "method", name: "create", static: false, private: false, access: { has: obj => "create" in obj, get: obj => obj.create }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getAll_decorators, { kind: "method", name: "getAll", static: false, private: false, access: { has: obj => "getAll" in obj, get: obj => obj.getAll }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _getById_decorators, { kind: "method", name: "getById", static: false, private: false, access: { has: obj => "getById" in obj, get: obj => obj.getById }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _update_decorators, { kind: "method", name: "update", static: false, private: false, access: { has: obj => "update" in obj, get: obj => obj.update }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _deleteById_decorators, { kind: "method", name: "deleteById", static: false, private: false, access: { has: obj => "deleteById" in obj, get: obj => obj.deleteById }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(this, null, _setOwner_decorators, { kind: "method", name: "setOwner", static: false, private: false, access: { has: obj => "setOwner" in obj, get: obj => obj.setOwner }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CarsController = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        // Здесь (в методах), будет обращение к сервису
        // но пока пишем тренировочный код, который
        // позволит нам протестировать контроллер
        create(car) {
            console.log('Saved car: ', car);
            car.id = 5;
            return car;
        }
        getAll() {
            const car1 = new Car();
            car1.brand = 'Nissan';
            const car2 = new Car();
            car2.brand = 'Toyota';
            return [car1, car2];
        }
        getById(id) {
            console.log(id);
            const car = new Car();
            car.brand = 'Honda';
            return car;
        }
        update(id, car) {
            console.log(id);
            console.log(car);
        }
        deleteById(id) {
            console.log(id);
        }
        setOwner(carId, userId) {
            console.log(carId);
            console.log(userId);
        }
        constructor() {
            __runInitializers(this, _instanceExtraInitializers);
        }
    };
    return CarsController = _classThis;
})();
export { CarsController };
