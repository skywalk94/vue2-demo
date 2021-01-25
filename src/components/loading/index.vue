<template>
  <transition name="fade">
    <div class="load" v-if="isLoad">
      <div class="load-pop">
        <div class="load-icon"></div>
        <div class="load-text">{{msg}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        isLoad: false,
        msg: '加载中...'
      }
    },
    methods: {
      show(val) {
        if (val) {
          this.msg = val
        }
        this.isLoad = true
      },

      hide() {
        this.msg = ''
        this.isLoad = false
      }
    }
  }
</script>
<style lang="less" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }

  .load {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 10;

    &-pop {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;
    }

    &-icon {
      display: flex;
      width: 50px;
      height: 50px;
      margin: 0 auto 15px;
      border: 3px solid transparent;
      border-top-color: #409eff;
      border-bottom-color: #409eff;
      border-radius: 50%;
      animation: outRing 0.8s linear infinite;

      @keyframes outRing {
        to {
          transform: rotate(360deg);
        }
      }

      &::before {
        content: "";
        display: block;
        width: 12px;
        height: 12px;
        margin: auto;
        border: 3px solid #409eff;
        border-radius: 50%;
        animation: zoom 0.5s alternate ease-in infinite;
      }

      @keyframes zoom {
        from {
          transform: scale(1);
        }

        to {
          transform: scale(1.2);
        }
      }
    }

    &-text {
      color: #409eff;
      font-size: 20px;
      margin-top: 5px;
      text-align: center;
    }
  }
</style>