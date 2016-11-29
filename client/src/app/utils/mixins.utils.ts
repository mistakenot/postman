export function applyMixins(derivingType: any, mixins: any) {
  mixins.forEach(mixin => {
    Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
      derivingType.prototype[name] = mixin.prototype[name];
    });
  });
}