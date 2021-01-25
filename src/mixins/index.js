export const mixin = {
    data() {
        return {
            mixinData: 123
        }
    },
    methods: {
        mixinFunction() {
            console.log("这是来自mixin的方法")
        }
    }
}